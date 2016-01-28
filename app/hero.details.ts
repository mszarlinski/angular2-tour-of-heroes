import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'hero-details',
    templateUrl: 'app/hero.details.html'
    //inputs: ['hero'] <-- same as @Input
})
export class HeroDetails {
    @Input()
    hero:Hero;
}