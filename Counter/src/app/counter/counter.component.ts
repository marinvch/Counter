import { Component, OnInit, ViewEncapsulation, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  data: string[] = [];

  constructor() { }

  ngOnInit(): void {

  }
  cowntdown(): void {
    const eventName = document.querySelectorAll('input')[1].value;
    const x = setInterval(() => {
      const startDate = new Date();
      const endInput = document.querySelectorAll('input')[0].value;

      if (endInput === '') {
        alert('Please enter name for the event');
      }
      const endDate = new Date(endInput);

      const diff = +endDate - +startDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const result = `${eventName} Time remaing: ${days} d ${hours} h ${minutes} m ${seconds} s`;

      document.querySelector('ul').innerHTML = `<li>${result}</li>`;
      if (diff < 0) {
        clearInterval(x);
        document.querySelector('ul').innerHTML = '<li>EXPIRED</li>';
      }
    }, 1000);
  }

  createElements() {
    console.log(this);
  }

}






