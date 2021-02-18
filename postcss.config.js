const { plugin } = require("postcss");

const plugins = [require("tailwindcss") , require("autoprefixer")];


console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV = "production"){

  const purgecss = require("@fullhuman/postcss-purgecss")({
    content:["./dist/**/*.html"],
    defaultExtractor:function(content){
      console.log("content",content);
      return content.match(/[A-Za-z0-9-_:/]+/g)||[];
    }
  });
  plugins.push(purgecss);

  const cssnano = require("cssnano")({
    preset:"default"
  });
  plugins.push(cssnano);
}

module.exports = {
  plugins: plugins
  
}
