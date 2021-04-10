import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ dark, setDark }) => {
  const [number, setNumber] = useState(0);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <div className="container">
      <header>
        <h2>useMemo()</h2>
      </header>
      <main>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button
          className="d-block"
          onClick={() => setDark(prevDark => !prevDark)}
        >
          Change Theme
        </button>
        <div style={themeStyles}>
          <strong>Double Number: </strong>
          {doubleNumber}
        </div>
      </main>
    </div>
  );
};

function slowFunction(num) {
  console.log("Calling Slow Function");
  if (isNaN(num)) return 0;
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

ThemeSwitcher.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired
};

export default ThemeSwitcher;
