import { useEffect, useState } from 'react'

interface FactResponse {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}

export default function RandomFact() {
  const [fact, setFact] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFact = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',
      )
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      const data: FactResponse = await response.json()
      setFact(data.text)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div className='fact-box'>
      {loading && <p>Loading fact...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <p>{fact}</p>}
      <button onClick={fetchFact}>Get another fact</button>
    </div>
  )
}
