import React from "react";
import { repoProp } from "../consts/interfaces";

interface repoArrayProp {
    repos:Array<repoProp>
}

const TableRow = ({ repos }: repoArrayProp) => {
    return(
        <ul className="repo_list">
            {repos.map(repo => {
                return (
                    <li key={repo.id} className="repo_item">
                        <div>
                        <img className="avatar_image" src={repo.owner.avatar_url} alt=""/>
                        </div>
                        <div>
                        <a href={repo.html_url} target="_blank">
                            {repo.name}
                        </a>
                        <p className="description_block">{repo.description}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}
export default TableRow
