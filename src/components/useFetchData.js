import React, { useState, useEffect } from "react";
import { userData } from "./user_mock_data";

export default function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        // Below would be the code to call the URL using Axios
        //   const resp = await axios.get(url);
        //   const data = await resp?.data;

        setApiData(userData);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, error };
}
