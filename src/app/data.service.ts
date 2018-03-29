import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// rxjs
import { Observable } from "rxjs/Observable";
import {TestObj} from "./models/testObj";

@Injectable()
export class DataService {

  result:any;

  constructor(private _httpClient: HttpClient) { }

  getUsers(){
    return this._httpClient.get<TestObj>("/api/users");

  }

}
