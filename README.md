# OriginControl

A Express Middleware to Allow / Block Particular Origins

# Installation 

Use `npm i origincontrol` to Install the Module

# Use

To use the Middleware on all Requests, require the Module using :

```
const OriginControl = require('origincontrol');
........ // Express Code
app.use(OriginControl({
 // Arguments
}))
```

To Use the Middleware on Specific Requests, Use 

```
app.get('/', OriginControl({
 // Arguments
}), function (req, res, next) {
 // Code if its Allowed
})
```

# Arguments 

-) Argument Object, A  Object Containing Important Config 
The Config for the Object :

1) allowedOrigins, Type : Array, Used to Store the List of allowed Origins
2) blockedOrigins, Type : Array, Used to Store the List of blocked Origins
3) blockedMessage, Type : String, Used to Store the Response for Blocked Request, Defaults to 404

One of the allowedOrigins or blockedOrigins is nessessary, others are Optional