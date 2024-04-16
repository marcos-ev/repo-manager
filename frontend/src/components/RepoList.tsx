import React from 'react';

interface Repo {
  id: number;
  name: string;
  owner: string;
  stars: number;
}

interface RepoListProps {
  repos: Repo[];
  onExport: () => void;
}

const RepoList: React.FC<RepoListProps> = ({ repos, onExport }) => {
  return (
    <div>
      <button onClick={onExport}>Export to CSV</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.owner}</td>
              <td>{repo.stars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepoList;
