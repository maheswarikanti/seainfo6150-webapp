import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = (image) => {
  return (
    <div >
        <img className={styles.image} src={image.image._url} alt=""/>
    </div>
  );
};

export default ArticleImage;
