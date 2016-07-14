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
		var self = this;
		this.beer = this.beers.newBeer();
		this.sub = this.route.params.subscribe(params => {
		if( params['id'] ) {
			let id = +params['id']; // (+) converts string 'id' to a number
      self.beers.getBeer(id, (beer: Beer) => self.beer = beer);
		}
   });
	}
	ngAfterViewInit() {
    this.brandInput.first.nativeElement.focus();
  }
	save() {
		var self = this;
		this.beer.error = '';
		if( this.beer.name.trim() === '' ) {
			this.beer.error = 'Please name this beer!';
		} else {
			this.beers.saveBeer(this.beer, function(res: any) {
				if( !self.beer.id ) {
					self.beers.getBeer(res.insertId, function(beer: Beer) {
						console.log(beer);
						self.beer = beer;
						console.log(self.beer);
						self.confirmId= true;
					});
				} else {
					self.router.navigate(['/beer-manifest']);
				}
			});
		}

	}
	delete() {
		var self = this;
		this.beers.deleteBeer(self.beer.id, function() {
			self.router.navigate(['/beer-manifest']);
		});
	}
}
