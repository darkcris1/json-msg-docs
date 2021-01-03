--vars
title: Json Msg | Custom Messages
--

# Custom Error Messages

- **%label%** is the label of your data
- **%keyValue%** is the value of the keys eg. min: 5000
- **%value%** is the data value that pass in

> The key must be the **same** as the **validator key**

### Set messages directly on types

```javascript
import jm from 'json-msg'

const schema = {
  username: jm.str({
    min: 5,
    messages: { min: '%label% must be less than 5' },
  }),
}
```

### Set A messages globally

```javascript
jm.defaultMessage({
  string: {
    hasNumber: '%label% must have a number',
    /// You can set everything including min, max , type etc//.
    hasUpperCase: '%value% is invalid, it should have uppercase letter',
    min: 'the %keyValue% is not the minimum length',
    type: '%label% must be a string text blablabla....',
  },
})

jm.defaultMessage({
  number: {
    //You can also set the number messages
  },
  boolean: {
    //You can also set the boolean messages
  },
  array: {
    //You can also set the arra messages
  },

  sameAs: string, // You can also set sameAs
})
```
