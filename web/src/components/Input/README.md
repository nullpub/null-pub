# Input Spec

Following is the specification for a general form input in the @nll style

## Statuses

Each input has a status object with the following properties

- value : ValueType (default: '')
- mask : MaskType (default: '')
- clean : boolean (default: true)
- invalid : false | string (default: false)
- focused : boolean (default: false)
- disabled : boolean (default: false)

These constitute the State<ValueType, MaskType> of the input

## Handlers

Each input has its own set of handlers to decide how to change its status

- masker : <T>(state: State<V, M>) => M
- cleaners : (<T>(state: State<V, M>) => boolean)[]
- validators : (<T>(state: State<V, M>) => false | string)[]
- focusers : (<T>(state: State<V, M>) => boolean)[]
- disablers : (<T>(state: State<V, M>) => boolean)[]

## Phases

The input
