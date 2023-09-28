import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 30px;
  background-color: var(--light-grey);
  color: var(--background);
`;

const Title = styled.i`
  display: flex;
  align-items: center;

  & > p {
    font-size: 3rem;
  }
`;

const Logo = styled.img`
  width: 3rem;
  padding: 5px;
`;

const Links = styled.span`
  display: flex;
  list-style: none;

  & > li {
    margin-left: 20px;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <Container>
      <Title>
        <Logo src="/bhc.png" alt="BHC logo" />
        <p>BHC</p>
      </Title>
      <Links>
        <li>Home</li>
        <li>Events</li>
        <li>Leadership</li>
        <li>Contact</li>
        <li>Apply</li>
      </Links>
    </Container>
  );
}

export default Header;
