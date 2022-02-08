import React from "react";
import { buttonProps } from "../consts/interfaces";

export const CustomButton = ({limit, fetchRepos} :buttonProps) => {
    if (limit === 0)  return <div className="show_more_button_disabled">SHOW MORE (5 results)</div>
    if (limit >= 25) return <div className="show_more_button_disabled">Количество запросов ограничено. Попробуйте позже!</div>;
    return <div className='show_more_button' onClick={()=>fetchRepos(true)}>SHOW MORE</div>;
};
