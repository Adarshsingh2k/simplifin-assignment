import { useState, useEffect } from "react";

const useFetchData = (url, itemsPerPage) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const offset = (currentPage - 1) * itemsPerPage;
      try {
        const response = await fetch(
          `${url}&limit=${itemsPerPage}&offset=${offset}`
        );
        const jsonResponse = await response.json();
        const transformedData = jsonResponse.data.map((item) => ({
          url: item.images.original.url,
          title: item.title,
        }));
        console.log(jsonResponse);
        setData(transformedData);
        setTotalPages(
          Math.ceil(jsonResponse?.pagination?.total_count / itemsPerPage)
        ); // Update total pages

        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, currentPage, itemsPerPage]); // Dependency array includes the URL so the effect runs when it changes

  return { data, isLoading, error, currentPage, setCurrentPage, totalPages };
};

export default useFetchData;
