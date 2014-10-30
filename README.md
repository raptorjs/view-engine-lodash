view-engine-lodash
==================
Lo-Dash [view engine](https://github.com/patrick-steele-idem/view-engine)

# Installation

```
npm install view-engine-lodash --save
```

# Usage

Enable the Lo-Dash view engine:
```javascript
require('view-engine').register(
    'lodash',
    require('view-engine-lodash'),
    {
        lodash: require('lodash') /* OPTIONAL */
    });
```

The Lo-Dash view engine is now ready to be used elsewhere in your code (either client-side or server-side):

```javascript
var templatePath = require.resolve('./hello.lodash');
var template = require('view-engine').load(templatePath);

// Callback-style
template.render({ name: 'John'}, function(err, data) {
    if (err) {
        console.log('Failed to render: ' + err);
        return;
    }

    console.log('Output: ' + data);
});

// Streaming-style
var out = require('fs').createOutputStream('hello.out', {encoding: 'utf8'});
template.stream({ name: 'John'}).pipe(out);

// Render to an existing render context
template.render({ name: 'John'}, context);
```

It is recommended to use the [RaptorJS Optimizer](https://github.com/raptorjs/optimizer) as the JavaScript bundler, along with the [optimizer-lodash](https://github.com/raptorjs/optimizer-lodash) plugin.

The client-side loader expects the Lo-Dash templates to be compiled to a CommonJS module and transported down to the client as code similar to the following:

```javascript
module.exports=function(_) {
    return /* compiled source produced by lodash.template(src).source */;
};
```

See the documentation for the [view-engine](https://github.com/patrick-steele-idem/view-engine) module for more information.
