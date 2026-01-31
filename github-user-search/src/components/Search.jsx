import { useState } from "react";
import { searchUsers } from "../services/githubService.js";

const Search = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers({
        query, 
        location, 
        minRepos, 
        page: 1});

      setUsers(data.items);
    } catch (err) {
      setError("No users found");
    } finally {
      setLoading(false);
    }
};

    return (
        <div>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Search keyword (e.g. frontend)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 rounded"
                />

                <input type="text"
                    placeholder="Location (e.g. Nairobi)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <input type="number"
                    placeholder="Min repos"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="border p-2 rounded"
                />

                <button type="submit" 
                className="bg-black text-white rounded px-4 py-2">
                    Search
                </button>
            </form>

            {loading && <p className="mb-4">Loading...</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            
            {users?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="border p-4 rounded flex flex-col items-center gap-4">
                            <img
                                src={user.avatar_url} 
                                alt={`${user.login}'s avatar`} 
                                className="w-16 h-16 rounded-full" 
                            />
                            <h3 className="font-bold">{user.login}</h3>
                            <a 
                                href={user.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 underline"
                            >
                            View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;