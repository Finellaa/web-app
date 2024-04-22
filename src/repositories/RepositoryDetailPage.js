// RepositoryDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RepositoryDetailPage() {
  // Get repository ID from URL parameters
  const { id } = useParams();

  // State variables
  const [repository, setRepository] = useState(null);

  // Fetch repository details from GitHub API
  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${id}`);
        setRepository(response.data);
      } catch (error) {
        console.error('Error fetching repository:', error);
      }
    };
    fetchRepository();
  }, [id]);

  return (
    <div>
      {repository ? (
        <div>
          <h1>{repository.name}</h1>
          <p>Description: {repository.description}</p>
          <p>Language: {repository.language}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RepositoryDetailPage;
