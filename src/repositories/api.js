// api.js

// Function to fetch repositories from GitHub API
export const getRepositories = async () => {
    try {
      // Make API request to fetch repositories
      const response = await fetch('https://api.github.com/Finellaa/repos', {
        headers: {
          Authorization: `Bearer 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`,
        },
      });
  
      // Check if response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
  
      // Parse response JSON and return repositories
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error; 
    }
  };
  