import React, { useEffect, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { getGifWelcome } from './helpers/getGifWelcome';
import { Container, Alert, Card, CardImg, Row, Col } from 'reactstrap';

const GifExpertApp = () => {
  const [categories, setCategory] = useState([]);
  const [image, setImage] = useState('');
  useEffect(() => {
    getGifWelcome()
    .then((image) => {
      setImage(image);
    })
  }, []);
  
  return (
    <Container>
      <h2>Buscador de Gif's</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      {categories.length === 0 && 
        <>
          <Alert color="secondary">
            <h3 style={{textAlign:'right'}}>Bienvenidx!</h3>
            <p style={{textAlign:'right'}}>Ingrese algo en el buscador.</p>
          </Alert>
          <Row>
            <Col xs="4">
          <Card
            body
            className="animate__animated animate__fadeInUp card-custom"
          >
            <CardImg src={image.url} alt="image.title" />
          </Card>
            </Col>
          </Row>
        </>
      }
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </Container>
  );
};

export default GifExpertApp;
