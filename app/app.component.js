System.register(['angular2/core', './hero.details', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_details_1, hero_service_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_details_1_1) {
                hero_details_1 = hero_details_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.onSelect = function (hero) {
                    console.log('selected hero = ', hero);
                    this.selectedHero = hero;
                };
                AppComponent.prototype.fetchHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit');
                    this.fetchHeroes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/hero.list.html',
                        styleUrls: ['app/heroic.css'],
                        directives: [hero_details_1.HeroDetails],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map