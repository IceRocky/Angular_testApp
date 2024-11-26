import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAODashboardComponent } from './daodashboard.component';

describe('DAODashboardComponent', () => {
  let component: DAODashboardComponent;
  let fixture: ComponentFixture<DAODashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAODashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAODashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
