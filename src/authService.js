import axios from "axios";
const API_URL = "FUll_API_URL"; 

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
    }
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
    throw error;
  }
};
