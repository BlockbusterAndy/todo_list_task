import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWeather } from "../services/WeatherService";
import { Sun, Cloud, Thermometer, CloudRain } from "lucide-react";

const WeatherCard = () => {
  const location = useSelector((state) => state.interface.location);

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location) {
      const fetchWeather = async () => {
        try {
          setLoading(true);
          const data = await getWeather(location.lat, location.lon);
          setWeatherData(data);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch weather data.");
        } finally {
          setLoading(false);
        }
      };
      fetchWeather();
    }
  }, [location]);

  if (loading) return <p className="text-center pt-4 font-semibold text-base">Loading weather data ...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-secondaryBG-light dark:bg-secondaryBG-dark text-primaryBG-dark dark:text-primaryBG-light p-6 py-8 rounded-lg md:shadow-lg md:w-[350px] mx-auto mt-6">
      <h2 className="text-2xl font-medium text-center mb-4">Weather</h2>
      {weatherData && (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="text-yellow-500" />
            <h3 className="text-xl font-semibold">
              {weatherData.weather[0].main}
            </h3>
          </div>
          <div className="text-center mb-4">
            <p className="text-lg">
              <Thermometer className="inline mr-2 text-blue-500" />
              {Math.round(weatherData.main.temp - 273.15)}°C
            </p>
            <p className="text-lg">
              {weatherData.name}, {weatherData.sys.country}
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-1">
              <Cloud className="text-blue-500" />
              <span className="text-lg">
                {weatherData.clouds.all}% Cloudiness
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CloudRain className="text-blue-500" />
              <span className="text-lg">
                {weatherData.rain ? `${weatherData.rain["1h"]} mm` : "No Rain"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Thermometer className="text-blue-500" />
              <span className="text-lg">
                {Math.round(weatherData.main.humidity)}% Humidity
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
