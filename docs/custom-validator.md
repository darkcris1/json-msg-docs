--vars
title: Custom Validator | json-msg
description: Add a custom validator
--

# Custom Validator

### Regexp

```javascript
import jm from 'json-msg'

const schema = {
  username: jm.str({ hasNumber: /[0-9]/ }),
}
```

### Function

- **value** is the value of the data that you passed in
- **function** must return a **boolean**

```javascript
import jm from 'json-msg'

const schema = {
  username: jm.str({ hasNumber: (value) => /[0-9]/.test(value) }),
}
```
