import Dropdown from "react-bootstrap/Dropdown";
import './dropdown.scss';
const BasicDropDown = (props) => {
  const handleOnclick = (e) => {
    const selectedItem = props.items.find(i => i.value === e.target.text)
    props.onSelect(selectedItem)
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.items.map((item, index) => (
          <Dropdown.Item key={index} onClick={handleOnclick}>
            {item.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default BasicDropDown;
