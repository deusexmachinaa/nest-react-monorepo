import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [greeting, setGreeting] = useState("");
  const [bye, setBye] = useState("");
  const [json, setJson] = useState();

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.text())
      .then((text) => setGreeting(text));
  }, [greeting]);

  useEffect(() => {
    fetch("/api/goodbye")
      .then((res) => res.text())
      .then((text) => setBye(text));
  }, [bye]);

  useEffect(() => {
    fetch("/api/jsondata");
    //todo: fix this
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greeting}</h1>
      <h2>{bye}</h2>
    </>
  );
}

export default App;
