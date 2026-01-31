import { useState } from "react";
import { fetchUserData } from "../services/githubService.js";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetchUserData(username);
      setUser(response);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="Github username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 flex-1"
            />
            <button className="bg-black text-white px-4 rounded">
                Search
            </button>
        </form>

        {loading && <p className="mb-4">Loading...</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {user && (
            <div className="border p-4 rounded">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-20 h-20 rounded-full" />
                <h2 className="font-bold">{user.login}</h2>
                <p>Public Repos: {user.public_repos}</p>
                <a href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
                >
                    View Profile
                </a>
            </div>
        )}
    </div>
  );
};

export default Search;