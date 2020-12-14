import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
private api_server="http://testtrivz.mynewcar.in/api_mnc/variants_list?city_id=1&type=web&brand_id=16&model_id=465"
  constructor( private httpClient:HttpClient) { }

public getCardetails():Observable<any>{
  return this.httpClient.get(this.api_server);
}  
}
