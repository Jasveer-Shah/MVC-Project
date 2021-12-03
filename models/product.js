const fs = require("fs")
const path = require('path');
// const { isTypedArray } = require("utils/types");

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.image = imageUrl;
        this.description = description;
        this.price = price;
      }
  
      save() {
         const pa = path.join(path.dirname(process.mainModule.filename),
          'data',
          'products.json'
          );
          fs.readFile (pa, (err, fileContent) => {
              console.log(err);
              let products = [];
              if (!err){
                   products = JSON.parse(fileContent)
              }
              products.push(this);
              fs.writeFile(pa, JSON.stringify(products), (err) => {
                  console.log(err)
              });
          });
      }

      static fetchAll(cb) {
        const pa = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json'
        );

           fs.readFile(pa, (err, fileContent) => {
               if (err) {
                   cb([]);
               }else {
                   cb(JSON.parse(fileContent));
                }
           })
         
      }
}

