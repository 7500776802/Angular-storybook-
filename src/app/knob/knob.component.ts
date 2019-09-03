import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-knob',
  template: `
  <div>I am {{ name }} and I'm {{ age }} years old.</div>
  <div>Phone Number: {{ phoneNumber }}</div>
`,
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit {
  @Input()
  name;

  @Input()
  age;


  @Input()
  phoneNumber;
  constructor() { }

  ngOnInit() {
  }

}
