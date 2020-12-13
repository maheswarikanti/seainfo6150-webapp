import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "../Article/ArticleList";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import HTMLText from "../HTMLText/HTMLText";  
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {

  let displayContent;
  let art = props.article;

  if (art.length) {
    displayContent = (
      <ul >
        {art.map((art) => (
        <Switch>
          <Route>
            <div className ={styles.box}>
            <ArticleList article={art} />
            <ArticleTextToggleButton article={art} />
              <br/>
            </div>
            <b/>
          </Route>
        </Switch>
        ))}
      </ul>
    ); 
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      {displayContent}
    </section>
  );
};
  
  export default ArticleListItem;