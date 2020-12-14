import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarVariants } from '../car-variant';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  carvariantDetails=[];
  constructor( private dataService:CarserviceService) { }

  ngOnInit(): void { 
    this.viewCarDetails();
  }


  viewCarDetails():void{this.dataService.getCardetails().subscribe((item:ICarVariants[])=>{
    console.log("item",item);
    this.carvariantDetails=item.data;
    return JSON.stringify( this.carvariantDetails);
  })

  }
}
