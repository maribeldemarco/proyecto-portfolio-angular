import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoprincipalComponent } from './fotoprincipal.component';

describe('FotoprincipalComponent', () => {
  let component: FotoprincipalComponent;
  let fixture: ComponentFixture<FotoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
