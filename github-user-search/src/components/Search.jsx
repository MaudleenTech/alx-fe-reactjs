import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUserData(username, location, minRepos);
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Search failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt="User Avatar"
              className="w-16 h-16 rounded"
            />
            <div>
              <h3 className="font-bold">{user.name || user.login}</h3>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
