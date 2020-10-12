import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <div><h1>{props.article.title}</h1></div>
      <div><address>{props.article.author}
      <br/>
      <a href = "mailto: {props.article.authorEmail}">{props.article.authorEmail}</a></address></div>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
