import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Routes, RouterModule, ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: any;
  pet: any;
  likes: any;
  constructor(
    private _httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.id = params["id"]
      this.getPet(this.id)
    })
  }
  getPet(id){
    let obs = this._httpService.getPetInfo(id);
    obs.subscribe(data => {
      console.log(data["pet"])
      this.pet = data["pet"];
      })
}
 adoptPet(id){
   let obs = this._httpService.adoptAPet(id)
   obs.subscribe(data => {
     console.log(data);
     this.goHome();
   })
 }
 likePet(pet){
   pet.likes += 1;
  console.log("LIKE checkpoint component")
   let obs = this._httpService.likeAPet(pet)
   obs.subscribe(data => {
     console.log(data)
     this.likes = data["likes"]
   })
 }
 goHome(){
  this.router.navigate(['/dashboard']);
}

}
