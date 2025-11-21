import axios from "axios";

// Existing single-user fetch
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search for Task 2
export const searchUsers = async (username, location = "", minRepos = "") => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const searchResponse = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=10`);
    const users = searchResponse.data.items;

    // Fetch full details for display
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const res = await axios.get(`https://api.github.com/users/${user.login}`);
        return res.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error(error);
    return [];
  }
};
