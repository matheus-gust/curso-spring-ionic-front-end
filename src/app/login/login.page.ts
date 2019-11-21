import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public menu: MenuController) { }

  ngOnInit() {
    this.ionNavDidChange();
    this.ionNavWillChange();
  }

  public login() {
    this.router.navigate(['categorias']);
  }

  public ionNavDidChange() {
    this.menu.swipeEnable(true);
  }

  public ionNavWillChange() {
    this.menu.swipeEnable(false);
  }

}
