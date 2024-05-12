import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-banner-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-hero.html',
  styleUrl: './banner-hero.scss',
})
export class BannerHero {}
