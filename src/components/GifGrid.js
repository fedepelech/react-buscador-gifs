import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import {Container, Row, Col} from 'reactstrap';

const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);
    return (
      <Container>
        <h3 className='animate__animated animate__fadeInUp'>{category}</h3>
        { loading && <p className='animate__animated animate__pulse'>Cargando...</p>}

        <Row>
          {data.map((image) => {
            return (
              <Col xs="12" sm="6" md="4">
                <GifGridItem key={image.id} image={image} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
}

export default GifGrid;