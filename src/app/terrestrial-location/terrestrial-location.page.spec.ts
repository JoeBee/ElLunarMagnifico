import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TerrestrialLocationPage } from './terrestrial-location.page';

describe('TerrestrialLocationPage', () => {
  let component: TerrestrialLocationPage;
  let fixture: ComponentFixture<TerrestrialLocationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), TerrestrialLocationPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TerrestrialLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
