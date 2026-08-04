import { Bug, Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import { weatherIconMap } from './weatherIconMap';
import { iconUrlByName } from './weatherIcons';

interface WeatherResponse {
  name: string
  main: { temp: number; feels_like: number; humidity: number }
  weather: { main: string; description: string; icon: string }[]
  wind: { speed: number }
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const apiKey = import.meta.env.VITE_OWM_API_KEY
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=59.329323&lon=18.068581&appid=${apiKey}&units=metric`,
      )
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      const data: WeatherResponse = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const iconCode = weather?.weather[0]?.icon
  const iconName = iconCode ? weatherIconMap[iconCode] : undefined
  const iconSrc = iconName ? iconUrlByName[iconName] : undefined

  return (
    <div>
      {loading && (
        <p>
          <Loader />
          Loading...
        </p>
      )}
      {error && (
        <p>
          <Bug />
          Error
        </p>
      )}
      {!loading && !error && weather && (
        <div className='place-items-center'>
          <h2>{weather.name}</h2>
          {iconSrc && (
            <img
              src={iconSrc}
              alt={weather.weather[0].description}
              width={48}
              height={48}
            />
          )}
          <p>{Math.round(weather.main.temp)}°C</p>
        </div>
      )}
    </div>
  )
}
