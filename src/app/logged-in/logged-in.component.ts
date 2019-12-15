import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuard } from "../authguard.service";
import { AuthService } from "../auth.service";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";
@Component({
  selector: "app-logged-in",
  templateUrl: "./logged-in.component.html",
  styleUrls: ["./logged-in.component.css"]
})
export class LoggedInComponent implements OnInit {
  userName: string = this.storage.get("user");
  constructor(
    private authGuard: AuthGuard,
    private router: Router,
    private authService: AuthService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {}

  public DeAuthorize() {
    this.storage.set("auth", false);
    this.authGuard.canActivate();
    this.router.navigate(["/login"]);
  }
}
