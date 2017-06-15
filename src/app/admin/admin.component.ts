import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../model/auth.service";

@Component({
  moduleId: module.id,
  templateUrl: "admin.component.html"
})

export class AdminComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public logout(): void {
    this.authService.clear();
    this.router.navigateByUrl("/");
  }
 }
