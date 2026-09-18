import { ServiceCategory } from '../types';
import { category1Expatriate } from './categories/category1Expatriate';
import { category2IndonesiaVisas } from './categories/category2IndonesiaVisas';
import { category3OverseasVisas } from './categories/category3OverseasVisas';
import { category4Corporate } from './categories/category4Corporate';
import { category5CivilDocs } from './categories/category5CivilDocs';
import { category6Executive } from './categories/category6Executive';
import { category7Addons } from './categories/category7Addons';

export const serviceCategories: ServiceCategory[] = [
  category1Expatriate,
  category2IndonesiaVisas,
  category3OverseasVisas,
  category4Corporate,
  category5CivilDocs,
  category6Executive,
  category7Addons
];

export const allServicesList = serviceCategories.flatMap(category => category.services);
