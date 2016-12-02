import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable()
export class QuoteDataService {


    constructor(public af: AngularFire) {
    }

    getRandomQuote(): Observable<Quote>{
        return this.af.database.list('/quotes').map(quotes =>{
            console.log(quotes);
            return Quote.parse(quotes[0]);
        });
    }

    getRandomNInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


}
