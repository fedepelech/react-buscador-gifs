import React from 'react';
import { useGifEndpoint } from '../hooks/useGifEndpoint';
import GifGridCard from './GifGridCard';
import {Container, Row, Col} from 'reactstrap';

const GifGrid = ({category}) => {
    const {data, loading} = useGifEndpoint(category);
    return (
      <Container>
        <h3 className='animate__animated animate__fadeInUp category'>{category}</h3>
        { loading && <p className='animate__animated animate__pulse'>Cargando...</p>}

        <Row>
          {data.map((image) => {
            return (
              <Col key={image.id} xs="12" sm="6" md="4">
                <GifGridCard image={image} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
}

export default GifGrid;