import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltertComponent } from './altert.component';

describe('AltertComponent', () => {
  let component: AltertComponent;
  let fixture: ComponentFixture<AltertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
