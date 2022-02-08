import React, {useEffect, useState} from "react";
import ApiCall from "../api";
import { repoProp } from "../consts/interfaces";
import TableRow from "./tableRow";
import {CustomButton} from "./customButton";

const ResultTable = ( ) =>{
    const [inputValue, setInputValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(2);
    const [reposList, setReposList] = useState<Array<repoProp>>([]);

    const fetchRepos = async (nextPage?: boolean | undefined) => {
        setIsLoading(true)
        let searchString = ''
        nextPage ? searchString = `${inputValue}+&per_page=5&page=${page}` : searchString = `${inputValue}+&per_page=5`
        const response = await ApiCall.get(searchString, setError)
        if(response){
            console.log(response)
            setIsLoading(false)
            if(nextPage){
                let newArray = response.items
                const resultArray = newArray.concat(reposList)
                setReposList(resultArray)
                setPage(prevState => prevState+1)
            }
            else{
                setReposList(response.items)
            }
        }
    }

    useEffect(() => {
        if(inputValue){
            setTimeout(()=>{
                fetchRepos();
            },500)
        }else{
            setReposList([])
        }
    }, [inputValue]);

    const setSearchValue = (event: any) => {
        setInputValue(event.target.value)
    }

    return(
        <div className="root_box">
            {isLoading && <div className="loading">Loading...</div>}
            <form>
                <input
                    type="text"
                    name="query"
                    className="github_search_input"
                    placeholder="Search Github Repositories"
                    onChange={setSearchValue}
                />
            </form>
            <CustomButton limit={reposList.length} fetchRepos={fetchRepos}/>
            {error && (
                <div style={{marginTop: '20px'}}>
                    Ошибка сети. Попробуйте позже!
                </div>
            )}
            <TableRow repos={reposList}/>
        </div>
    )
}

export default ResultTable
