import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbcHeroContent } from './hero-content';

describe('HeroContentComponent', () => {
  let component: AbcHeroContent;
  let fixture: ComponentFixture<AbcHeroContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcHeroContent],
    }).compileComponents();

    fixture = TestBed.createComponent(AbcHeroContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
