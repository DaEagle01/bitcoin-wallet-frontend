import BitcoinPriceGraph from "./components/BitcoinPriceGraph.view";
import BottomNavigation from "./components/BottomNavigation.view";
import BuySellBTC from "./components/BuySellBTC.view";
import CurrentAmount from "./components/CurrentAmount.view";
import Header from "./components/Header.view";

function App() {
  return (
    <div style={{ backgroundColor: "#f3f6f9" }}>
      <Header />
      <CurrentAmount />
      <BitcoinPriceGraph />
      <BuySellBTC from="Home" />
      <BottomNavigation />
    </div>
  );
}

export default App;
