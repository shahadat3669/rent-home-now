/* eslint-disable quotes */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button, Card, Carousel, Col, Row,
} from "react-bootstrap";
import {
  fetchProperties,
  selectProperties,
} from "../redux/properties/propertiesSlice";
import "./style/HomePage.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const properties = useSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (!properties.data) {
    return null;
  }

  const slides = properties.data.reduce((accumulator, property, index) => {
    const slideIndex = Math.floor(index / 4);

    if (!accumulator[slideIndex]) {
      accumulator[slideIndex] = [];
    }

    accumulator[slideIndex].push(property);

    return accumulator;
  }, []);

  return (
    <div className="d-flex">
      <div className="w-25">Sidbar</div>
      <div className="carousel-container">
        <Carousel prevLabel=">" nextLabel="<">
          {slides.map((slide) => (
            <Carousel.Item key={slide}>
              <Row>
                {slide.map((property) => (
                  <Col key={property.id} md={3}>
                    <Card className="property-card gap:2">
                      <div className="image-container">
                        <img
                          src={property.images[0].source}
                          alt={property.name}
                          className="card-image"
                        />
                        <div className="overlay-circle" />
                      </div>
                      <Card.Body>
                        <Card.Title>{property.name}</Card.Title>
                        <Card.Text>{property.description}</Card.Text>
                        {/* Render other property details */}
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
