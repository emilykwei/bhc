import Header from '../components/Header';
import Footer from '../components/Footer';
import HealingIcon from '@mui/icons-material/Healing';
import styled from 'styled-components';

const Content = styled.div`
  min-height: 90vh;
  background-color: var(--background);
  color: var(--light-grey);
`;

const Title = styled.div`
  line-height: 1.14;
  font-size: 4rem;
  max-width: 70%;
  padding-top: 20vh;
  padding-left: 60px;

  & > p {
    max-width: 80%;
    padding-bottom: 40px;
  }
`;

const Intro = styled.h1`
  font-size: inherit;
  letter-spacing: 0.15rem;
  padding-bottom: 30px;
`;

const Button = styled.button`
  background-color: var(--yellow);
  color: var(--background);
  display: inline-block;
  min-width: 200px;
  padding: 16px 40px;
  border: 0;
  border-radius: 36px;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.25s linear;
`;

function Home() {
  return (
    <>
      <Header />
      <Content>
        <Title>
          <Intro>
            <HealingIcon fontSize="inherit" />
            When healthcare and business intersect...
          </Intro>
          <p>
            At BHC, we aim to educate, inform, and expose undergraduate students
            at Northwestern University to the intersections of business and
            healthcare.
          </p>
          <Button>Join now</Button>
        </Title>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
