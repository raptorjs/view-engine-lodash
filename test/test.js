'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');

var lodashViewEngine = require('../'); // Load this module just to make sure it works
var viewEngine = require('view-engine');
viewEngine.register('lodash', lodashViewEngine, {});

describe('view-engine-lodash' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }
        done();
    });

    it('should render a simple template', function(done) {

        var template = viewEngine.load(require.resolve(nodePath.join(__dirname, 'fixtures/simple.lodash')));
        template.render({name: 'Frank'}, function(err, html) {
            if (err) {
                return done(err);
            }

            expect(html).to.equal("Hello Frank!");
            done();
        });
    });


});
