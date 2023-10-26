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

const Item = styled.div`
 display: inline-block;
 color: #fff;
 text-align: center;
 padding: 14px 16px;
 text-decoration: none;

 @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
 }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 100px;
  @media only screen and (max-width: 768px) {
    width: 100px
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
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
            <List>
          <ListItem>
            <Button to="./pages/guests.html">Invitados</Button>
          </ListItem>
          <ListItem>
            <Button to="/pages/agenda">Agenda</Button>
          </ListItem>
          <ListItem>
            <Button to="/pages/Concurso">Concurso</Button>
          </ListItem>
          <ListItem>
            <Button to="/pages/about">Sobre nosotros</Button>
          </ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;