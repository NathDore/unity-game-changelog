import axios from "axios";

export type CommitDTO = {
    message: string;
    author: string;
    date: string;
}

const API_URL = import.meta.env.VITE_GITHUB_PA_SERV_API;

export const getCommits = async (): Promise<CommitDTO[]> => {
    try {
        const response = await axios.get<CommitDTO[]>(API_URL);

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }

        return response.data;
    } catch (error) {
        console.error("Error while getting commits", error);
        throw error;
    }
}