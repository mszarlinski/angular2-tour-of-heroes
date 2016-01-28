System.register([], function(exports_1) {
    var TWO_SECONDS, HeroService, HEROES;
    return {
        setters:[],
        execute: function() {
            TWO_SECONDS = 2000;
            //@Injectable() // not necessary in this case
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    //return Promise.resolve(HEROES);
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(HEROES); }, TWO_SECONDS);
                    });
                };
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
            exports_1("HEROES", HEROES = [
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
            ]);
        }
    }
});
//# sourceMappingURL=hero.service.js.map