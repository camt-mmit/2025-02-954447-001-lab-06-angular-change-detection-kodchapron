import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trial-two',
  imports: [],
  templateUrl: './trial-two.html',
  styleUrl: './trial-two.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialTwo {
  protected items = [0, 0];

  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    console.info(this.items);
  }

  protected add(): void {
    this.items.push(0);
    console.info(this.items);
  }

  protected remove(index: number): void {
    this.items.splice(index, 1);
    console.info(this.items);
  }

  protected changeColor(elem: HTMLElement): void {
    elem.style.backgroundColor = 'silver';
  }
}
