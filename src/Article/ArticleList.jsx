import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleListItem from "../ArticleListItem/ArticleListItem"
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  return (
    <li>
      <div className = {styles.boldred}><b>{props.article.title}</b></div>
      <br/>
    </li>
  );
};

export default ArticleList;
