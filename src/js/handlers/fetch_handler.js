const FetchHandler = {
    fetchData: async (requestAddress, headers) => {
        try {
            const response = await fetch(requestAddress, {
                method: "GET",
                headers,
            });

            return await response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    }
}

export default FetchHandler;