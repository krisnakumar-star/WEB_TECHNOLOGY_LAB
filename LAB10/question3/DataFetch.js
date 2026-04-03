import React, { useState, useEffect } from "react";

function DataFetch() {
  const [data, setData] = useState([]);      // store API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);  // error state

  useEffect(() => {
    // async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // runs only once

  // Loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch;