import { useState, useEffect, useRef } from "react";

const NameForm = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, []);

  return (
    <div className="container">
      <header>
        <h2>useRef()</h2>
      </header>
      <main>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <div className="mt-1">
          <strong>My Name Is </strong> {name}
        </div>
        <div className="mt-1">
          Component has rendered <strong>{renderCount.current}</strong> times
        </div>
      </main>
    </div>
  );
};

export default NameForm;
