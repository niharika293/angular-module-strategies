import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campain-products',
  templateUrl: './campain-products.component.html',
  styleUrls: ['./campain-products.component.scss']
})
export class CampainProductsComponent implements OnInit {

  campaignsList : any = [];
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
   console.log("this.route", this.route);
   if(this.route.snapshot.data['products']){
      this.campaignsList = this.route.snapshot.data['products'];
   }
   console.log("campaignsList", this.campaignsList);
  }

}
