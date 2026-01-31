import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
});

export const fetchUserData = async (username) => {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
}

export const searchUsers = async ({query, location, minRepos, page = 1}) => {
    let searchQuery = query || "users";

    if (location) {
        searchQuery += ` location:${location}`;
    }

    if (minRepos) {
        searchQuery += ` repos:>=${minRepos}`;
    }
    const response = await githubApi.get('/search/users', {
        params: {
            q: searchQuery,
            page,
            per_page: 10,
        },
    });
    return response.data.items;
};