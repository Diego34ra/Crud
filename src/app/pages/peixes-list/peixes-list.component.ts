import { Component, OnInit } from '@angular/core';
import { peixe } from 'src/app/models/peixes';
import { PeixeService } from 'src/app/services/peixe.service';

@Component({
  selector: 'app-peixes-list',
  templateUrl: './peixes-list.component.html',
  styleUrls: ['./peixes-list.component.css']
})
export class PeixesListComponent implements OnInit {
  peixes: Array<peixe> = [];

  constructor(private peixeService: PeixeService) { }

  ngOnInit(): void {
    this.getPeixes();
  }

  getPeixes(): void {
    this.peixeService.getPeixes().subscribe(response => {
      this.peixes = response;
    }, (err) => {
      console.log('ERRO AO EXECUTAR', err.status);
    })
  }

  deletePeixe(id: number): void {
    this.peixeService.deletePeixe(id).subscribe(response => {
      console.log('Usuario Excluido');
    }, (err) => {
      console.log(err)
    }, () => {
      this.getPeixes();
    })
  }
}
