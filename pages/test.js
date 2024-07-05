// pages/index.js or any other Next.js page or component

import React, { useEffect, useState } from 'react';

const ExamplePage = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = '/api/generate_webpage'; // Using the rewrite rule
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjpbMzRdLCJleHAiOjE3MTg5OTg0Nzh9.k7YNDh8FMQXq-ezUIO1wPpzX64nPAJiv5DqWnQCvk_Y'; // Replace with your actual authorization token

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: 'london bridge',
          category: 'landingpage'
        }),
       // timeout: 60000, // 60 seconds timeout (adjust as needed)
      };

      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData(data); // Set the API response data to state
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Integration Example</h1>
      {apiData && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExamplePage;
