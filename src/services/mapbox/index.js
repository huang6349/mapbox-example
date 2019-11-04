import { format } from './utils';

export const DARK = format({
  BACKGROUND_COLOR: 'rgba(9, 16, 29, 1)',
  WATER_COLOR: 'rgba(18, 35, 48, 1)',
  ROAD_COLOR: 'rgba(18, 35, 48, 0.45)',
  ROAD_CASE_COLOR: 'rgba(0, 0, 0, 0.2)',
  BUILDING_SHORT_COLOR: 'rgba(60, 140, 200, 1)',
  BUILDING_HIGH_COLOR: 'rgba(255, 255, 255, 1)',
});

export const LIGHT = format({
  BACKGROUND_COLOR: 'hsl(150, 6%, 93%)',
  WATER_COLOR: 'hsl(185, 9%, 81%)',
  ROAD_COLOR: 'hsl(0, 0%, 100%)',
  ROAD_CASE_COLOR: 'hsl(156, 12%, 92%)',
  BUILDING_SHORT_COLOR: 'hsl(55, 5%, 91%)',
  BUILDING_HIGH_COLOR: 'hsl(185, 7%, 73%)',
});

export default DARK;
