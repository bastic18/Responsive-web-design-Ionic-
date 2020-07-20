import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateventPage } from './createvent.page';

describe('CreateventPage', () => {
  let component: CreateventPage;
  let fixture: ComponentFixture<CreateventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
