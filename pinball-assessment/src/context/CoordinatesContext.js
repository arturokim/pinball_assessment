import { createContext } from 'react';

export const CoordinatesContext = createContext({
  latitude: 0,
  longitude: 0,
  setLatitude: () => {},
  setLongitude: () => {}
});