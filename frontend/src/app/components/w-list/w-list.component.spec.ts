import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WListComponent } from './w-list.component';

describe('WListComponent', () => {
  let component: WListComponent;
  let fixture: ComponentFixture<WListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
