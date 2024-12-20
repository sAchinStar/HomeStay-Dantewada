import axios from "axios";

const API_BASE_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

export const fetchHomestays = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const submitBooking = async (bookingDetails) => {
  const response = await axios.post(`${API_BASE_URL}`, bookingDetails);
  return response.data;
};
