import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
message;
  constructor(private ds:DataService) { }
public show(){
  this.ds.showdetails().subscribe(data=>{
    this.message=data;
    console.log(this.message); 
  })
}
  ngOnInit() {
  }

}
