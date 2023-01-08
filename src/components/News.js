import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <p> this is news section with news item below.</p>

          <div className="row my-3">
            <div className="col-md-4">
              <NewsItem
                title="News title"
                description="this is description for the news segment."
                imageUrl="..."
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="News title"
                description="this is description for the news segment."
                imageUrl="..."
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="News title"
                description="this is description for the news segment."
                imageUrl="..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
