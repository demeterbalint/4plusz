import {HomepageProjectModel} from '../models/homepage-project-model';
import {ProjectService} from '../services/project.service';
import {ProjectModel} from '../models/project-model';
import {imageMap} from '../image-map';

const projects: ProjectModel[] = new ProjectService().getProjects();
const raday: ProjectModel = projects.find(project => project.slug === 'raday-house')!
const csomor: ProjectModel = projects.find(project => project.slug === 'csomori-church')!
const fasor: ProjectModel= projects.find(project => project.slug === 'fasori-church')!
const kapy: ProjectModel= projects.find(project => project.slug === 'kapy')!
const budaors: ProjectModel = projects.find(project => project.slug === 'budaorsi-church')!
const ujpest: ProjectModel = projects.find(project => project.slug === 'ujpesti-parish-church')!
const rezhaz: ProjectModel = projects.find(project => project.slug === 'keresztur-restaurant-office')!

export const HOMEPAGE_PROJECT_DATA: HomepageProjectModel[] = [
  {
    project: raday,
    image: imageMap[raday.slug].find(image => image.includes('02'))!!
  },
  {
    project: raday,
    image: imageMap[raday.slug].find(image => image.includes('05'))!
  },
  {
    project: csomor,
    image: imageMap[csomor.slug].find(image => image.includes('16'))!
  },
  {
    project: fasor,
    image: imageMap[fasor.slug].find(image => image.includes('12'))!
  },
  {
    project: kapy,
    image: imageMap[kapy.slug].find(image => image.includes('main'))!
  },
  {
    project: budaors,
    image: imageMap[budaors.slug].find(image => image.includes('01'))!
  },
  {
    project: ujpest,
    image: imageMap[ujpest.slug].find(image => image.includes('11'))!
  },
  {
    project: fasor,
    image: imageMap[fasor.slug].find(image => image.includes('press'))!
  },
  {
    project: ujpest,
    image: imageMap[ujpest.slug].find(image => image.includes('04'))!
  },
  {
    project: budaors,
    image: imageMap[budaors.slug].find(image => image.includes('home'))!
  },
  {
    project: rezhaz,
    image: imageMap[rezhaz.slug].find(image => image.includes('04'))!
  },
  {
    project: budaors,
    image: imageMap[budaors.slug].find(image => image.includes('23'))!
  },
  {
    project: fasor,
    image: imageMap[fasor.slug].find(image => image.includes('13'))!
  },
  {
    project: csomor,
    image: imageMap[csomor.slug].find(image => image.includes('11'))!
  },
  {
    project: raday,
    image: imageMap[raday.slug].find(image => image.includes('press'))!
  }
]
