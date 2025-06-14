
// this function fetches car details from the RRA API based on chassis number and usage
// File: frontend/src/components/utils/api.js
export const fetchCarFromRRA = async (chassisNumber, usage) => {
    console.log(
      "Sending to API:",
      JSON.stringify({ vin: chassisNumber, usage })
    );

    try {
      const response = await fetch("https://rra.e-nsure.com/vin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vin: chassisNumber, usage }),
      });
      if (!response.ok) throw new Error("Failed to fetch car data");

      const data = await response.json();
      // If the API returns an array, use data[0], else use data
      return Array.isArray(data) ? data[0] : data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };