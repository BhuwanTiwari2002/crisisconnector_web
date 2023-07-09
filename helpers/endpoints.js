const getHotlineData = async (url) => {
    try {
        const response = await fetch('http://localhost:3000/api/' + url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
  }

  export default getHotlineData