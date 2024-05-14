import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { Link } from '@abstrapp/core';

interface Link {
  text: string;
  href: string;
}

@Component({
  selector: 'abc-banner-hero',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './banner-hero.html'
})
export class AbcBannerHero {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() link?: Link;
}
