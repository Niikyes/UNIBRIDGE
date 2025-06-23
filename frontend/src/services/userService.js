import axios from "axios";

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get("http://localhost:3005/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
};
