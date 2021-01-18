const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running at Port: ${PORT} at ${process.env.NODE_ENV} mode`
  );
});
