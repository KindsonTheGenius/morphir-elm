module Morphir.ValueProcessor.Backend exposing (..)

import Debug exposing (log)
import Dict
import Json.Encode as Encode
import Morphir.File.FileMap exposing (FileMap)
import Morphir.IR.Distribution exposing (Distribution(..))
import Morphir.IR.Name as Name
import Morphir.IR.Package as Package exposing (PackageName)
import Morphir.IR.SDK as SDK
import Morphir.IR.Value as Value exposing (Value(..), toRawValue)
import Morphir.IR.Value.Codec exposing (encodeValue)
import Morphir.Value.Interpreter exposing (evaluate)


type alias Options =
    {
    valueName : String
    }


type alias Error =
    String


mapDistribution : Options -> Distribution -> FileMap
mapDistribution options distro =
    case distro of
        Library packageName _ packageDef ->
            mapPackageDefinition options distro packageName packageDef

mapPackageDefinition: Options -> Distribution -> PackageName -> Package.Definition ta va -> FileMap
mapPackageDefinition options distro packageName packageDef =
    packageDef.modules
        |> Dict.toList
        |> List.concatMap
            (\( modName, modDef ) ->
                modDef.value.values -- the access doc typeDef
                    |> Dict.toList
                    |> List.filterMap (\(valueName, accDocValueDef) ->
                        if (valueName |> Name.toCamelCase) == (options.valueName) then
                            let
                                adc = log "Original Expression: "
                                    accDocValueDef.value.value.body
                                abc = log "Evaluated: "
                                    (evaluate SDK.nativeFunctions distro (accDocValueDef.value.value.body |> toRawValue))
                            in
                             Just  ((valueName |> Name.toCamelCase), (accDocValueDef.value.value.body |> Value.toString))
                        else if options.valueName == "" then
                             Just  ((valueName |> Name.toCamelCase), (accDocValueDef.value.value.body |> Value.toString))
                        else
                             Nothing
                    )
        )
        |> List.foldl(\item myDict -> Dict.insert (item |> Tuple.first) (item |> Tuple.second) myDict) Dict.empty
        |> Encode.dict identity Encode.string
        |> Encode.encode 2
        |> Dict.singleton ([], "AwesomeValues")

