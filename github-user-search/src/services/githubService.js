import axios from 'axios';

const SEARCH_API =  'https://api.github.com/search/users?q';

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
}

export const searchUsers = async ({query, location, minRepos, page = 1}) => {
    let q = query ? `${query} in:login` : "";
    if (location) q += ` location:${location}`;
    if (minRepos) q += ` repos:>=${minRepos}`;
         
    const response = await axios.get(`${SEARCH_API}=${q}&page=${page}`);
    return response.data.items;
};