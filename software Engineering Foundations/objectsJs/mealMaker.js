// A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!

//1.- Create an object call menu, add two properties with privacy, name meal as string '', and price as int 0

const menu = {
    _meal: '',
    _price: 0,
    //2.-add setter to reassing properties to meal and price.
    //Be sure that meal is string and price is number
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    },
    //4.-add getters to check that meals & price have property set, and return the values if true with a message.
    get todaysSpecial(){
        if(this._meal !== '' && this._price !== 0){
            return `Today's Special is ${this._meal} for \$${this._price}`;
        } else {
            return `Meal or price was not set correctly`;
        }
    }
}

//3.- verify the code, by setting value to properties using setters. and log it
menu.meal = 'Pizza';
menu.price = 15;

console.log(menu);

//5.- Check the getter method by logging the call.
console.log(menu.todaysSpecial);