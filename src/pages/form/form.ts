import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'page-form',
    templateUrl: 'form.html'
})
export class FormPage {

    model = {};

    constructor(public af: AngularFire) {
    }

    onSubmit() {
        this.af.database.list('/quotesTest').push(this.model);
    }


}
