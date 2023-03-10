


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mabu.css';

const API_URL = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';

function Project() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setRepos(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="project-container">
      <h1>Most Starred Github Repos</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Repository Name</th>
            <th>Description</th>
            <th>Stars</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {repos.map(repo => (
            <React.Fragment key={repo.id}>
              <tr>
                <td>
                  <img src={repo.owner.avatar_url} alt="avatar" width="80" height="80" />
                </td>
                <td className="repo-name">{repo.name}</td>
                <td>
                  <div className="info-box">
                    <div className="info-row">
                      <div className="info-item">
                        <div className="star-box">{repo.stargazers_count}</div>
                        <p>No. of Stars</p>
                      </div>
                      <div className="info-item">
                        <div className="issue-box">{repo.open_issues_count}</div>
                        <p>No. of Issues</p>
                      </div>
                    </div>
                    <p className="repo-description">{repo.description}</p>
                  </div>
                </td>
                <td className="center">{repo.stargazers_count}</td>
                <td className="center">{repo.open_issues_count}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
       

      </table>
    </div>
  );
}

export default Project;

