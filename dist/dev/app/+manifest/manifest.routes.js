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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbWFuaWZlc3QvbWFuaWZlc3Qucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCx1Q0FBc0MsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRSxxQ0FBb0Msd0JBQXdCLENBQUMsQ0FBQTtBQUVoRCxzQkFBYyxHQUFpQjtJQUMxQztRQUNFLElBQUksRUFBRSxlQUFlO1FBQ3JCLFNBQVMsRUFBRSw4Q0FBcUI7S0FDakM7SUFDRjtRQUNHLElBQUksRUFBRSxlQUFlO1FBQ3JCLFNBQVMsRUFBRSxzQ0FBaUI7S0FDN0I7SUFDRjtRQUNHLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsU0FBUyxFQUFFLDBDQUFtQjtLQUMvQjtJQUNGO1FBQ0csSUFBSSxFQUFFLGFBQWE7UUFDbkIsU0FBUyxFQUFFLDBDQUFtQjtLQUMvQjtDQUNGLENBQUMiLCJmaWxlIjoiYXBwLyttYW5pZmVzdC9tYW5pZmVzdC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYW5pZmVzdENvbXBvbmVudCB9IGZyb20gJy4vbWFuaWZlc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1hbmlmZXN0SW5mb0NvbXBvbmVudCB9IGZyb20gJy4vbWFuaWZlc3RpbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCZWVyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9iZWVyZWRpdG9yLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBNYW5pZmVzdFJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICB7XG4gICAgcGF0aDogJ2luZm8tbWFuaWZlc3QnLFxuICAgIGNvbXBvbmVudDogTWFuaWZlc3RJbmZvQ29tcG9uZW50XG4gIH0sXG5cdHtcbiAgICBwYXRoOiAnYmVlci1tYW5pZmVzdCcsXG4gICAgY29tcG9uZW50OiBNYW5pZmVzdENvbXBvbmVudFxuICB9LFxuXHR7XG4gICAgcGF0aDogJ2JlZXItZWRpdG9yLzppZCcsXG4gICAgY29tcG9uZW50OiBCZWVyRWRpdG9yQ29tcG9uZW50XG4gIH0sXG5cdHtcbiAgICBwYXRoOiAnYmVlci1lZGl0b3InLFxuICAgIGNvbXBvbmVudDogQmVlckVkaXRvckNvbXBvbmVudFxuICB9XG5dO1xuIl19
