import { Component } from '@angular/core';
import {PROJECT_REFERENCE_BASE_DATA} from '../../data/project-reference-base-data';
import {ProjectReferenceBaseModel} from '../../models/project-reference-base-model';
import {ProjectReferenceModel} from '../../models/project-reference-model';
import {PROJECT_REFERENCE_DATA} from '../../data/project-reference-data';

@Component({
  selector: 'app-project-reference-works',
  imports: [],
  templateUrl: './project-reference-works.component.html',
  styleUrl: './project-reference-works.component.css'
})
export class ProjectReferenceWorksComponent {

  baseData: ProjectReferenceBaseModel = PROJECT_REFERENCE_BASE_DATA;
  tableData: ProjectReferenceModel[] = PROJECT_REFERENCE_DATA;

}
