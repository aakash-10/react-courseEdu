// productdata.js

export const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:4000/courses');
    const data = await response.json();
    

    return data; // Assuming courses is an array in the server response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

