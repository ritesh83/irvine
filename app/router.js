import CustomRouter from './custom-router';

import config from './config/environment';

var Router = CustomRouter.extend({
    location: config.locationType,
});

Router.map(function() {
    this.route("location", {navLabel: "Location", className: "glyphicon glyphicon-home"});

    this.route("speakers", {navLabel: "Speakers", className: "glyphicon glyphicon-bullhorn"});
});


export default Router;
