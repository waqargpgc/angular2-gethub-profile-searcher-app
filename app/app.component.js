"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var search_service_1 = require('./services/search.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<nav class=\"navbar navbar-default\">\n<div class=\"container\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n      \t<span class=\"icon-bar\"></span>\n      \t<span class=\"icon-bar\"></span>\n      \t<span class=\"icon-bar\"></span>\n      </button>\n          <a class=\"navbar-brand\" href=\"#\">Job Touch</a>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\"> \n            <li class=\"active\"><a href=\"#\">Home</a></li>\n      \t\t<li><a href=\"#\">About Us</a></li>\n      \t\t<li><a href=\"#\">Contact Us</a></li> \n        </ul>\n    </div>\n</div>\n</nav>\n<div class=\"container\">\n<profile></profile>\n</div>\n    \n    ",
            providers: [search_service_1.SearchService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map