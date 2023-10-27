import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
 list-style-type: none;
 margin: 0;
 padding: 0;
 overflow: hidden;
 white-space: nowrap;
 margin-left: -150%;

 @media only screen and (max-width: 768px) {
    width: 100px;
    align-items: center;
    margin-left: 0%;
    flex-direction: column 2;
 }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  margin-top: 2rem;
  height: 100px;

  @media only screen and (max-width: 768px) {
    width: 80px
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #00FF0000;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  const inicio = () => {
    window.open("/",);
  };
    const guests = () => {
      window.open("./pages/guests.html");
  };
  const diary = () => {
    window.open("./pages/diary.html");
};
const about = () => {
  window.open("./pages/about.html");
};

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
            <List>
              <ListItem>
                <Button onClick={inicio}>Inicio</Button>
              </ListItem>
              <ListItem>
                <Button onClick={guests}>Invitados</Button>
              </ListItem>
              <ListItem>
                <Button onClick={diary}>Agenda</Button>
              </ListItem>
              <ListItem>
                <Button onClick={about}>Sobre nosotros</Button>
              </ListItem>
            </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
