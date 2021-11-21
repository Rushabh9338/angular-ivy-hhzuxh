import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
var max = new Date().getFullYear();
var min = 2020;
var years = [];

for (var i = max; i >= min; i--) {
  years.push(i);
  console.log(years);
}
