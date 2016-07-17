"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./+about/index');
var index_2 = require('./+home/index');
var index_3 = require('./+host/index');
var manifest_routes_1 = require('./+manifest/manifest.routes');
var session_routes_1 = require('./+session/session.routes');
var taster_routes_1 = require('./+taster/taster.routes');
var summary_routes_1 = require('./+summary/summary.routes');
var routes = index_2.HomeRoutes.concat(index_1.AboutRoutes, index_3.HostRoutes, manifest_routes_1.ManifestRoutes, session_routes_1.SessionRoutes, taster_routes_1.TasterRoutes, summary_routes_1.SummaryRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
];
