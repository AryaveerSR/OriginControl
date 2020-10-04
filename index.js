module.exports = (args) => {
    if (!args) { throw new Error('Arguments Not Defined') }
    if (!args.allowedOrigins && !args.blockedOrigins) { throw new Error('One of Allowed Origins or Blocked Origins is Required') }
    if (!args instanceof Object) { throw new Error(`Arguments Needed of type Object`) }
    if (args.allowedOrigins && !args.blockedOrigins) {
        if (!Array.isArray(args.allowedOrigins)) { throw new Error('Allowed Origin Needs to be type of Array') }
        return function(req, res, next) {
            if (args.allowedOrigins.indexOf(req.get('host')) != '-1') { next(); } else { res.end(args.blockedMessage ? args.blockedMessage : 404) }
        }
    }
    if (!args.allowedOrigins && args.blockedOrigins) {
        if (!Array.isArray(args.blockedOrigins)) { throw new Error('Blocked Origin Needs to be type of Array') }
        return function(req, res, next) {
            if (args.blockedOrigins.indexOf(req.get('host')) == '-1') { next(); } else { res.end(args.blockedMessage ? args.blockedMessage : 404) }
        }
    }
    if (args.allowedOrigins && args.blockedOrigins) {
        if (!Array.isArray(args.allowedOrigins)) { throw new Error('Allowed Origin Needs to be type of Array') }
        if (!Array.isArray(args.blockedOrigins)) { throw new Error('Blocked Origin Needs to be type of Array') }
        return function(req, res, next) {
            if (args.allowedOrigins.indexOf(req.get('host')) != '-1' && args.blockedOrigins.indexOf(req.get('host')) == '-1') { next(); } else { res.end(args.blockedMessage ? args.blockedMessage : 404) }
        }
    }
}