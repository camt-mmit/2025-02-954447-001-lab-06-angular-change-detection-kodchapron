import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

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
  protected sections = signal<Section[]>([{ inputs: [{ value: 0 }] }]);

  protected canRemoveSection = computed(() => this.sections().length > 1);

  protected canRemoveInputArray = computed(() =>
    this.sections().map((section) => section.inputs.length > 1),
  );

  protected resultArray = computed(() =>
    this.sections().map((section) => section.inputs.reduce((sum, input) => sum + input.value, 0)),
  );

  protected addSection(): void {
    this.sections.update((sections) => [...sections, { inputs: [{ value: 0 }] }]);
  }

  protected removeSection(sectionIndex: number): void {
    if (this.sections().length > 1) {
      this.sections.update((sections) => sections.filter((_, index) => index !== sectionIndex));
    }
  }

  protected addInput(sectionIndex: number): void {
    this.sections.update((sections) => {
      const updated = [...sections];
      updated[sectionIndex] = {
        ...updated[sectionIndex],
        inputs: [...updated[sectionIndex].inputs, { value: 0 }],
      };
      return updated;
    });
  }

  protected removeInput(sectionIndex: number, inputIndex: number): void {
    this.sections.update((sections) => {
      const updated = [...sections];
      if (updated[sectionIndex].inputs.length > 1) {
        updated[sectionIndex] = {
          ...updated[sectionIndex],
          inputs: updated[sectionIndex].inputs.filter((_, index) => index !== inputIndex),
        };
      }
      return updated;
    });
  }

  protected onInputChange(sectionIndex: number, inputIndex: number, value: number): void {
    this.sections.update((sections) => {
      const updated = [...sections];
      updated[sectionIndex] = {
        ...updated[sectionIndex],
        inputs: updated[sectionIndex].inputs.map((input, index) =>
          index === inputIndex ? { value: Number.isNaN(value) ? 0 : value } : input,
        ),
      };
      return updated;
    });
  }
}
