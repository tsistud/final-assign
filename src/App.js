import Button from "./components/Button";
import Input from "./components/Input/Input";
import React, { useState, useEffect } from "react";
import Typography from "./components/Typography/Typography";
import Heading from "./components/Heading/Heading";
import Tooltip from "./components/Tooltip/Tooltip";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCryptos();
  }, []);

  const fetchCryptos = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      setCryptos(data.data);
      setFilteredCryptos(data.data);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    fetchCryptos();
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query) ||
        crypto.symbol.toLowerCase().includes(query)
    );
    setFilteredCryptos(filtered);
  };

  const formatChange = (value) => {
    const formattedValue = value > 0 ? `+${value}` : value;
    const color = value > 0 ? "green" : "red";
    return <span style={{ color }}>{formattedValue}%</span>;
  };

  
  return (
    <div style={{ padding: "20px" }}>
    <Heading variant="h1">Cryptocurrency Prices</Heading>
    <Button size="md" variant="bordered" onClick={handleUpdate}>
      Update
    </Button>
    <br />
    <br />
    <Input
      value={search}
      onChange={handleSearch}
      placeholder="Search"
      size="md"
    />

    {loading ? (
      <Typography variant="body1">Loading...</Typography>
    ) : (
      <div>
        {filteredCryptos.map((crypto) => (
          <Accordion
            key={crypto.id}
            title={crypto.name}
            extra={`Symbol: ${crypto.symbol}`}
          >
            <Typography variant="body2"><b>Symbol:</b> {crypto.symbol}</Typography>
            <Typography variant="body2"><b>Price USD:</b> {crypto.price_usd}</Typography>
            <Typography variant="body2"><b>Price BTC:</b> {crypto.price_btc}</Typography>
            <Typography variant="body2">
              <Tooltip
                text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price"
              >
                  <b >Market Cap USD:</b> 
              </Tooltip>{" "}
              {crypto.market_cap_usd}
            </Typography>
            <Typography
              variant="body2"
            >
              <b>Percent Change 24H:</b> {formatChange(crypto.percent_change_24h)}
            </Typography>
          </Accordion>
        ))}
      </div>
    )}
  </div>
  );
}

export default App;

