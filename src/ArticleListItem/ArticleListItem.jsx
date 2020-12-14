import React from "react";
import { Switch, Route } from "react-router-dom";

const ArticleListItem = (props) => {

  let displayContent;
  let arts = props.article;

  if (arts.length) {
    displayContent = (
      <div>
        {arts.map((art) => (
        <Switch>
          <Route>
         
            <article>
              <h2><li>{art.title}</li></h2>
              <time dateTime={props.article.timeStamp}>
                {art.displayDate}
              </time>
              <p>{art.shortText}</p>
            </article>
            {/* <div>
            {art.title}
              <b/>
            </div> */}
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