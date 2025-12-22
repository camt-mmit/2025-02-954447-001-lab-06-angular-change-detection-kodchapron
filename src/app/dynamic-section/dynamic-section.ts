import { ChangeDetectionStrategy, Component } from '@angular/core';

interface NumberInput {
  value: number;
}

interface Section {
  inputs: NumberInput[];
}

@Component({
  selector: 'app-trial-three',
  imports: [],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {
  protected sections: Section[] = [{ inputs: [{ value: 0 }] }];

  protected addSection(): void {
    this.sections.push({ inputs: [{ value: 0 }] });
  }

  protected removeSection(sectionIndex: number): void {
    if (this.sections.length > 1) {
      this.sections.splice(sectionIndex, 1);
    }
  }

  protected addInput(sectionIndex: number): void {
    this.sections[sectionIndex].inputs.push({ value: 0 });
  }

  protected removeInput(sectionIndex: number, inputIndex: number): void {
    if (this.sections[sectionIndex].inputs.length > 1) {
      this.sections[sectionIndex].inputs.splice(inputIndex, 1);
    }
  }

  protected onInputChange(sectionIndex: number, inputIndex: number, value: number): void {
    this.sections[sectionIndex].inputs[inputIndex].value = Number.isNaN(value) ? 0 : value;
  }

  protected getResult(sectionIndex: number): number {
    return this.sections[sectionIndex].inputs.reduce((sum, input) => sum + input.value, 0);
  }

  protected canRemoveSection(): boolean {
    return this.sections.length > 1;
  }

  protected canRemoveInput(sectionIndex: number): boolean {
    return this.sections[sectionIndex].inputs.length > 1;
  }
}
