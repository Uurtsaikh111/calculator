import Cards from "./components/Cards";
import Header from "./components/Header";
import Highlight from "./components/Highlight";

import "./style/global.css";

export default function App() {
  return (
    <div>
      <p>Hello World</p>
      
      <Header />
      <Highlight />
      <Cards />
    </div>
  );
}
