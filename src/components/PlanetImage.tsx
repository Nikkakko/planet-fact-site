import { DataType } from '../Types/dataTypes';
import styled from 'styled-components';
import { useEffect } from 'react';

type PlanetInfoProps = {
  planet: DataType;
  planetId: string | undefined;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const PlanetImage: React.FC<PlanetInfoProps> = ({ planet, planetId, name, setName }) => {
  const changeImage = () => {
    let image;

    if (name === 'overview') {
      image = <Image src={planet.images.planet} alt={planet.name} />;
    } else if (name === 'structure') {
      image = <Image src={planet.images.internal} alt={planet.name} />;
    } else if (name === 'geology') {
      image = (
        <>
          <Image src={planet.images.planet} alt={planet.name} />
          <GeologyImage src={planet.images.geology} alt={planet.name} />
        </>
      );
    }

    return image;
  };

  return <ImageContainer>{planetId === planet.name && changeImage()}</ImageContainer>;
};

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

const Image = styled.img`
  width: 290px;
  height: 290px;

  @media (max-width: 768px) {
    width: 184px;
    height: 184px;
  }

  @media (max-width: 425px) {
    width: 111px;
    height: 111px;
  }
`;

const GeologyImage = styled.img`
  position: absolute;
  bottom: 70px;
  width: 158px;
  height: 165px;

  @media (max-width: 768px) {
    width: 100px;
    height: 105px;
    bottom: -60px;
  }

  @media (max-width: 425px) {
    width: 60px;
    height: 63px;
    bottom: -40px;
  }
`;
export default PlanetImage;
