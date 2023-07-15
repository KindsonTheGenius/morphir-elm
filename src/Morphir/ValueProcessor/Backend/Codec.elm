module Morphir.ValueProcessor.Backend.Codec exposing (..)

import Json.Decode as Decode
import Morphir.ValueProcessor.Backend exposing (Options)


decodeOptions =
    Decode.succeed Options
