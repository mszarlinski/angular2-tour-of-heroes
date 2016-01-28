import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetails} from './hero.details';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/hero.list.html',
    styleUrls: ['app/heroic.css'],
    directives: [HeroDetails],
    providers: [HeroService]
})
export class AppComponent {
    title:string;
    heroes:Hero[];
    selectedHero:Hero;

    constructor(private _heroService:HeroService) {
        this.title = 'Tour of Heroes';
        this.heroes = _heroService.getHeroes(); // bad practice - complex init in constructor
    }

    onSelect(hero:Hero):void {
        console.log('selected hero = ', hero);
        this.selectedHero = hero;
    }
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