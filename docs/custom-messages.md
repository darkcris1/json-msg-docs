--vars
title: Json Msg | Custom Messages
--

# Custom Messages

## There are two ways to set a message in json-msg

### 1st way

```javascript
// set message directly into the type
const hasNumberString = str({
   hasNumber: /[0-9]/,
   min: 5,
   label: "Username",
   message: {
     //hasNumber key should be the same to the validator
     hasNumber: "%label% must have a number",

     // %keyValue% is the min: 5
     min: "%label% must atleast %keyValue% characters length",
   }
})
jm.validate("stts",hasNumberString))
// return "Username must have a number"

// if you validate a single value the label is "this" by default

// if the showAllErrors are true this will return an array of messages
jm.validate("stts",hasNumberString, {showAllErrors: true}))
/* return [
  "Username must have a number",
  "Username must atleast 5 characters length"
]
*/

```
