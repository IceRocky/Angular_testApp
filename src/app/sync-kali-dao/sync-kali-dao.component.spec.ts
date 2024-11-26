import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncKaliDaoComponent } from './sync-kali-dao.component';

describe('SyncKaliDaoComponent', () => {
  let component: SyncKaliDaoComponent;
  let fixture: ComponentFixture<SyncKaliDaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncKaliDaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncKaliDaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
