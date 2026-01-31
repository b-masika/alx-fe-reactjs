import axios from 'axios';

const GITHUB_BASE =  'https://api.github.com';

export const fetchUserData = async (username) => {
    const response = await axios.get(`${GITHUB_BASE}/users/${username}`);
    return response.data;
}

export const searchUsers = async ({query, location, minRepos, page = 1}) => {
    let q = query ? `${query} in:login` : "";
    if (location) q += ` location:${location}`;
    if (minRepos) q += ` repos:>=${minRepos}`;
         
    const response = await axios.get(`${GITHUB_BASE}/search/users?q=${q}&page=${page}`);
    return response.data.items;
};