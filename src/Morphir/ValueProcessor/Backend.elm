module Morphir.ValueProcessor.Backend exposing (..)

import Debug exposing (log)
import Dict
import Json.Encode as Encode
import Morphir.File.FileMap exposing (FileMap)
import Morphir.IR.Distribution exposing (Distribution(..))
import Morphir.IR.Name as Name
import Morphir.IR.Value exposing (Value(..))


type alias Options =
    {}


type alias Error =
    String


mapDistribution : Options -> Distribution -> FileMap
mapDistribution options distro =
    case distro of
        Library packageName _ packageDef ->
            mapPackageDefinition packageName packageDef


mapPackageDefinition packageName packageDef =
    packageDef.modules
        |> Dict.toList
        |> List.concatMap
            (\( modName, modDef ) ->
                modDef.value.values
                    |> Dict.values
                    |> List.map (.value >> .value)
                    |> List.map
                        (\valueDef ->
                            case valueDef.body of
                                Literal a b ->
                                    "Literal"

                                Constructor va fQName ->
                                    "Constructor"

                                Tuple va values ->
                                    "Tuple"

                                List va values ->
                                    "List"

                                Record va dict ->
                                    "Record"

                                Variable va name ->
                                    "Variable"

                                Reference va fQName ->
                                    "Reference"

                                Field va value name ->
                                    "Field"

                                FieldFunction va name ->
                                    "Field Function"

                                Apply va value _ ->
                                    "Apply"

                                Lambda va pattern value ->
                                    "Lambda"

                                LetDefinition va name definition value ->
                                    "Let Definition"

                                LetRecursion va dict value ->
                                    "Let Reecursion"

                                Destructure va pattern value _ ->
                                    "Destructor"

                                IfThenElse va value _ _ ->
                                    "IfThenElse"

                                PatternMatch va value list ->
                                    "PatternMatch"

                                UpdateRecord va value dict ->
                                    "UpdateRecord"

                                Unit va ->
                                    "Unit"
                        )
            )
        |> Encode.list Encode.string
        |> Encode.encode 2
        |> Dict.singleton ( [], "Values.json" )
