import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import planetData from '../data.json';
import MainBottomInfo from './MainBottomInfo';
import PlanetImage from './PlanetImage';
import PlanetInfo from './PlanetInfo';

const Planet = () => {
  const { planetId } = useParams();
  const [name, setName] = useState<string>('overview');

  useEffect(() => {
    setName('overview');
  }, [planetId]);

  return (
    <PlanetContainer>
      {planetData.map(planet => (
        <>
          <MainInfo key={planet.name}>
            <PlanetImage
              planet={planet}
              planetId={planetId}
              name={name}
              setName={setName}
            />
            <PlanetInfo
              planet={planet}
              planetId={planetId}
              name={name}
              setName={setName}
            />
          </MainInfo>
          <MainBottomInfo planet={planet} planetId={planetId} />
        </>
      ))}
    </PlanetContainer>
  );
};

const PlanetContainer = styled.div`
  /* border: 1px solid red; */
  margin: 50px 165px 56px 165px;

  @media (max-width: 1440px) {
    margin: 126px 165px 56px 165px;
  }

  @media (max-width: 768px) {
    margin: 110px 40px;
  }

  @media (max-width: 768px) {
    /* margin-bottom: 36px; */
  }
`;

const MainInfo = styled.div`
  display: flex;
  gap: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 425px) {
    gap: 0;
  }
`;
export default Planet;
