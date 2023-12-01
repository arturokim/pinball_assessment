const URL = 'https://pinballmap.com/api/v1';

const fetchData = (latitude, longitude) => {
  
  async function fetchRegionData() {
    try {
      const response = await fetch(`${URL}/regions/closest_by_lat_lon?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching region data:', error);
      throw error;
    }
  }
  
  async function fetchLocationsData(region) {
    try {
      const response = await fetch(`${URL}/region/${region}/locations.json`);
      const data = await response.json();
      const activeLocations = data.locations.filter(location => location.ic_active === true)
      const locationData = activeLocations.map(({ 
        name, 
        lat, 
        lon, 
        street, 
        city, 
        state, 
        location_machine_xrefs 
      }) => {
        return {
          name,
          latitude: lat,
          longitude: lon,
          address: `${street} ${city} ${state}`,
          machines: location_machine_xrefs.map(location => location.machine.name),
        };
      });
      return locationData;
    } catch (error) {
      console.error('Error fetching locations in region:', error);
      alert('There were no pinball machines located nearby.\nPlease enter different coordinates')
      window.location.reload();
      return;
    }
  }
  
  const fetchData = async () => {
    try {
      const regionData = await fetchRegionData();
      const regionName = regionData.region?.name || null;
      const locationData = await fetchLocationsData(regionName);
      return locationData;
    } catch (error) {
      console.error('Error in fetchData:', error);
    }
  };

  return fetchData();
}

export default fetchData;