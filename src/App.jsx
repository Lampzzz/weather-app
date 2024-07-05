import { useEffect, useState } from "react";
import Container from "./Container";
import SearchInput from "./SearchInput";
import Weather from "./Weather";
import { WEATHER_URL } from "./data";

const App = () => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(`${WEATHER_URL}&q=${search}`);

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      console.log(data);
      setSearch("");
      setWeatherData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <SearchInput
        onClick={handleClick}
        search={search}
        setSearch={setSearch}
      />
      <Weather data={weatherData} />
    </Container>
  );
};

export default App;
