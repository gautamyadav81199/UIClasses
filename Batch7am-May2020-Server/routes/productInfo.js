var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    "pdata": [
      {
        "name": "LAPTOP",
        "price": 42000,
        "oldPrice": 45000,
        "manu": "Samsung",
        "imagePath": "https://static.toiimg.com/photo/62202302/Samsung-NP900X3N-K03US-Laptop-Core-i7-7th-Gen8-GB256-GB-SSDWindows-10.jpg"
      },
      {
        "name": "Mobile",
        "price": 23000,
        "manu": "Moto",
        "imagePath": "https://www.bajajfinserv.in/5_Best_Redmi_Phones_Under_Rs15000_img1_redmi-cluster790x345-min.jpg"
      },
      {
        "name": "Pendrive",
        "price": 1300,
        "manu": "Toshiba",
        "imagePath": "https://images-na.ssl-images-amazon.com/images/I/41g8qWL2z-L._SL1000_.jpg"
      },
      {
        "name": "LAPTOP",
        "price": 45000,
        "manu": "Lenova",
        "imagePath": "https://static.toiimg.com/photo/62202302/Samsung-NP900X3N-K03US-Laptop-Core-i7-7th-Gen8-GB256-GB-SSDWindows-10.jpg"
      },
      {
        "name": "Book",
        "price": 120,
        "manu": "Samsung",
        "imagePath": "https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612"
      }
    ]
  };

  data = JSON.stringify(data);
  // data = "parseProductData(" + data + ")"; // Making JSONP
  setTimeout(function(){
    res.send(data);
  }, 5000)
  
});

module.exports = router;
