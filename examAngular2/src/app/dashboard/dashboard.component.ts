import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: { name: "", type: ""}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPetsFromService();
  }
  getPetsFromService(){
    console.log("SHOW component checkpoint");
    let obs = this._httpService.getPets();
    obs.subscribe(data =>{
      console.log("SHOW component return", data["pet"]);
      this.pets = data["pet"];
      console.log(this.pets);
    })
  }

}
