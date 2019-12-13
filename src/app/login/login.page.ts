import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(private router: Router, public menu: MenuController, public auth:AuthService) { }

  ngOnInit() {
    this.ionNavDidChange();
    this.ionNavWillChange();
  }

  public login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      console.log(response.headers),
      this.router.navigate(['categorias']);
    }),
    error => {
      console.log(error);
    };
  }

  public ionNavDidChange() {
    this.menu.swipeEnable(true);
  }

  public ionNavWillChange() {
    this.menu.swipeEnable(false);
  }

}
