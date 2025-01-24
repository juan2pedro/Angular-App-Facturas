import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Hola mundo Angular!';
  subTitle:string = 'Contador con estado de sesion';

  users:string[]= ['Pepe', 'María', 'Juan', 'Andres'];
  // users:string[]= [];
  visible:boolean = false;
  setVisible():void{
    this.visible = this.visible? false : true;
    console.log('Click');
  }
}
