import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
        <Fragment>
            <Container>
            <div className="section-title"><h2> Featured product</h2></div>
            <p> Exlusive Collection</p>

                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
  }
}

export default FeaturedProducts;
