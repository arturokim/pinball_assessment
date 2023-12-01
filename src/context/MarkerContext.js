import { createContext } from "react";

export const MarkerContext = createContext({
  markers: [],
  setMarkers: () => {}
})