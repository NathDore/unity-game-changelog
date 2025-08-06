import { useEffect, useState } from "react"
import { getCommits, type CommitDTO } from "../API/GitApi"

const CommitHistory = () => {
    const [commits, setCommits] = useState<CommitDTO[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCommits = async () => {

            try {
                const recentCommits = await getCommits();
                setCommits(recentCommits);
            } catch (error) {
                console.error("Error fetching commits:", error);
                setError("Unable to fetch commits");
            }
        }

        fetchCommits();
    }, []);

    return (
        <div>
            <h1>Commits: </h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {commits.map((commit, index) => (
                    <li key={index}>
                        <strong>{commit.author}</strong>: {commit.message} <em>({commit.date})</em>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CommitHistory