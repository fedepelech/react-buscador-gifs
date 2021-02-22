import React, { useEffect, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { getGifWelcome } from './helpers/getGifWelcome';
import { Container, Alert, Card, CardImg, Row, Col } from 'reactstrap';

const GifExpertApp = () => {
  const [categories, setCategory] = useState([]);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGifWelcome()
    .then((image) => {
      setLoading(false);
      setImage(image);
    })
  }, []);
  
  return (
    <Container>
      <h2>Buscador de Gif's</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <div>
        {categories.length === 0 && (
          <>
            <Alert color="secondary">
              <h3 style={{ textAlign: "right" }}>Bienvenidx!</h3>
              <p style={{ textAlign: "right" }}>Ingrese algo en el buscador.</p>
            </Alert>
            {loading && <h3 style={{color: 'white', textAlign:'center'}}>Cargando...</h3>}
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
        )}
      </div>

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </Container>
  );
};

export default GifExpertApp;
