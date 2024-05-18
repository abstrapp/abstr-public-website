import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type MediaObject } from '@abstrapp/core';

@Component({
  selector: 'abc-hero-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-content.html'
})
export class AbcHeroContent {
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: MediaObject;
}
