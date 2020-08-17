var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	 	var data = [
				{
			    "name": "Laptop",
				"price": "$350",
				"manu": "Hp",
				"discount": "31%",
				"sDetails": "Aprion Electronics",
				"imgUrl": "images/1.jpg"
			},
			{
				"name":"Mobile",
				"price": "$230",
				"manu": "Redmi",
				"discount": "12%",
				"sDetails": "Bharat Electronics",
				"imgUrl": "images/2.jpg"
			},
			{
				"name":"TV",
				"price": "$560",
				"manu": "Sony",
				"discount": "5%",
				"sDetails": "shagun Electronics",
				"imgUrl": "images/3.jpg"
			},
			{
				"name": "Bean Bag",
				"price": "$100",
				"manu": "Shwell",
				"discount": "2%",
				"sDetails": "Aprion Services",
				"imgUrl": "images/4.jpg"
			},
			{
				"name": "Laptop",
				"price": "$440",
				"manu": "Dell",
				"discount": "22%",
				"sDetails": "Harika Electronics",
				"imgUrl": "images/5.jpg"
			},
			{
				"name": "Mobile",
				"price": "$229",
				"manu": "Nokia",
				"discount": "14%",
				"sDetails": "Vendy Electronics",
				"imgUrl": "images/6.jpg"
			},
			{
				"name": "Tv",
				"price": "$890",
				"manu": "Lg",
				"discount": "33%",
				"sDetails": "Sindhu Electronics",
				"imgUrl": "images/7.jpg"
			},
			{
				"name": "Ear Phones",
				"price": "$230",
				"manu": "Sony",
				"discount": "31%",
				"sDetails": "Mendi Electronics",
				"imgUrl": "images/8.jpg"
			},
			{
				"name": "Pendrive",
				"price": "$150",
				"manu": "Kingston",
				"discount": "1.5%",
				"sDetails": "Chillax Electronics",
				"imgUrl": "images/9.jpg"
			},
			{
				"name": "Power Bank",
				"price": "$220",
				"manu": "MI",
				"discount": "11%",
				"sDetails": "Orient Electronics",
				"imgUrl": "images/10.jpg"
			},
			{
				"name": "Bluetooth Speakers",
				"price": "$450",
				"manu": "Boat",
				"discount": "17%",
				"sDetails": "Kill Bill Electronics",
				"imgUrl": "images/11.jpg"
			},
			{
				"name": "Usb Cable",
				"price": "$110",
				"manu": "Ambrane",
				"discount": "2%",
				"sDetails": "Gen Electronics",
				"imgUrl": "images/12.jpg"
			}
		];
	

 	data = JSON.stringify(data);

 	//data = "parseProdData(" + data + ")";

 	
 	res.send(data);
 	
 	
});

module.exports = router;
