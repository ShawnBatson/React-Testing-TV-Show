import React from "react";
import axios from "axios";

const fetchShow = () => {
  return axios.get(
    "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
  );
};

export default fetchShow;
