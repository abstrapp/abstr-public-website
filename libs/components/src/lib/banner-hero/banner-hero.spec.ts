import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbcBannerHero } from './banner-hero';

describe('BannerHeroComponent', () => {
  let component: AbcBannerHero;
  let fixture: ComponentFixture<AbcBannerHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcBannerHero],
    }).compileComponents();

    fixture = TestBed.createComponent(AbcBannerHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
