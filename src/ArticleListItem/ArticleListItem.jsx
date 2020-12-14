import React from "react";
import { Switch, Route } from "react-router-dom";

const ArticleListItem = (props) => {

  let displayContent;
  let art = props.article;
  displayContent = (
            <article>
              <h2><li>{art.title}</li></h2>
              <time dateTime={props.article.timeStamp}>
                {art.displayDate}
              </time>
              <p>{art.shortText}</p>
            </article>);
            {/* <div>
            {art.title}
              <b/>
            </div> */}

  return (
    <div>
      {displayContent}
    </div>
  );
};
  
  export default ArticleListItem;