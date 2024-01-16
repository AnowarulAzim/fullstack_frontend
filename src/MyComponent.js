// src/components/MyComponent.jsx

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:3000/data');
        const response = await fetch('https://backend-node-deploy-edf8c8eb1e28.herokuapp.com/data');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Data: {data ? <>{
          data.map((item)=>(
            <>
              <li>{item.title}</li>
              <p>{item.description}</p>
            </>
            
          ))
        }</> : 'No data available'}</p>
        
      )}

    </div>
  );
};

export default MyComponent;
