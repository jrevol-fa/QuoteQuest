import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { QuoteDataService } from '../shared/quote-data.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/quotes');
    // qs.getRandomQuote().subscribe();
    // af.database.list('/quotes').subscribe(datas => console.log(datas))
  }

  ngOnInit() {

  }

}
