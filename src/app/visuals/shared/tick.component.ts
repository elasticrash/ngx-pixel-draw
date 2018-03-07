import { Component, Input } from '@angular/core';

@Component({
    selector: '[tick]',
    templateUrl: './tick.component.html'
})
export class TickComponent {
    @Input() tick: any;
}
