import {Injectable} from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectListModel} from '../models/project-list-model';
import {ProjectModel} from '../models/project-model';
import {HomepageProjectModel} from '../models/homepage-project-model';
import {imageMap} from '../image-map';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {

  projects: ProjectModel[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  //consts for homepage
  raday: ProjectModel = this.projects.find(project => project.slug === 'raday-house')!
  csomor: ProjectModel = this.projects.find(project => project.slug === 'csomori-church')!
  fasor: ProjectModel= this.projects.find(project => project.slug === 'fasori-church')!
  kapy: ProjectModel= this.projects.find(project => project.slug === 'kapy')!
  budaors: ProjectModel = this.projects.find(project => project.slug === 'budaorsi-church')!
  ujpest: ProjectModel = this.projects.find(project => project.slug === 'ujpesti-parish-church')!
  rezhaz: ProjectModel = this.projects.find(project => project.slug === 'keresztur-restaurant-office')!

  //data const for homepage
  HOMEPAGE_PROJECT_DATA: HomepageProjectModel[] = [
    {
      project: this.raday,
      image: imageMap[this.raday.slug].find(image => image.includes('02'))!!
    },
    {
      project: this.raday,
      image: imageMap[this.raday.slug].find(image => image.includes('05'))!
    },
    {
      project: this.csomor,
      image: imageMap[this.csomor.slug].find(image => image.includes('16'))!
    },
    {
      project: this.fasor,
      image: imageMap[this.fasor.slug].find(image => image.includes('12'))!
    },
    {
      project: this.kapy,
      image: imageMap[this.kapy.slug].find(image => image.includes('main'))!
    },
    {
      project: this.budaors,
      image: imageMap[this.budaors.slug].find(image => image.includes('01'))!
    },
    {
      project: this.ujpest,
      image: imageMap[this.ujpest.slug].find(image => image.includes('11'))!
    },
    {
      project: this.fasor,
      image: imageMap[this.fasor.slug].find(image => image.includes('press'))!
    },
    {
      project: this.ujpest,
      image: imageMap[this.ujpest.slug].find(image => image.includes('04'))!
    },
    {
      project: this.budaors,
      image: imageMap[this.budaors.slug].find(image => image.includes('home'))!
    },
    {
      project: this.rezhaz,
      image: imageMap[this.rezhaz.slug].find(image => image.includes('04'))!
    },
    {
      project: this.budaors,
      image: imageMap[this.budaors.slug].find(image => image.includes('23'))!
    },
    {
      project: this.fasor,
      image: imageMap[this.fasor.slug].find(image => image.includes('13'))!
    },
    {
      project: this.csomor,
      image: imageMap[this.csomor.slug].find(image => image.includes('11'))!
    },
    {
      project: this.raday,
      image: imageMap[this.raday.slug].find(image => image.includes('press'))!
    }
  ]

  //slugs for project-types
  publicBuildingSlugs: string[] = ['raday-house', 'ujpesti-parish-church', 'fasori-church', 'keresztur-restaurant-office', 'vac-high-school', 'budaorsi-church', 'csomorichurch',
    'tihany-granary', 'godollo-lyceum', 'ujlak-swimming-facility', 'bicske-swimming-facility', 'pesthidegkuti-church', 'csipkebokor-kindergarten', 'geo-log-office', 'hetszinvirag-kindergarten']

  religiousBuildingSlugs: string[] = ['fasori-church', 'budaorsi-church', 'csomori-church', 'raday-house', 'ujpesti-parish-church', 'pesthidegkuti-church',
    'kulso-kelenfoldi-church', 'albertfalvi-church', 'pecsely-chapel']

  residentalBuildingSlugs: string[] = ['kapy', 'hubay-garden', 'family-house-3', 'family-house-1', 'family-house-4', 'family-house-2', 'family-house-5']

  historicalBuildingSlugs: string[] = ['fasori-church', 'tihany-granary', 'ujpesti-parish-church', 'csipkebokor-kindergarten']

  conceptualDesignSlugs: string[] = ['godollo-lyceum', 'vac-high-school', 'pesthidegkuti-church', 'pecsely-chapel', 'kulso-kelenfoldi-church', 'ujlak-swimming-facility',
  'geo-log-office', 'family-house-3', 'family-house-1', 'albertvalfi-church', 'weores-sandor-theatre']

  //methods for project-types
  getPublicBuildings(): ProjectListModel {
    return {
      title: {
        hu: 'Középületek',
        en: 'Public\nBuildings'
      },
      projects: this.projects.filter(project => this.publicBuildingSlugs.includes(project.slug))
    }
  }

  getReligiousBuildings() {
    return {
      title: {
        hu: 'Szakrális\népületek',
        en: 'Religious\nBuildings'
      },
      projects: this.projects.filter(project => this.religiousBuildingSlugs.includes(project.slug))
    }
  }

  getResidentalBuildings() {
    return {
      title: {
        hu: 'Lakóépületek',
        en: 'Residental\nBuildings'
      },
      projects: this.projects.filter(project => this.residentalBuildingSlugs.includes(project.slug))
    }
  }

  getHistoricalBuildings() {
    return {
      title: {
        hu: 'Műemlékek',
        en: 'Historical\nBuildings'
      },
      projects: this.projects.filter(project => this.historicalBuildingSlugs.includes(project.slug))
    }
  }

  getConceptualDesigns() {
    return {
      title: {
        hu: 'Tervek',
        en: 'Conceptual\nDesigns'
      },
      projects: this.projects.filter(project => this.conceptualDesignSlugs.includes(project.slug))
    }
  }


}
