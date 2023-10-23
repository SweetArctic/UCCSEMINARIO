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
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 100px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem><Button target="_blank" onClick={() => window.open("")}>Inicio</Button></ListItem>
            <ListItem><Button target="_blank" onClick={() => window.open("./pages/guests")}>Invitados</Button></ListItem>
            <ListItem><Button target="_blank" onClick={() => window.open("./pages/diary")}>Agenda</Button></ListItem>
            <ListItem><Button target="_blank" onClick={() => window.open("./pages/about")}>Sobre nosotros</Button></ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Ayuda</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
