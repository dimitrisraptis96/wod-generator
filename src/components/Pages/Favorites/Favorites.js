import React from "react";
import styled from "styled-components";

import { Header1, Body } from "../../UI/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const WodsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > * {
    margin-top: 1rem;
  }
  > *:first-child {
    margin-top: 0;
  }
`;
const Favorites = ({ wods }) => {
  return (
    <Container>
      <Header1 weight="bold">My Favorites Wods</Header1>
      <Body>Here you can manage your saved WODs.</Body>
      <WodsList>
        {wods.map(wod => (
          <div key={wod}>{wod.split("-")[0]}</div>
        ))}
      </WodsList>
    </Container>
  );
};

export default Favorites;