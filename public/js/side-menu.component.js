System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var SideMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SideMenuComponent = (function () {
                function SideMenuComponent() {
                    this.activate = function (ele) {
                        console.log('activate:', ele);
                        for (var i in this.li) {
                            if (i == ele)
                                this.li[i] = true;
                            else
                                this.li[i] = false;
                        }
                    };
                    this.li = [true, false, false];
                }
                __decorate([
                    core_1.ViewChild('sidemenu'), 
                    __metadata('design:type', Object)
                ], SideMenuComponent.prototype, "sidemenu", void 0);
                SideMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'side-menu',
                        templateUrl: 'app/side-menu',
                        styleUrls: ['css/side-menu.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideMenuComponent);
                return SideMenuComponent;
            }());
            exports_1("SideMenuComponent", SideMenuComponent);
        }
    }
});
//# sourceMappingURL=side-menu.component.js.map