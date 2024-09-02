import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfolistComponent } from './infolist.component';

describe('InfolistComponent', () => {
  let component: InfolistComponent;
  let fixture: ComponentFixture<InfolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
