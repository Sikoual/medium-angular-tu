import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-medium-tu';

  public add(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
}
