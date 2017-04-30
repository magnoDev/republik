import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Observable";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  api : string = "http://localhost:8080/api/api/";

  constructor(public http: Http) { }

      getData(){

        this.http.get(this.api + "apiRecupera.php").map(res => res.json())

      }
}
