import { Inject, Injectable } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authorization: boolean = false;
  constructor() {}
}
