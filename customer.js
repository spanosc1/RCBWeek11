var Menu = require('./menu.js');
var prompt = require('prompt');
var fs = require('fs');

var storeMenu = new Menu();

prompt.start();
prompt.get(['item', 'quantity'], function(err, result) {
	console.log("You got the following item(s)");
	console.log("Item Name: " + result.item);
	console.log("Item Quantity: " + result.quantity);
	fs.readFile('menu.txt', 'utf8', function(err, data) {
    if (err) {
        throw err;
    }
    var items = data.split('\r\n');

    for(i=0;i<items.length;i++)
    {
    	var itemJSON = JSON.parse(items[i].replace(/[\[\]']+/g,''));
    	if(result.item == itemJSON.name)
    	{
    		console.log("Grand Total: $" + parseFloat(itemJSON.price) * parseInt(result.quantity));
    	}
    }
  });
});