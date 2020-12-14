import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
  let displayContent;
  
  if (props.articles.length) {
      displayContent = (
      <ul>
      {props.articles.map((article) => (
        <ArticleListItem article={article} key={article.slug} />
      ))}
      </ul>
      // <div>
      //   {arts.map((art) => (
      //   <Switch>
      //     <Route>
         
      //       <article>
      //         <h2><li>{art.title}</li></h2>
      //         <time dateTime={props.article.timeStamp}>
      //           {art.displayDate}
      //         </time>
      //         <p>{art.shortText}</p>
      //       </article>
      //       {/* <div>
      //       {art.title}
      //         <b/>
      //       </div> */}
      //     </Route>
      //   </Switch>
      //   ))}
      // </div>
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
  
  export default ArticleList;