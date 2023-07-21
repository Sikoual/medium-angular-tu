import { AppComponent } from './app.component';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [AppRoutingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should sum two numbers', () => {
    const result: number = component.add(5, 5);

    expect(result).toBe(10);
  });

  it('should sum two numbers', () => {
    const firstNumber: number = 5
    const secondNumber: number = 5
    const resultAdd = firstNumber + secondNumber

    const result: number = component.add(firstNumber,secondNumber)

    expect(result).toBe(resultAdd);
  })
});
