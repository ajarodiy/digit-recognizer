export const predictDigit = async (imageBlob) => {
    try {
      const formData = new FormData();
      formData.append('file', imageBlob);
  
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error predicting digit:', error);
      return { error: error instanceof Error ? error.message : 'Unknown error occurred' };
    }
  };
  