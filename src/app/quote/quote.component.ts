import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { QuoteDataService } from '../shared/quote-data.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.items = af.database.list('/quotes');
    // qs.getRandomQuote().subscribe();
    // af.database.list('/quotes').subscribe(datas => console.log(datas))
  }

  ngOnInit() {

  }

  push(){
    let thenableReference = this.af.database.list('/quotes').push(
        {
          "author" : "testPush",
          "date" : "2016-10-30",
          "quote" : "quote de push"
        }
    );
    console.log(thenableReference)
  }

}
