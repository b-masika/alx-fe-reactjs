import axios from 'axios';

const SEARCH_API =  'https://api.github.com/search/users?q';

const token = import.meta.env.REACT_APP_GITHUB_TOKEN;

const headers = token ? {
    Authorization: `token ${token}`
} : {};

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`, {headers});
    return response.data;
}

export const searchUsers = async ({query, location, minRepos, page = 1}) => {
    let q = query ? `${query} in:login` : "";
    if (location) q += ` location:${location}`;
    if (minRepos) q += ` repos:>=${minRepos}`;
         
    const response = await axios.get(`${SEARCH_API}=${encodeURIComponent(q)}&page=${page}`, {headers});
    return response.data.items;
};