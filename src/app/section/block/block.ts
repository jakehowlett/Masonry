import { Component, contentChildren, HostBinding, input } from '@angular/core';
import { Field } from './field/field';

@Component({
  selector: 'app-block',
  imports: [],
  templateUrl: './block.html'
})
export class Block {
  fields = contentChildren(Field, { descendants: true });

  @HostBinding('class.col-6') get show() { return !this.isEmpty; }
  @HostBinding('class.d-none') get hide() { return this.isEmpty; }

  type = input<'text'|'images'>('text');

  get isEmpty(){
    return this.type()=='text' && this.fields().every(f=>f.isEmpty);
  }
}
