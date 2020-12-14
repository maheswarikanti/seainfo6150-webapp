import React, { useState } from "react";
import {  makeStyles } from "@material-ui/core";
import styles from "./ArticleTextToggleButton.module.css";



const useStyles = makeStyles((theme) => ({
    hidden: {
      display: "-webkit-box",
      WebkitLineClamp: 4,
      overflow: "hidden",
      WebkitBoxOrient: "vertical"
    }
  }));


const Button =  styles.button;
  
const ArticleTextToggleButton = (props) => {
    let btn = styles.button;
    const classes = useStyles();
    const [isHidden, setIsHidden] = useState(false);

    function showdata() {
        if ( isHidden ) {
        return <div><div className={styles.textBold}>{props.article.displayDate}</div>
        <br/>
        <div>{props.article.shortText}</div>
        <br/></div>
        }
      }

  return (
    <section>
        <div>
          <div>{showdata()}</div>
          <div className={styles.center}>
            <Button className={styles.button}  onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>  
      <br/>
    </section>
  );
};

export default ArticleTextToggleButton;