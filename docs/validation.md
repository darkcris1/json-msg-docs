--vars
title: JSON-MSG validations
description: json-msg validation
--

# Validation

```javascript

const { str, num, bool, any, array } = jm

const todoSchema = {
  title: str(),
  time: num(),
  complete: bool(),
  todos: array(),
  id: num({ min: 5, max: 10000 }),
}

const todoData = {
  title: 'lorem ipsum',
  time: 1692565626,
  complete: false,
  todos: ['Shopping', 'Rading books'],
  id: 2,
}

// you can destructure the validate if you like

jm.validate(todoData, todoSchema)

/* return
    {
      id: "id must be greater than 2"
    }

    since the id is less than 5
*/

// asynchronous validation
jm.validateAsync(todoData, todoSchema)
// This will will return a promise

// You can also validate a single value
jm.validate("stts",num()))
//return "This must be a number"
```

# validateAsync

```javascript
jm.validateAsync(todoData, todoSchema)
```

# Single Validation

```javascript
jm.validate(123, num())
```

# Option

abortEarly? - Abort Immediately if there is an error on validation

showAllErrors? - show all the errors on the array

```javascript
// default value
jm.validate(data, schema, { abortEarly: true, showAllErrors: false })
```
