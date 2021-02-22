import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const GifGridCard = ({image}) => {

  const goToWebsiteGif = () => {
    return window.open(`${image.url}`, '_blank');
    };

  return (
    <Card body className="animate__animated animate__fadeInUp card-custom">
      <CardImg src={image.url} alt="image.title" />
      <Button
        outline
        className="button-custom"
        color="primary"
        size="sm"
        onClick={goToWebsiteGif}
      >
        Ir al sitio...
      </Button>
    </Card>
  );
}

export default GifGridCard;
