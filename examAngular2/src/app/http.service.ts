import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
  }
  createPet(pet){
    console.log("CREATE checkpoint service", pet);
    return this._http.post('/create', pet);
  }
  getPets(){
    console.log("SHOW checkpoint service");
    return this._http.get('/show');

  }
  getPetInfo(id){
    console.log("VIEW checkpoint service");
    return this._http.get(`/view/${id}`, id)
  }
  adoptAPet(id){
    console.log("ADOPT checkpoint service");
    return this._http.delete(`/delete/${id}`, id)
  }
  likeAPet(pet){
    console.log("LIKE checkpoint service");
    return this._http.patch(`/likeAPet/${pet._id}`, pet)
  }
  updatePet(pet){
    console.log("UPDATE checkpoint service");
    return this._http.patch(`/patch/${pet._id}`, pet)
  }
}