import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import ArticleTextToggleButton from "./ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      console.log(responseJson)
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  console.log(isEmpty(fetchedData));
  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route>
          <ArticleListItem article={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
