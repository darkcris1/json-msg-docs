--vars
title: Json-Msg | Types
description: json-msg types
--

# Types

```javascript
import jm from 'json-msg'

jm.num() // Number
jm.str() // String
jm.bool() // boolean
jm.any() // any
joi.array() // array
jm.sameAs() // reference for the same input
// {} Object literal is objectType by default and its required. Thats why there is no object type

// Destructuring them

const { str, num, bool, any, array } = jm

const todoSchema = {
  title: str(),
  time: num(),
  complete: bool(),
  todos: array(),
  id: num({ min: 5, max: 10000 }),
}
```

> All types are required by default

# str

```javascript
const { str } = jm
const schema = {
  username: str({ min: 5 }),
}

const numWithOption = {
  username: str({
    min: 6,
    max: 10,
    label: 'Name',
    alphanum: true,
    email: true,
    messages: {
      email: '%label% must be a valid email',
    },
  }),
}
```

# num

```javascript
const { num } = jm
const schema = {
  pin: num(),
}

const numWithOption = {
  pin: num({ min: 6, max: 10, label: 'Name', integer: true }),
}
```

# array

```javascript
const { array } = jm
const schema = {
  pin: array(),
}

const arrayWithOption = {
  pin: array({ min: 6, max: 10, items: str() }),
}
```

> min and max is the length of the array

> items: is the type inside of the array

# bool

```javascript
const { bool } = jm
const schema = {
  pin: bool({ label: 'Pin' }),
}

const boolWithOption = {
  pin: bool({ required: false, allow: [null, 0, undefined] }),
}
```

# sameAs

> sameAs is just like a ref in joi

> This is only allowed on relative path

```javascript
const { str, sameAs, num } = jm
const schema = {
  password: str({ min: 5 }),
  confirm_password: sameAs('password'),
}

const sameAsWithOption = {
  password: str({ min: 5 }),
  confirm_password: sameAs('password', { label: 'Confirm Password' }),
}

//extras

const schema = {
  storage: {
    pin: num({ digit: 4 }),
  },
  same_pin: sameAs('storage.pin'),
}
```

# any

```javascript
const { any } = jm
const schema = {
  texts: any(),
}

const anyWithOption = {
  texts: any({ required: false }),
}
```
