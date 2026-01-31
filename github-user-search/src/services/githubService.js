import axios from 'axios';

const API_URL =  'https://api.github.com/search/users?q';

export const fetchUserData = async (username) => {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
}

export const searchUsers = async ({query, location, minRepos, page = 1}) => {
    let q = query ? `${query} in:login` : "";
    if (location) q += ` location:${location}`;
    if (minRepos) q += ` repos:>=${minRepos}`;
         
    const response = await axios.get(`${GITHUB_BASE}/search/users?q=${q}&page=${page}`);
    return response.data.items;
};