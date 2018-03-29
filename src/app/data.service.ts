import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import {TestObj} from "./models/testObj";

@Injectable()
export class DataService {

  result:any;

  constructor(private _httpClient: HttpClient) { }

  getUsers(){
    return this._httpClient.get<TestObj>("/api/users");

  }

}
