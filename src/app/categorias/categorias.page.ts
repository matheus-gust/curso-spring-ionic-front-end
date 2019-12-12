import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  items: CategoriaDTO[];
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

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
      this.items = response;
    },
    error => {
      console.log(error);
    });
   }

}
