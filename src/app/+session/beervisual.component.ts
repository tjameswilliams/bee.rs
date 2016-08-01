import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'beervisual',
	templateUrl: 'beervisual.component.html',
	// styles: [`
	// .ribbon {
	// 	width: 50px;
	// }`],
	inputs: ['color:color']
})
export class BeerVisual implements OnInit {
	el: HTMLElement;
	color: string;
	constructor(el: ElementRef) {
		this.el = el.nativeElement;
	}
	ngOnInit() {
		console.log(this.color);
	}
}
