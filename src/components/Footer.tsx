import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../assets/footer logo.png";
import wp from "../assets/wp.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

const Footer = () => {
  return (
    <footer className="py-5 mt-5">
      <Container>
        <Row className="mt-5 text-center text-sm-start">
          {" "}
          {/* Added text-center for small screens */}
          {/* Column 1 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {" "}
            {/* Centered using mx-auto */}
            <img src={footerLogo} alt="footerLogo" />
          </Col>
          {/* Column 2 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {" "}
            {/* Centered using mx-auto */}
            <h6 className="text-secondary">Make an Appointment</h6>
            <h6 className="text-secondary">About Dubai Hotel Service</h6>
            <h6 className="text-secondary">Why Choose Us</h6>
            <h6 className="text-secondary">Service</h6>
            <h6 className="text-secondary">Our Contact</h6>
          </Col>
          {/* Column 3 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {" "}
            {/* Centered using mx-auto */}
            <h5 className="text-dark">Service</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <h6 className="text-secondary">Property Cleaning</h6>
              </li>
              <li>
                <h6 className="text-secondary">Domestic Cleaning</h6>
              </li>
              <li>
                <h6 className="text-secondary">Window Cleaning</h6>
              </li>
              <li>
                <h6 className="text-secondary">House Cleaning</h6>
              </li>
              <li>
                <h6 className="text-secondary">Office Cleaning</h6>
              </li>
            </ul>
          </Col>
          {/* Column 4 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {" "}
            {/* Centered using mx-auto */}
            <h5 className="text-dark">Contact Us</h5>
            <ul className="list-inline mt-3">
              <li>
                <h6 className="text-secondary">T - 01258639562</h6>
              </li>
              <li>
                <h6 className="text-secondary">
                  E - Dubaihotelservice@gmail.com
                </h6>
              </li>
              <div className="d-flex justify-content-center mt-4">
                {" "}
                {/* Centered icons */}
                <img src={fb} alt="fb" className="me-3" />
                <img
                  src={wp}
                  alt="wp"
                  width="50"
                  className="mx-3 bg-success rounded-5"
                />
                <img src={ig} alt="ig" className="mx-3" />
              </div>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
