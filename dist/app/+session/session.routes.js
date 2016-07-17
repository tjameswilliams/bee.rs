"use strict";
var startsession_component_1 = require('./startsession.component');
var tastinground_component_1 = require('./tastinground.component');
var hostround_component_1 = require('./hostround.component');
exports.SessionRoutes = [
    {
        path: 'start-session',
        component: startsession_component_1.StartSessionComponent
    },
    {
        path: 'tasting-round/:id',
        component: tastinground_component_1.TastingRoundComponent
    },
    {
        path: 'host-round/:id',
        component: hostround_component_1.HostRoundComponent
    }
];
