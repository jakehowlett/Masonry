import { Component, computed, contentChildren, HostBinding } from '@angular/core';
import { Block } from './block/block';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styles:`:host{display:block}`
})
export class Section {
  odd: boolean = false;
  @HostBinding('class.bg-light') get second() {return this.odd;}
  blocks = contentChildren(Block, { descendants: true });

  centered = computed<boolean>(()=>{
    //Centered if only 1 block and that block is an image block
    let nonEmptyBlocks = this.blocks().filter(b=>!b.isEmpty);
    return nonEmptyBlocks.length == 1 && nonEmptyBlocks.at(0)?.type()=='images'
  });

  get isEmpty():boolean{
    return this.blocks().length == 0 || this.blocks().every(b=>b.isEmpty);
  }
}
