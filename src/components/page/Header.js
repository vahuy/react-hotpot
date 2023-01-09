import "./header.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col xs={1} md={1} className="logo">
          Logo
        </Col>
        <Col xs={11} md={11}>
          Header
        </Col>
      </Row>
    </div>
  );
};
export default Header;
