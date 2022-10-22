// process.env.NODE_ENV='production'

const { transformSync } = require('@babel/core');
const myPlugin = require('./index.js');
const code = `console.log('product');
if(DEBUG){
    console.log('debug') 
}`
const babelConfig = {
    plugins:[myPlugin]
}
const res = transformSync(code,babelConfig);