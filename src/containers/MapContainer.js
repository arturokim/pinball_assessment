import { Grid, Segment, Divider } from 'semantic-ui-react';

import Map from '../components/Map';
import PinballContainer from './PinballContainer';

const MapContainer = () => {
  return (
    <Segment className="map-container">
      <Grid columns={2}>
        <Grid.Column style={{padding: 0}}>
          <Map />
        </Grid.Column>
        <Grid.Column style={{padding: 0}}>
          <PinballContainer />
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
};

export default MapContainer;