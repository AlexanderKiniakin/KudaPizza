import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizComponent } from './authoriz.component';

describe('AuthorizComponent', () => {
  let component: AuthorizComponent;
  let fixture: ComponentFixture<AuthorizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
