import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { SelectFilter } from "./components/SelectFIlter/SelectFilter";

function App() {
  return (
    <Body>
      <header>
        <Header />
      </header>
      <section>
        <SelectFilter />
      </section>
      <main>
        <ProductsList />
      </main>
    </Body>
  );
}

export default App;
