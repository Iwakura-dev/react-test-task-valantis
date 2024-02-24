import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";

function App() {
  return (
    <Body>
      <header>
        <Header />
      </header>
      <main>
        <ProductsList />
      </main>
    </Body>
  );
}

export default App;
