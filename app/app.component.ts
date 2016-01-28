import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/hero.list.html',
    styleUrls: ['app/heroes.css']

})
export class AppComponent {
    title:string;
    heroes:Hero[];

    constructor() {
        this.title = 'Tour of Heroes';
        //this.hero = {id: 1, name: 'Windstorm'};
        this.heroes = HEROES;
    }
}

interface Hero {
    constructor(public id:int,
                public name:string);
}

var HEROES:Hero[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];