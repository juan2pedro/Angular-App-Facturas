import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit{
  @Input() title!:string;
  counter: number = 0;
  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    }
  console.log('Creando componente')
  }

  setCounter():void {
    this.counter++;
    sessionStorage.setItem('counter', this.counter.toString());;
  }
}
