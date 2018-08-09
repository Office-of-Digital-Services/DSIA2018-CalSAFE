import { Event } from './event';

export const EVENTS: Event[] = [
  {
    id: 0,
    title: 'WHITE ROCK FIRE',
    location: 'Sunrise Blvd & Hwy 50',
    county: 'Sacramento County',
    acresBurned: '19,165',
    containment: '20%',
    evacuation: 'Mandatory evacuation',
    file: 'fireResources.png'
  },
  {
    id: 1,
    title: 'FERGUSON FIRE',
    location: 'Near El Portal',
    county: 'Mariposa County',
    acresBurned: '21,041',
    containment: '7%',
    evacuation: 'No evacuation',
    file: 'furgusonFire.png'
  },
  {
    id: 2,
    title: 'PAWNEE FIRE',
    location: 'Northeast  of Clearlake Oaks',
    county: 'Lake County',
    acresBurned: '15,197',
    containment: '100%',
    evacuation: 'No evacuation',
    file: 'pawneeFire.png'
  },
  {
    id: 3,
    title: 'LIONS FIRE',
    location: 'Golden Trout Wilderness near Lion Meadow',
    county: 'Tulare County',
    acresBurned: '4,064',
    containment: '100%',
    evacuation: 'No evacuation',
    file: 'lionsFire.png'
  },
  {
    id: 4,
    title: 'COUNTY FIRE',
    location: 'East of Lake Berryessa',
    county: 'Napa & Yolo County',
    acresBurned: '90,288',
    containment: '100%',
    evacuation: 'No evacuation',
    file: 'countyFire.png'
  }
];
