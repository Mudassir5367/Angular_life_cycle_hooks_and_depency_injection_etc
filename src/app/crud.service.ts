import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  getData(){
    // console.log('getData: ', this.getData);
    return this.http.get('../assets/data.json')
  }
}
