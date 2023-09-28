import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: var(--background);
  color: var(--light-grey);
`;

const Left = styled.div`
  line-height: 1.3;
`;

const Right = styled.div`
  font-size: 2rem;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <p>Business in Healthcare (BHC) </p>
        <p>Northwestern University</p>
        <p>Evanston, Illinois, 60201</p>
      </Left>
      <Right>
        <InstagramIcon fontSize="inherit" />
        <LinkedInIcon fontSize="inherit" />
      </Right>
    </Container>
  );
}

export default Footer;
