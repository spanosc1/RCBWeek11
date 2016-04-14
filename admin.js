var Menu = require('./menu.js');
var prompt = require('prompt');
var fs = require('fs');

var storeMenu = new Menu();

prompt.start();
prompt.get(['name', 'price', 'category'], function(err, result) {
	storeMenu.addItem(result.name, result.price, result.category);
	console.log("New item.");
	console.log('Item Name: ' + result.name);
	console.log('Item Price: ' + result.price);
	console.log('Item Category: ' + result.category);
	console.log("Items? ", storeMenu.items);
	fs.appendFile('menu.txt', JSON.stringify(storeMenu.items) + "\r\n", function(err) {
		if(err)
		{
			throw err;
		}
		else
		{
			console.log("Item added to menu");
		}
	});
});