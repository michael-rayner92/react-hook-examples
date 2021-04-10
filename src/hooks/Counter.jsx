import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import List from "./List";

const Counter = ({ setDark }) => {
  const [number, setNumber] = useState(1);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div className="container">
      <header>
        <h2>useCallback()</h2>
      </header>
      <main>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button
          type="button"
          className="d-block"
          onClick={() => setDark(prevDark => !prevDark)}
        >
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </main>
    </div>
  );
};

Counter.propTypes = {
  setDark: PropTypes.func.isRequired
};

export default Counter;
