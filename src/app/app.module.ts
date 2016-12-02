import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { QuoteComponent } from './quote/quote.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA56L0LyFJ1CjuzKHdqKugKzv6NJ6ZF7UA",
  authDomain: "quotequest-76325.firebaseapp.com",
  databaseURL: "https://quotequest-76325.firebaseio.com",
  storageBucket: "quotequest-76325.appspot.com",
  messagingSenderId: "509761267038"
};
import { FormPage } from '../pages/form/form';
import { QuoteDataService } from '../shared/quote-data.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    QuoteComponent,
    FormPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, QuoteDataService]
})
export class AppModule {}
