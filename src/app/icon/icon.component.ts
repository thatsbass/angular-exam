import { Component, Input, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name = input.required<string>();
  class = input<string>("w-5 h-5");
}