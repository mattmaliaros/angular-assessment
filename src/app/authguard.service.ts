import { CanActivate, Router } from "@angular/router";
import { Injectable, Inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {}
  canActivate(): boolean {
    if (this.storage.get("auth")) {
      return true;
    } else {
      this.router.navigate(["login"]);
    }
    return false;
  }
}
