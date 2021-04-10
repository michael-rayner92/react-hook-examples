import { useEffect, useState } from "react";
import Todos from "./todos/Todos";
import ThemeSwitcher from "./hooks/ThemeSwitcher";
import NameForm from "./hooks/NameForm";
import Counter from "./hooks/Counter";
import "./App.css";

function App() {
  const [demo, setDemo] = useState("useRef");
  const [dark, setDark] = useState(true);
  const root = document.documentElement;

  useEffect(() => {
    root.style.setProperty("--bg-color", dark ? "#0b2c4a" : "#ffffff");
    root.style.setProperty("--color-text", dark ? "#ffffff" : "#0b2c4a");
  }, [dark, root.style]);

  return (
    <div className="container">
      <header>
        <h1>useHooks(Learn)</h1>
      </header>
      <main className="mt-1">
        <nav className="menu">
          <div className="menu-item">
            <button
              type="button"
              onClick={() => setDemo("useReducer")}
              className="menu-item__btn"
            >
              useReducer()
            </button>
            <button
              type="button"
              onClick={() => setDemo("useMemo")}
              className="menu-item__btn"
            >
              useMemo()
            </button>
            <button
              type="button"
              onClick={() => setDemo("useCallback")}
              className="menu-item__btn"
            >
              useCallback()
            </button>
            <button
              type="button"
              onClick={() => setDemo("useRef")}
              className="menu-item__btn"
            >
              useRef()
            </button>
          </div>
        </nav>
        {demo === "useReducer" && <Todos />}
        {demo === "useMemo" && <ThemeSwitcher dark={dark} setDark={setDark} />}
        {demo === "useCallback" && <Counter setDark={setDark} />}
        {demo === "useRef" && <NameForm />}
      </main>
    </div>
  );
}

export default App;
