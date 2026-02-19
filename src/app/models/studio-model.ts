import {StudioAwardModel} from './studio-award-model';

export interface StudioModel {
  brand: {
    hu: string,
    en: string
  },
  part1Title: {
    hu: string,
    en: string
  },
  part1Text: {
    hu: string[],
    en: string[]
  },
  part2Title: {
    hu: string,
    en: string
  },
  part2Text: StudioAwardModel[],
  part3Name: {
    hu: string,
    en: string
  },
  part3NameText: {
    hu: string[],
    en: string[]
  },
  part3Title: {
    hu: string,
    en: string
  },
  part3TitleText: {
    hu: string,
    en: string
  },
  part3ImageURL: string
}
