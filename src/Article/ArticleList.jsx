import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleListItem from "../ArticleListItem/ArticleListItem"
import styles from "./ArticleList.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleList = (props) => {
  return (
    <div className={styles.flexbox}>
      <div className = {styles.boldred}><b>{props.article.title}</b></div>
      <br/>
      <div><ArticleTextToggleButton article={props.article} /></div>
    </div>
  );
};

export default ArticleList;
