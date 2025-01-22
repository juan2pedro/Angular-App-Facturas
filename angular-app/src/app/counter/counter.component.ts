import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit{
  counter: number = 0;
  ngOnInit(): void {
  this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  console.log('Creando componente')
  }

  setCounter():void {
    this.counter++;
    sessionStorage.setItem('counter', this.counter.toString());;
  }
}
