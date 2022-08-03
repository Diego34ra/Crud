import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { peixe } from 'src/app/models/peixes';
import { PeixeService } from 'src/app/services/peixe.service';

@Component({
  selector: 'app-peixes-form',
  templateUrl: './peixes-form.component.html',
  styleUrls: ['./peixes-form.component.css']
})
export class PeixesFormComponent implements OnInit {
  userForm: FormGroup ;
  peixes: Array<peixe> = [];
  peixeId: any = '';

  constructor(private fb: FormBuilder,
    private peixeService: PeixeService,
    private actRoute: ActivatedRoute,
    private router: Router) {
    this.userForm = this.fb.group({
      id: 0,
      name: '',
      raca: '',
      quantidade: 0,
      preco: 0,
    })
  }


  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.peixeId = params.get('id');
      console.log(this.peixeId);
      if(this.peixeId !== null) {
        this.peixeService.getPeixe(this.peixeId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            name: result[0].name,
            raca: result[0].raca,
            quantidade: result[0].quantidade,
            preco: result[0].preco,
          })
        })
      }
    })

    this.getPeixes();
  
  }


  getPeixes() {
    this.peixeService.getPeixes().subscribe(response => {
      this.peixes = response;
    })
  }

  createPeixe() {
    this.userForm.get('id')?.patchValue(this.peixes.length + 4);
    this.peixeService.postPeixe(this.userForm.value).subscribe(result => {
      console.log(`Peixe ${result.name} foi cadastrado com sucesso !`)
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }

  updatePeixe() {
    this.peixeService.updatePeixe(this.peixeId, this.userForm.value).subscribe(result => {
      console.log('usuario atualizado', result);
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }

  actionButton() {
    if(this.peixeId !== null) {
      this.updatePeixe()
    }else {
      this.createPeixe()
    }
  }
}

