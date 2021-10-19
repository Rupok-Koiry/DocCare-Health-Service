import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import classes from "./News.module.css";
import lemon from "../../images/lemon.webp";
import mouth from "../../images/mouth.webp";
import paste from "../../images/paste.webp";
import { FaRegClock, FaRocketchat } from "react-icons/fa";

const News = () => {
  //Latest news
  return (
    <section className={classes.news}>
      <div className="container">
        <h2 className="section-title">Latest News</h2>
        <Row xs={1} lg={3} md={2} className="gy-5">
          <Col>
            <Card className={classes.newsCard}>
              <Card.Img variant="top" src={lemon} />
              <Card.Body className={classes.newsBody}>
                <h5>Why you should avoid sipping your drinks</h5>
                <Card.Text>
                  Saliva helps moisten food so we can taste it, and helps us to
                  swallow food without choking. The enzymes in saliva help break
                  down starches, beginning the process of digestion before the
                  food even leaves our mouths
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <FaRegClock />
                    {"  "} 16 Oct 2021
                  </p>
                  <p>
                    <FaRocketchat />
                    {"  "}6 Comments
                  </p>
                </div>
              </Card.Body>
              <Card.Footer>
                <button className={`btn ${classes.newsBtn}`}>Read more</button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className={classes.newsCard}>
              <Card.Img variant="top" src={paste} />
              <Card.Body className={classes.newsBody}>
                <h5>What is the best kind of toothpaste to use?</h5>
                <Card.Text>
                  The best toothpaste does more than just leave your mouth
                  feeling fresh — its active ingredients help clean each tooth,
                  eliminating plaque and bacteria, and preventing gingivitis,
                  cavities, and helping to prevent tooth decay.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <FaRegClock />
                    {"  "} 14 Oct 2021
                  </p>
                  <p>
                    <FaRocketchat />
                    {"  "}5 Comments
                  </p>
                </div>
              </Card.Body>
              <Card.Footer>
                <button className={`btn ${classes.newsBtn}`}>Read more</button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className={classes.newsCard}>
              <Card.Img variant="top" src={mouth} />
              <Card.Body className={classes.newsBody}>
                <h5>How your mouth bacteria can harm your lungs</h5>
                <Card.Text>
                  There is a clear link between poor oral health and respiratory
                  disease. Cavities and gum disease are all signs of poor oral
                  health. Did you know those issues increase the risk of lung
                  infection?
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <FaRegClock />
                    {"  "} 23 Sep 2021
                  </p>
                  <p>
                    <FaRocketchat />
                    {"  "}2 Comments
                  </p>
                </div>
              </Card.Body>
              <Card.Footer>
                <button className={`btn ${classes.newsBtn}`}>Read more</button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default News;
