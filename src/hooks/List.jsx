import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating Items");
    setItems(getItems());
  }, [getItems]);

  return (
    <ul className="list">
      {items.map(item => (
        <li className="list-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  getItems: PropTypes.func.isRequired
};

export default List;
