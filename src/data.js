// THE DATA OBJECT
let data = {
  
  about: {
    restaurant_name: 'House of India',
    restaurant_mission: 'Namaste, to all. Service to all.',
    restaurant_slogan: 'Welcome to House of India, Home of fine Indian Cuisine',
    restaurant_address: '123 Orange Soda Lane, Los Angeles, CA',
    restaurant_email: 'House_of_India@gmail.com',
    restaurant_phone: '555-555-1234'
  },

  contact: {
    contact_info: 'We are located at 123 Orange Soda Lane, Los Angeles, CA',
    contact_info_next: 'Next to the Bently showroom',
    contact_call: 'Our telephone number is 555-555-1234',
    contact_what_order: 'What would you like to order today?'
  },

  confirmed: {
    con_order: 'Your order has been confirmed!',
    con_wait: 'Please allow 20-45 minutes for delivery'
  },
 
  menu: {
    burgers: [{name:'Good Burger', price: 1.99}, {name:'Gooder Burger', price: 2.99}, {name:'Goodest Burger', price: 3.99}],
    drinks: [{name:'Good Shake', price: 1.99}, {name:'Gooder Shake', price: 2.99}, {name:'Goodest Shake', price: 3.99}, {name: 'Orange Soda', price: 3.99}],
    fries: [{name:'Good Fries', price: 1.99}, {name:'Gooder Fries', price: 2.99}, {name:'Goodest Fries', price: 3.99}],
    alcohol: [{name: 'Jack & Coke', price: 5.95}, {name: 'Vodka & Tonic', price: 6.49}, {name: 'Sambuka', price: 8.25}],
    wine: [{name: 'California Red', price: 8.25}, {name: 'Marthas White', price: 9.25}, {name: 'Nice Red', price: 9.75}]
  },
    images: ['http://image.naldzgraphics.net/2014/08/6-fork-restaurant-logo.jpg', 'http://vignette2.wikia.nocookie.net/nickelodeon/images/6/6c/GoodBurger.png/revision/latest?cb=20130808192730', 'https://i.ytimg.com/vi/rVTw5LK1zsQ/hqdefault.jpg','http://i.giphy.com/Fo4qfhHPPAW0E.gif']

};


data.getMenu = function() {
  return this.menu;
};

data.getAbout = function() {
  return this.about;
};

data.getImages = function() {
  return this.images;
};

data.getContact = function() {
  return this.contact;
};

data.getConfirmed = function() {
  return this.confirmed
}

export default data;
