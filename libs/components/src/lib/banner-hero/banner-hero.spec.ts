import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerHero } from './banner-hero';

describe('BannerHeroComponent', () => {
  let component: BannerHero;
  let fixture: ComponentFixture<BannerHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHero],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
