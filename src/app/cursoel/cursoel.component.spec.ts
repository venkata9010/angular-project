import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoelComponent } from './cursoel.component';

describe('CursoelComponent', () => {
  let component: CursoelComponent;
  let fixture: ComponentFixture<CursoelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoelComponent]
    });
    fixture = TestBed.createComponent(CursoelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
