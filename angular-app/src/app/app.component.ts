import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Hola mundo Angular!';
    users:string[]= ['Pepe', 'María', 'Juan', 'Andres'];
  // users:string[]= [];
  visible:boolean = false;
  setVisible():void{
    this.visible = this.visible? false : true;
    console.log('Click');
  }
}
