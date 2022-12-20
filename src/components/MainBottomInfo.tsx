import { DataType } from '../Types/dataTypes';
import styled from 'styled-components';

type PlanetInfoProps = {
  planet: DataType;
  planetId: string | undefined;
};

type InfoProps = {
  title: string;
  info: string;
};

const MainBottomInfo: React.FC<PlanetInfoProps> = ({ planet, planetId }) => {
  const { rotation, revolution, radius, temperature } = planet;

  const InfoComp: React.FC<InfoProps> = ({ title, info }) => {
    return (
      <Container>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </Container>
    );
  };

  return (
    <>
      {planetId === planet.name && (
        <Wrap>
          <InfoComp title='rotation time' info={rotation} />
          <InfoComp title='revolution time' info={revolution} />
          <InfoComp title='radius' info={radius} />
          <InfoComp title='Average temp' info={temperature} />
        </Wrap>
      )}
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    /* margin-bottom: 50px; */
  }

  @media (max-width: 425px) {
    display: block;
    gap: 0;
    /* width: 100%; */
  }
`;

const Container = styled.div`
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  padding: 20px 0 27px 23px;

  width: 255px;
  /* height: 128px; */
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    /* width: 164px; */
    height: 88px;
    /* margin-bottom: 36px; */
    /* padding: 0; */
  }

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 9px 24px;
  }
`;

const Title = styled.span`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  /* identical to box height, or 227% */

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 8px;
    line-height: 16px;
    /* identical to box height, or 200% */

    letter-spacing: 0.727273px;
  }
`;
const Info = styled.h1`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height */

  letter-spacing: -1.5px;
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    /* identical to box height */

    letter-spacing: -0.9px;
  }

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.75px;
  }
`;

export default MainBottomInfo;
