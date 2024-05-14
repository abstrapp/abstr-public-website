import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'abc-hero-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-content.html'
})
export class AbcHeroContent {
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: {src: string, alt: string};
}
