--vars
title: JSON-MSG - API
description: json-msg api for all functions
--

# @(title)

**options: object?** - options for validation

## jm.str(options?)

| options       | type               | description                                |
| ------------- | ------------------ | ------------------------------------------ |
| required      | boolean?           | check if the value is not empty            |
| min           | number?            | min length                                 |
| max           | number?            | max length                                 |
| alphanum      | boolean?           | validate if the value is only alphanumeric |
| label         | string?            | label of the message                       |
| email         | boolean?           | check if the value is valid email          |
| allow         | any[]?             | add a allowed values                       |
| messages      | object?            | Set a custom messages                      |
| [key?:string] | regexp \| function | custom validator                           |

## jm.num(options?)

| options       | type                 | description                        |
| ------------- | -------------------- | ---------------------------------- |
| required      | boolean?             | check if the value is not empty    |
| min           | number?              | minimum value                      |
| max           | number?              | maximum value                      |
| integer       | boolean?             | check if the value is integer      |
| float         | boolean              | check if the value is float number |
| digit         | number?              | check if the digits is             |
| allow         | any[]?               | add an allowed values              |
| label         | string?              | label of the message               |
| messages      | object?              | Set a custom messages              |
| [key?:string] | regexp? \| function? | custom validator                   |

## jm.bool(options?)

| options       | type                 | description                     |
| ------------- | -------------------- | ------------------------------- |
| required      | boolean?             | check if the value is not empty |
| allow         | any[]?               | add an allowed values           |
| label         | string?              | label of the message            |
| messages      | object?              | Set a custom messages           |
| [key?:string] | regexp? \| function? | custom validator                |

## jm.array(options?)

| options       | type                 | description                         |
| ------------- | -------------------- | ----------------------------------- |
| required      | boolean?             | check if the value is not empty     |
| min           | number?              | minimum length                      |
| max           | number?              | maximum length                      |
| items         | jm-types[]?          | types of the items inside the array |
| allow         | any[]?               | add an allowed values               |
| label         | string?              | label of the message                |
| messages      | object?              | Set a custom messages               |
| [key?:string] | regexp? \| function? | custom validator                    |

## jm.sameAs(path?, options?)

**path: string?** - relative path of reference

| options  | type    | description           |
| -------- | ------- | --------------------- |
| label    | string? | label of the message  |
| messages | object? | Set a custom messages |

## jm.any(options?)

| options  | type     | description                     |
| -------- | -------- | ------------------------------- |
| required | boolean? | check if the value is not empty |
| messages | object?  | Set a custom messages           |

## jm.validate(data, schema, options?)

### jm.validateAsync(data, schema, options?)

**data: any** - data that you need to pass in

**schema: object | jm-types** - an object or any json-msg types

| options       | type     | description                                          |
| ------------- | -------- | ---------------------------------------------------- |
| abortEarly    | boolean? | Abort Immediately if there is an error on validation |
| showAllErrors | boolean? | show all the errors on the array                     |

## jm.defaultMessages(messages)

| options  | type   | description                     |
| -------- | ------ | ------------------------------- |
| messages | object | set a default messages globally |
