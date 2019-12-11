import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriaService } from 'src/services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  constructor(
    private categoriaService: CategoriaService,
    private menu: MenuController
    ) { }

    ngOnInit() {
      this.findAll();
    }

    openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

   public findAll() {
    this.categoriaService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
   }

}
