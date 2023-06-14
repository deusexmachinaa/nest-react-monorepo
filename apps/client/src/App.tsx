import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import api, { IConnection } from "../../api/src/api";

function App() {
  const [greeting, setGreeting] = useState("");
  const [bye, setBye] = useState("");
  const [str, setStr] = useState("");
  const [json, setJson] = useState(null as JSON | null);
  const connection0: IConnection = {
    host: "http://localhost:3000/api",
  };
  const [connection, setConnection] = useState(connection0);

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
    fetch("/api/jsondata")
      .then((res) => res.json())
      .then((data) => setJson(data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.functional.hello.getHello(connection);
      console.log("result =>", result);
      setStr(result);
    };

    fetchData();
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
      <p>{str || "못받아옴"}</p>
      <br />
      <p>{JSON.stringify(json, null, 2)}</p>
    </>
  );
}

export default App;
