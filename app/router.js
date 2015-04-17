import Ember from 'ember';
import config from './config/environment';

var moduleNavigation = Ember.Object.create();
var route = Ember.RouterDSL.prototype.route;

Ember.RouterDSL.prototype.route = function(name, options) {

    if(options['navLabel'] && options['className']) {
        var navObj = Ember.Object.create();
        navObj.setProperties({
            label: options['navLabel'],
            route: name,
            className: options['className']
        });

        moduleNavigation.set(name, navObj);
    }

    route.apply(this, arguments);
};

var Router = Ember.Router.extend({
    location: config.locationType,
    moduleNavigation: moduleNavigation
});

Router.map(function() {
    this.route("location", {navLabel: "Location", className: "glyphicon glyphicon-home"});
    this.route("speakers", {navLabel: "Speakers", className: "glyphicon glyphicon-bullhorn"});
});

export default Router;
