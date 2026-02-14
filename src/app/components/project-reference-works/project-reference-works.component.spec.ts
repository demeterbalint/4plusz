import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReferenceWorksComponent } from './project-reference-works.component';

describe('ProjectReferenceWorksComponent', () => {
  let component: ProjectReferenceWorksComponent;
  let fixture: ComponentFixture<ProjectReferenceWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectReferenceWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectReferenceWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
