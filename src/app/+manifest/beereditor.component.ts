import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { BeersService } from './../shared/beers/beers.service';
import { Beer } from './../shared/beers/beer';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-beer-editor',
  templateUrl: 'beereditor.component.html',
  styleUrls: ['manifest.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES],
  providers: [BeersService]
})
export class BeerEditorComponent implements OnInit, AfterViewInit {
	@ViewChildren('brand') brandInput: any;
	beer: Beer;
	sub: any;
	deleting: boolean= false;
	confirmId: boolean= false;
	constructor(
		private beers: BeersService,
		private route: ActivatedRoute,
		private router: Router
	) { }
	ngOnInit() {
		this.beer = this.beers.newBeer();
		this.sub = this.route.params.subscribe(params => {
		if( params['id'] ) {
			let id = +params['id']; // (+) converts string 'id' to a number
      this.beers.getBeer(id).subscribe((beer: Beer) => this.beer = beer);
		}
   });
	}
	ngAfterViewInit() {
    this.brandInput.first.nativeElement.focus();
  }
	save() {
		this.beer.error = '';
		if( this.beer.name.trim() === '' ) {
			this.beer.error = 'Please name this beer!';
		} else {
			this.beers.saveBeer(this.beer).subscribe((res: any) => {
				if( !this.beer.id ) {
					this.beers.getBeer(res.insertId).subscribe((beer: Beer) => {
						this.beer = beer;
						this.confirmId= true;
					});
				} else {
					this.router.navigate(['/beer-manifest']);
				}
			});
		}

	}
	delete() {
		this.beers.deleteBeer(this.beer.id).subscribe(() => {
			this.router.navigate(['/beer-manifest']);
		});
	}
}
