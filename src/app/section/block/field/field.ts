import { Component, input } from '@angular/core';

@Component({
  selector: 'app-field',
  imports: [],
  template: `<div class="d-flex gap-5"><b>{{label()}}:</b> {{value()}} </div>`
})
export class Field {
  label = input<string>('Field');
  value = input<string|null|undefined>(undefined);

  get isEmpty():boolean{
    return !this.value(); //null, undefined or empty
  }
}
