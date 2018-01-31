import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router/';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  pet: { name: any, type: any, description: any, skill1: any, skill2: any, skill3: any}
  errors: any;
  constructor(
    private _httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.pet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""}
    this.errors = {};
  }
  addPet(){
    console.log("CREATE component checkpoint", this.pet)
    let obs = this._httpService.createPet(this.pet);
    obs.subscribe(data => {
      console.log("CREATE return", data["err"])
      if (data["err"]){
        this.errors = data["err"];
      }else {
      this.goHome();
      } 
    })
  }
    goHome(){
      this.router.navigate(['/dashboard']);
  }
}
