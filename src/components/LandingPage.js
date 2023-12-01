import React from "react";
import { Grid, Container } from "semantic-ui-react";

import LongitudeInput from "./LongitudeInput";
import LatitudeInput from "./LatitudeInput";
import NearMeButton from "./NearMeButton";
import SearchButton from "./SearchButton";
import Message from "./Message";

const LandingPage = ({ isClicked, setIsClicked }) => {
  return (
    <Container text textAlign="center" className="landing-page">
      <Message />
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={8}>
            <LatitudeInput />
          </Grid.Column>
          <Grid.Column>
            <LongitudeInput />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <NearMeButton 
            isClicked={isClicked} setIsClicked={setIsClicked} />
          </Grid.Column>
          <Grid.Column>
            <SearchButton isClicked={isClicked} setIsClicked={setIsClicked}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default LandingPage;