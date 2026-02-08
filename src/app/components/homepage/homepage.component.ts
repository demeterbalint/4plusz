import {Component, OnInit} from '@angular/core';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {Project} from '../../interfaces/project';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  homePageImages: Project[] = [];
  count: string = '6/14';

  constructor(private projectLoader: ProjectLoaderService) {
  }

  ngOnInit(): void {
    this.homePageImages = this.projectLoader.getHomePageProjects();
  }

}
