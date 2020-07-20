import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisibilityPage } from './visibility.page';

describe('VisibilityPage', () => {
  let component: VisibilityPage;
  let fixture: ComponentFixture<VisibilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
