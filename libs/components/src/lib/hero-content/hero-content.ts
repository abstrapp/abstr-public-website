import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'abc-hero-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-content.html',
  styleUrl: './hero-content.css',
})
export class HeroContent {
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: {src: string, alt: string};
}
