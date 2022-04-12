import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import './App2.css'

const Home = () => {
  return (
      <div>
        <ListGroup>
          <ListGroup.Item as="li">
            <Link to={"/meatballs"}> Фрикадельки </Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={"/squid"}> Игра в кальмара </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );
};

export default Home;