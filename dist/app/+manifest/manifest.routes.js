"use strict";
var manifest_component_1 = require('./manifest.component');
var manifestinfo_component_1 = require('./manifestinfo.component');
var beereditor_component_1 = require('./beereditor.component');
exports.ManifestRoutes = [
    {
        path: 'info-manifest',
        component: manifestinfo_component_1.ManifestInfoComponent
    },
    {
        path: 'beer-manifest',
        component: manifest_component_1.ManifestComponent
    },
    {
        path: 'beer-editor/:id',
        component: beereditor_component_1.BeerEditorComponent
    },
    {
        path: 'beer-editor',
        component: beereditor_component_1.BeerEditorComponent
    }
];
