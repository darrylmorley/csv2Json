const csv=require("csvtojson");
const fs = require('fs');

const csvFilePath='./temp/Sales2017.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    result = JSON.stringify(jsonObj)
    fs.writeFileSync('./temp/converted.json', result)   
})