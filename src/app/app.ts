import { Component, viewChildren } from '@angular/core';
import { Section } from "./section/section";
import { Block } from "./section/block/block";
import { Field } from "./section/block/field/field";

@Component({
  selector: 'app-root',
  imports: [Section, Block, Field],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  sections = viewChildren(Section);

  ngOnInit() {
    this.sections().filter(b => !b.isEmpty).forEach((section, i) => {
      section.odd = i % 2 == 1;
    });
  }
}
