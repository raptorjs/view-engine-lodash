var loader = require('./loader');

// dust.debugLevel = 'DEBUG';

module.exports = function createEngine(config, viewEngine) {
    var lodash = config.lodash;
    var compiler;
    var runtime;

    if (lodash) {
        compiler = lodash.template;
        runtime = lodash;
    }

    return {
        writer: function(templateFunc, templateData, out) {
            if (!templateData) {
                templateData = {};
            }

            var html = templateFunc(templateData);
            out.write(html);
        },
        buildTemplateData: function(path, templateData, out) {
            templateData.stream = out.stream;
            templateData.templatePath = path;
            return templateData;
        },
        load: function(path) {
            return loader(compiler, runtime, path);
        }
    };
};
