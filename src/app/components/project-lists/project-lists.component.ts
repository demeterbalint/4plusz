import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {ProjectListModel} from '../../models/project-list-model';

@Component({
  selector: 'app-project-lists',
  imports: [],
  templateUrl: './project-lists.component.html',
  styleUrl: './project-lists.component.css'
})
export class ProjectListsComponent implements OnInit {

  category!: string;
  projects!: ProjectListModel;

  constructor(private route: ActivatedRoute,
              private projectLoader: ProjectLoaderService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.category = data['category'];
      this.loadProjects(this.category);
    })
  }

  loadProjects(category: string) {
    switch (category) {
      case 'public-buildings':
        this.projects = this.projectLoader.getPublicBuildings();
        break;
      case 'religious-buildings':
        this.projects = this.projectLoader.getReligiousBuildings();
        break;
      case 'residental-buildings':
        this.projects = this.projectLoader.getResidentalBuildings();
        break;
      case 'historical-buildings':
        this.projects = this.projectLoader.getHistoricalBuildings();
        break;
      case 'conceptual-designs':
        this.projects = this.projectLoader.getConceptualDesigns();
        break;
    }
  }

}
