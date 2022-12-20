import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import backGround from '../../assets/background-stars.svg';

const RootLayout = () => {
  return (
    <RootContainer>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </RootContainer>
  );
};

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #070724;
  background-image: url(${backGround});
`;

const MainContainer = styled.main`
  /* border: 1px solid red; */
  /* padding: 126px 165px 56px 165px; */

  @media (max-width: 768px) {
    /* margin: 110px 40px 36px 39px; */
  }
`;

export default RootLayout;