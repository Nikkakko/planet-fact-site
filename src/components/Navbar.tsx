import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Links from '../data.json';
import burgerMenu from '../../public/assets/icon-hamburger.svg';
import chevronIcon from '../../public/assets/icon-chevron.svg';
import { BiChevronRight } from 'react-icons/bi';

type Props = {
  color: string;
  planetId: number;
};

const Navbar = () => {
  const [color, setColor] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [planetLength, setPlanetLength] = useState<number>(0);
  const { planetId } = useParams();

  const changeColor = () => {
    Links.map(link => {
      if (link.name == planetId) {
        setColor(link.color);
        setPlanetLength(planetId.toLocaleLowerCase().length);
      }
    });
  };

  // setIsOpen(false) if  window width is greater than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    // disable scrolling when isOpen is true
    const handleScroll = (event: any) => {
      if (isOpen) {
        event.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    changeColor();
    setIsOpen(false);
  }, [planetId]);

  return (
    <Nav>
      <Title>The Planets</Title>
      <BurgerMenu onClick={handleClick} />

      {isOpen && (
        <MobileList>
          <MobileUnlisted>
            {Links.map(link => (
              <MobileItem key={link.name}>
                <ItemWrap>
                  <MobileIcon style={{ background: `${link.color}` }} />
                  <StyledNavLink
                    planetId={planetLength}
                    color={color}
                    to={`/planet/${link.name}`}
                  >
                    {link.name}
                  </StyledNavLink>
                </ItemWrap>
                <ChevronIcon>
                  <BiChevronRight />
                </ChevronIcon>
              </MobileItem>
            ))}
          </MobileUnlisted>
        </MobileList>
      )}
      <Unlisted>
        {Links.map(link => (
          <ListItem key={link.name}>
            <StyledNavLink
              planetId={planetLength}
              color={color}
              to={`/planet/${link.name}`}
            >
              {link.name}
            </StyledNavLink>
          </ListItem>
        ))}
      </Unlisted>
    </Nav>
  );
};

const Nav = styled.nav`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 22px 41px 27px 32px;
  height: 85px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    height: 159px;
  }

  @media (max-width: 425px) {
    flex-direction: row;
    align-items: center;
    height: 68px;
    padding: 14px 24px;
  }
`;
const Unlisted = styled.ul`
  display: flex;
  gap: 33px;
  margin-bottom: 27px;

  @media (max-width: 425px) {
    display: none;
  }
`;
const ListItem = styled.li`
  color: #ffff;
  list-style-type: none;

  a {
    text-decoration: none;
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    /* identical to box height, or 227% */

    letter-spacing: 1px;
    text-transform: uppercase;
    mix-blend-mode: normal;
    opacity: 0.75;

    color: #ffffff;
  }
`;
const Title = styled.h1`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-top: 32px;
  }

  @media (max-width: 425px) {
    margin-top: 0;
  }
`;

const StyledNavLink = styled(NavLink)<Props>`
  &[class*='active'] {
    color: #ffffff;
    opacity: 1;

    ::before {
      content: '';
      position: absolute;

      top: 0;

      width: ${props => props.planetId * 7}px;
      height: 4px;
      background: ${props => props.color};
    }
  }

  @media (max-width: 768px) {
    &[class*='active'] {
      ::before {
        content: none;
      }
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;
  background: url(${burgerMenu}) no-repeat;
  color: #fff;
  width: 24px;
  height: 17px;

  @media (max-width: 425px) {
    display: block;
    /* align-items: center; */
  }
`;

const MobileList = styled.div`
  position: absolute;
  background: #070724;
  z-index: 999;
  width: 100vw;
  max-width: 100%;
  height: 950px;
  top: 69px;
  left: 0;
  padding: 44px 32px 0 24px;

  /* display: flex; */
`;

const MobileUnlisted = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 41px;

  /* padding: 46px 0 0 24px; */
`;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const MobileItem = styled.li`
  color: #ffff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* overflow: visible; */

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }

  /* width: 100%; */

  a {
    text-decoration: none;
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height, or 167% */

    text-align: center;
    letter-spacing: 1.36364px;
    text-transform: uppercase;

    color: #ffffff;
  }
`;

const MobileIcon = styled.div`
  /* background: #def4fc; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ChevronIcon = styled.div`
  /* background: #def4fc; */
  /* background: url(${chevronIcon}) no-repeat; */

  width: 4px;
  height: 8px;

  opacity: 0.25;
`;
export default Navbar;
