import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuard } from "../authguard.service";
import { AuthService } from "../auth.service";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authGuard: AuthGuard,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    if (this.storage.get("auth")) {
      this.router.navigate(["loggedin"]);
    }
  }

  ngOnInit() {}
  public Authorize() {
    this.storage.set("auth", true);
    this.authGuard.canActivate();
    this.router.navigate(["/loggedin"]);
  }
}
