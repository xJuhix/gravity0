import React from "react";
import { Helmet } from "react-helmet";
import Heading from "../layout/Heading";

export function AllArticles() {
  return (
    <>
      <Helmet>
        <title>Search</title>
        <meta
          name="description"
          content="WittigNotes Search is where you can browse through all published articles and seacrh them by name."
        />
      </Helmet>
      <div className="search__page">
        <Heading title="Search Articles" />
      </div>
    </>
  );
}

export default AllArticles;
