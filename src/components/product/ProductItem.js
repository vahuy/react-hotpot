import { Row, Col } from "react-bootstrap"
import "./product_item.scss";
const ProductItem = (props) => {
  return (
    <div className={props.index % 2 === 0 ? "dark" : "light"}>
      <Row>
        <Col xs={9} sm={9}>
          <div className="item-info">
            <Row>
              <Col xs={4} sm={4}><div className="date">{`Month: ${props.info.month}`}</div></Col>
              <Col xs={8} sm={8}><div className="prod-name">{`ProductName: ${props.info.name}`}</div></Col>
            </Row>
          </div>
        </Col>
        <Col xs={3} sm={3}>
          <div className="price">
            {props.info.price}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ProductItem;
