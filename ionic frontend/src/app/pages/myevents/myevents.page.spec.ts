import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyeventsPage } from './myevents.page';

describe('MyeventsPage', () => {
  let component: MyeventsPage;
  let fixture: ComponentFixture<MyeventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyeventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyeventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
