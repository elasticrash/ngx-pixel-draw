import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    { name: 'A', value: .08167, color: '#000' },
    { name: 'B', value: .01492, color: '#000' },
    { name: 'C', value: .02782, color: '#000' },
    { name: 'D', value: .04253, color: '#000' },
    { name: 'E', value: .12702, color: '#000' },
    { name: 'F', value: .02288, color: '#000' },
    { name: 'G', value: .02015, color: '#000' },
    { name: 'H', value: .06094, color: '#000' },
    { name: 'I', value: .06966, color: '#000' },
    { name: 'J', value: .00153, color: '#000' },
    { name: 'K', value: .00772, color: '#000' },
    { name: 'L', value: .04025, color: '#000' },
    { name: 'M', value: .02406, color: '#000' },
    { name: 'N', value: .06749, color: '#000' },
    { name: 'O', value: .07507, color: '#000' },
    { name: 'P', value: .01929, color: '#000' },
    { name: 'Q', value: .00095, color: '#000' },
    { name: 'R', value: .05987, color: '#000' },
    { name: 'S', value: .06327, color: '#000' },
    { name: 'T', value: .09056, color: '#000' },
    { name: 'U', value: .02758, color: '#000' },
    { name: 'V', value: .00978, color: '#000' },
    { name: 'W', value: .02360, color: '#000' },
    { name: 'X', value: .00150, color: '#000' },
    { name: 'Y', value: .01974, color: '#000' },
    { name: 'Z', value: .00074, color: '#000' }
  ];

  constructor() {
  }
}
