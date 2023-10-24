import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <List>
      <ListItem>
        <Button to="/about/guests">Invitados</Button>
      </ListItem>
      <ListItem>
        <Button to="/about/agenda">Agenda</Button>
      </ListItem>
      <ListItem>
        <Button to="/about/about">Sobre nosotros</Button>
      </ListItem>
      <ListItem>
        <Button to="/about/more">Más</Button>
      </ListItem>
    </List>
  );
};

export default Links;