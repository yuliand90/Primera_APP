import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
 //implementamos algunas funciones de ciclo de vida OnInit y OnDestroy//
export class InputComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router) { }
  
  ngOnDestroy(): void {
    console.log ("Me he destruido");// se va ejecutar cuando el componente se destruya
  }
  ngOnInit(): void {
    console.log("Me he iniciado")
  }
  nombre: string = '';

  salir() {
    console.log("saliendo...")
    this.router.navigate(['/botones'])
  }

}
