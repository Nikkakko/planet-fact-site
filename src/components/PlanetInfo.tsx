import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataType } from '../Types/dataTypes';
import sourceIcon from '../../public/assets/icon-source.svg';

type PlanetInfoProps = {
  planet: DataType;
  planetId: string | undefined;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

type ButtonProps = {
  name: string;
  btnName: string;
  color: string;
};

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet, planetId, name, setName }) => {
  const btnNames = ['overview', 'structure', 'geology'];
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    setColor(planet.color);
  }, [planetId]);

  // set name based on the link clicked
  const Buttons = () => {
    return (
      <>
        {btnNames?.map((btnName, index) => (
          <Button
            onClick={() => setName(btnName)}
            key={btnName}
            name={name}
            btnName={btnName}
            color={color}
          >
            <span>0{index + 1}</span>
            {btnName}
          </Button>
        ))}
      </>
    );
  };

  return (
    <>
      {planetId === planet.name && (
        <PlanetInfoContainer>
          <InfoWrapper>
            <Title>{planet.name}</Title>
            {<Description>{planet[name].content}</Description>}
            <Source>
              <SourceTitle>Source:</SourceTitle>
              <a rel='noreferrer' target='_blank' href={`${planet[name].source}`}>
                Wikipedia
              </a>
              <Image />
            </Source>
          </InfoWrapper>
          <BottomInfo>
            <Buttons />
          </BottomInfo>
        </PlanetInfoContainer>
      )}
    </>
  );
};

const InfoWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 339px;
  }

  @media (max-width: 425px) {
    @media (max-width: 425px) {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

const PlanetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    /* height: 100%; */
    justify-content: space-between;
    margin-top: 130px;
  }

  @media (max-width: 425px) {
    margin-top: 98px;
  }
`;

const Title = styled.h1`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 104px;
  /* identical to box height */
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 48px;
    line-height: 62px;
  }

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
  }
`;

const Description = styled.p`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */
  text-align: left;
  /* width: 320px; */

  margin-top: 23px;

  color: #ffffff;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  gap: 5px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }

  @media (max-width: 425px) {
    margin-bottom: 32px;
  }

  a {
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    /* identical to box height, or 179% */

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;

    @media (max-width: 768px) {
      font-weight: 400;
      font-size: 12px;
      line-height: 25px;
    }
  }
`;

const SourceTitle = styled.p`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  /* identical to box height, or 179% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Image = styled.div`
  background: url(${sourceIcon});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 12px;
  height: 12px;
  opacity: 0.5;
  color: #fff;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 281px;
  }

  @media (max-width: 425px) {
    position: absolute;
    top: 89px;
    left: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    ::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      height: 100%;

      border-bottom: 1px solid rgba(250, 250, 250, 0.2);
    }
  }
`;

const Button = styled.button<ButtonProps>`
  background: ${({ name, btnName, color }) => (name === btnName ? color : 'transparent')};
  border: 1px solid rgba(250, 250, 250, 0.2);
  color: #fff;

  cursor: pointer;

  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  /* identical to box height, or 208% */

  text-align: start;

  letter-spacing: 2.57143px;
  text-transform: uppercase;

  padding: 10px 20px;

  &:nth-child(1) {
    margin-top: 39px;
  }

  &:nth-child(2) {
    margin-top: 16px;
  }

  &:nth-child(3) {
    margin-top: 16px;
    margin-bottom: 107px;
  }

  span {
    margin-right: 28px;
    opacity: 0.5;
  }

  &:hover {
    background: ${({ name, btnName, color }) =>
      name === btnName ? color : 'rgba(216, 216, 216, 0.2)'};
    mix-blend-mode: normal;
  }

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 9px;
    line-height: 25px;
    /* identical to box height, or 278% */

    letter-spacing: 1.92857px;
  }

  @media (max-width: 425px) {
    background: transparent;
    border: none;

    color: ${({ name, btnName, color }) => (name === btnName ? '#fff' : '#ffffff75')};

    padding: 0;

    &::after {
      content: '';
      position: absolute;
      top: 33px;
      transform: ${({ name, btnName }) =>
        name === btnName ? 'translateX(-10px)' : 'none'};

      width: 80px;
      height: 4px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-bottom: ${({ name, btnName, color }) =>
        name === btnName ? `4px solid ${color}` : 'none'};
    }

    &:nth-child(1) {
      margin-top: 0;
    }

    &:nth-child(2) {
      margin-top: 0;
    }

    &:nth-child(3) {
      margin-top: 0;
      margin-bottom: 0;
    }

    span {
      display: none;
    }

    &:hover {
      background: none;
    }
  }
`;
export default PlanetInfo;
