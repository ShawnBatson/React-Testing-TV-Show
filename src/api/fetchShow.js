import React from "react";
import axios from "axios";

//literally just returning the axios.get. No other function typing it this way other than making it an asynch call
const fetchShow = () => {
  return axios.get(
    "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
  );
};

export default fetchShow;
