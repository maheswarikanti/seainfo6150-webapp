import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "../Article/ArticleList";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {

  let displayContent;
  let arts = props.article;

  if (arts.length) {
    displayContent = (
      <div  className={styles.wrapper}>
        {arts.map((art) => (
        <Switch>
          <Route>
            <div className ={styles.box}>
             <ArticleList article={art} />
              <b/>
            </div>
          </Route>
        </Switch>
        ))}
      </div>
    ); 
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};
  
  export default ArticleListItem;