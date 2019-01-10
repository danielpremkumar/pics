import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID e90fb521f77e1c1bab2c15dcf68f2d26540754b4aff9dc22814de53667d597af"
  }
});
