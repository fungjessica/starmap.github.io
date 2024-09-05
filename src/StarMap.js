import React, { useEffect, useState } from 'react';
import { fetchCelestialData } from './apiService';

function StarMap() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchCelestialData();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h2>Celestial Data</h2>
      {/* Render your celestial data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default StarMap;
