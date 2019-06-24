import { Component, OnInit } from "@angular/core";
import { ThemeOptions } from "../../../../theme-options";
import { ChangePassComponent } from "src/app/modules/main/change-password/change-password.component";
import { DialogService, AuthenticationService } from "narik-infrastructure";

@Component({
  selector: "app-user-box",
  templateUrl: "./user-box.component.html"
})
export class UserBoxComponent implements OnInit {
  constructor(
    public globals: ThemeOptions,
    private dialogService: DialogService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  changePassword() {
    this.dialogService.showDialog(
      ChangePassComponent,
      undefined,
      undefined,
      [],
      {
        showBackdrop: true,
        disableAutoClose: true
      }
    );
  }
  logout() {
    this.authenticationService.logout();
  }
}
