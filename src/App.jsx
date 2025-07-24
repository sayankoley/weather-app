import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Input from './Input';
import { Star } from './Star';
import { WeatherCard } from './WeatherCard';
import axios from 'axios';

function App() {
  const [input, setInput] = useState("Howrah");
  const [deinput, setdeInput] = useState("Howrah"); // Set default to avoid empty on first load
  const [data, setData] = useState(null);

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setdeInput(input);
    }, 100);
    return () => clearTimeout(timer);
  }, [input]);

  const getdata = async () => {
    if (!deinput) return;
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API;

const api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${deinput}&aqi=yes`;

     
      const res = await axios.get(api);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      setData(null);
      console.warn("Error fetching weather data:", error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, [deinput]);

  return (

    <>
      <Star />
      <Input inputData={input} setInputData={setInput} />
      <div className="cardContainer">
        <WeatherCard weather={data}></WeatherCard>

      </div>
      <Footer />
    </>
  );
}

export default App;
