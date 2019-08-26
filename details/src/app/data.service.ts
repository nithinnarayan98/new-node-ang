import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ss:HttpClient) { }
  public showdetails(){
    let url="http://localhost:8000/data";
return this.ss.get(url);
  }
}
