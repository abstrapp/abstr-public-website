import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbcFooter } from './footer';

describe('FooterComponent', () => {
  let component: AbcFooter;
  let fixture: ComponentFixture<AbcFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(AbcFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
