import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-medium-tu';

  public transformStringArrayToNumber(array: string[]): number[] {
    let arrayOfNumber: number[] = [];

    array.forEach((number: string) => {
      arrayOfNumber.push(+number);
    });

    return arrayOfNumber;
  }
}
