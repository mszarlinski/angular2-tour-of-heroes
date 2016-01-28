import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/hero.list.html',
    styleUrls: ['app/heroic.css']

})
export class AppComponent {
    title:string;
    heroes:Hero[];
    selectedHero:Hero;

    constructor() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }

    onSelect(hero:Hero):void {
        console.log('selected hero = ', hero);
        this.selectedHero = hero;
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