import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
    @Input() data;

    private _options: { width, height } = { width: 800, height: 600 };

    constructor() { }

    ngOnInit() {
    }

    get options() {
        return this._options = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
}
