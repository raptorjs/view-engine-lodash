module.exports = function(compiler, runtime, path) {
    if (!runtime) {
        runtime = require('lodash');
    }

    var createFunc = require(path);
    var templateFunc = createFunc(runtime);
    return templateFunc;
};
