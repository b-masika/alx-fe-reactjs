import { useState } from "react";
import githubApi from "../services/githubApi.js";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);

    try {
      const response = await githubApi.get(`/users/${username}`);
      setUse(data);
      setError(null);
    } catch {
      setError("User not found");
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
            <button className="bg-black text-white px-4">Search</button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {userData && (
            <div className="border p-4 rounded">
                <img src="user.avatar_url" alt="" className="w-20 rounded-full" />
                <h2 className="font-bold">{user.login}</h2>
                <a href={user.html_url} target="blank">View Profile</a>
            </div>
        )}
    </div>
  );
};

export default Search;