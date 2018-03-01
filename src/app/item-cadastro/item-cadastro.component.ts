import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens: any[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl) {
    this.itemService.adicionar(frm.value).
      subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }

}
