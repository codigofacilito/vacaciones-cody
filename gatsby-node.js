const path = require("path");
const fs = require("fs");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, "dist"), { recursive: true });
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    );
  }
};

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "dist"));
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  );
};
