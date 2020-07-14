import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TollPlazaComponent } from './toll-plaza.component';

describe('TollPlazaComponent', () => {
  let component: TollPlazaComponent;
  let fixture: ComponentFixture<TollPlazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollPlazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TollPlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
