import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyGoupsComponent } from './study-goups.component';

describe('StudyGoupsComponent', () => {
  let component: StudyGoupsComponent;
  let fixture: ComponentFixture<StudyGoupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyGoupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyGoupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
