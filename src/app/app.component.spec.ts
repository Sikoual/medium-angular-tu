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

  it('should sum all numbers in a array', () => {
    const array: string[] = ['1', '2'];
    const expected: number[] = [1, 2];

    const result: number[] = component.transformStringArrayToNumber(array);

    expect(result).toEqual(expected);
  });
});
