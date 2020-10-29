import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import styles from "./ArticleTextToggleButton.module.css";


const useStyles = makeStyles((theme) => ({
    hidden: {
      display: "-webkit-box",
      WebkitLineClamp: 4,
      overflow: "hidden",
      WebkitBoxOrient: "vertical"
    }
  }));


  
const ArticleTextToggleButton = (props) => {
    let btn = styles.button;
    const classes = useStyles();
    const [isHidden, setIsHidden] = useState(true);

    function showdata() {
        if ( isHidden ) {
        return <div><div>{props.article.displayDate}</div>
        <br/>
        <div>{props.article.shortText}</div>
        <br/></div>
        }
      }

  return (
    <section>
             <div>{showdata()}
            </div>
            <div className={styles.button}  onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "Show Less" : "Show More"}
      </div>
      <br/>
    </section>
  );
};

export default ArticleTextToggleButton;