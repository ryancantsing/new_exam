import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router/';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  pet: { name: any, type: any, description: any, skill1: any, skill2: any, skill3: any}
  errors: any;
  constructor(
    private _httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    console.log(params["id"]);
    this.id = params["id"]
    this.errors = {}
    this.getPet(this.id)
    this.pet = { name: this.pet.name, 
                 type: this.pet.type, 
                 description: this.pet.description,
                 skill1: this.pet.skill1,
                 skill2: this.pet.skill2,
                 skill3: this.pet.skill3
                    }
                })
                }
  
  editPet(){
    console.log("PATCH component checkpoint")
    console.log(this.pet)
    let obs = this._httpService.updatePet(this.pet);
    console.log(obs);
    obs.subscribe(data => {
      console.log("PATCH return", data);
      if (data["err"]){
        this.errors = data["err"]
      }else {
      this.result(this.id)
      }
      
    })
  }
  getPet(id){
    let obs = this._httpService.getPetInfo(id);
    obs.subscribe(data => {
      console.log(data["pet"])
      this.pet = data["pet"];
      })
}
  result(id){
    this.router.navigate(['/view/', id])
  }
}
