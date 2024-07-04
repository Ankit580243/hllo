import "./App.css";

import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/237/200/300"
          imgAlt="Card Image"
          title="Card-tittle"
          description="This is the card description section "
          buttonText="learn more"
          link="cardPage"
        />
      </div>
    </div>
  );
}

export default App;