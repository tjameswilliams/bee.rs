"use strict";
var taster_component_1 = require('./taster.component');
var lobby_component_1 = require('./lobby.component');
exports.TasterRoutes = [
    {
        path: 'new-taster',
        component: taster_component_1.TasterComponent
    },
    {
        path: 'please-wait',
        component: lobby_component_1.LobbyComponent
    }
];
