import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { QuoteDataService } from '../../shared/quote-data.service';
import { Quote } from '../../shared/quote';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html'
})
export class QuoteComponent implements OnInit {

    displayQuote: Quote;
    private quotes$: FirebaseListObservable<Quote[]>;
    private currentQuotes: Quote[];

    constructor(public af: AngularFire, public service: QuoteDataService) {
        this.quotes$ = af.database.list('/quotesTest');
    }

    ngOnInit(): void {
        this.quotes$.subscribe(data => this.currentQuotes = data);
    }

    getQuote() {
        this.displayQuote = this.currentQuotes[this.service.getRandomNInt(0, this.currentQuotes.length)];

    }

}
