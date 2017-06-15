import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AuthService {
  constructor(
    private datasource: RestDataSource
  ) { }

  public authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }
  public clear(): void {
    this.datasource.auth_token = null;
  }

}
