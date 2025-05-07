import { Component } from '@angular/core';
import { Pension } from '../../models/pension';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-propietario',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './propietario.component.html',
  styleUrl: './propietario.component.css'
})
export class PropietarioComponent {
  pensiones: Pension[] = [
    new Pension(1, false, "calle 20", "apartamento"),
    new Pension(2, true, "calle 60", "casa"),
    new Pension(3, false, "calle 20", "apartaestudio"),
    new Pension(4, false, "calle 20", "apartamento"),
    new Pension(5, false, "calle 20", "apartamento"),
    new Pension(6, false, "calle 20", "apartamento"),
  ]; 
  public addPension(pension: Pension): void {
    this.pensiones.push(pension);
  }
  //this.addPension(new Pension(1, false, "calle 20", "apartamento" ));
 
}

