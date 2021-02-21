import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const GifGridItem = ({image}) => {
    return (
      <Card body className="animate__animated animate__fadeInUp card-custom">
        <CardImg src={image.url} alt="image.title" />
        <Button outline className="button-custom" color="primary" size="sm">Ir al sitio...</Button>
      </Card>
    );
}

export default GifGridItem;
