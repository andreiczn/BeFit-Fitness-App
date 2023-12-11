export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com',
    params: {limit: 100},
    headers: {
        'X-RapidAPI-Key': 'ae8d1ef215msh650d987059c756ep18da8cjsn24d073a1f387',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': 'ae8d1ef215msh650d987059c756ep18da8cjsn24d073a1f387',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);

        // Check if the response status is okay 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse response JSON
        const data = await response.json();
        console.log('Data:', data);

        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
        // Rethrow the error so the caller can handle it if needed
        throw error;
    }
};
