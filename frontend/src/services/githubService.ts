// src/services/githubService.ts
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const fetchRepos = async (username: string) => {
    try {
        const response = await axios.get(`${BASE_URL}${username}/repos`);
        return response.data.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            owner: repo.owner.login,
            stars: repo.stargazers_count
        }));
    } catch (error) {
        console.error('Error fetching repositories: ', error);
        return [];
    }
};
