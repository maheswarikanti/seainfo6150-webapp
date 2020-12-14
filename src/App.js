import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./Article/ArticleList.jsx";
import { isEmpty } from "lodash";
import styles from "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/articlelist"><ArticleList articles={Object.values(fetchedData)} /></Route>
        {/* <Route>
          <ArticleListItem article={Object.values(fetchedData)} />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
