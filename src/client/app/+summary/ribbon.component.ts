import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'ribbon',
	templateUrl: 'ribbon.component.html',
	styles: [`
	.ribbon {
		width: 50px;
	}`],
	inputs: ['rank:rank']
})
export class RibbonComponent implements OnInit {
	el: HTMLElement;
	rank: number;
	fill: string= 'rgb(78, 167, 226)';
	constructor(el: ElementRef) {
		this.el = el.nativeElement;
	}
	ngOnInit() {
		switch(this.rank) {
			case 1:
				this.fill = 'rgb(228, 221, 58)';
				break;
			case 2:
				this.fill = 'rgb(192, 192, 192)';
				break;
			case 3:
				this.fill = 'rgb(175, 109, 44)';
				break;
		}
	}
}
