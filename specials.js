const currentDate = new Date();
console.log(currentDate);

let currentDay = currentDate.getDay();
/* counts from 0 - 6 as for Sunday - Saturday */
console.log(currentDay);

if( currentDay == 0 ){
  console.log("Sunday");
  document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
  special_name.innerHTML = "$9 Deluxe Burger & Fries";
  special_image.src = "images/sunday.jpg";
  special_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side."
}
else if ( currentDay == 1 ){
  console.log("Monday");
  document.getElementById("special_name").innerHTML = "$12 Chicken Penne Alfredo";
  special_name.innerHTML = "$12 Chicken Penne Alfredo";
  special_image.src = "images/monday.jpg";
  special_description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included."
}
else if ( currentDay == 2 ){
  console.log("Tuesday");
  document.getElementById("special_name").innerHTML = "$10 Any Small Pizza";
  special_name.innerHTML = "$$10 Any Small Pizza";
  special_image.src = "images/tuesday.jpg";
  special_description.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust."
}
else if ( currentDay == 3 ){
  console.log("Wednesday");
  document.getElementById("special_name").innerHTML = "35¢ Chicken Wings";
  special_name.innerHTML = "35¢ Chicken Wings";
  special_image.src = "images/wednesday.jpg";
  special_description.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that."
}
else if ( currentDay == 4 ){
  console.log("Thursday");
  document.getElementById("special_name").innerHTML = "$9 Fish and Chips";
  special_name.innerHTML = "$9 Fish and Chips";
  special_image.src = "images/thursday.jpg";
  special_description.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!"
  
}
else if ( currentDay == 5 ){
  console.log("Friday");
  document.getElementById("special_name").innerHTML = "Half Price Cocktails All Day";
  special_name.innerHTML = "Half Price Cocktails All Day";
  special_image.src = "images/friday.jpg";
  special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price."
}
else if ( currentDay == 6 ){
  console.log("Saturday");
  document.getElementById("special_name").innerHTML = "$10 Jumbo Greek Salad";
  special_name.innerHTML = "$10 Jumbo Greek Salad";
  special_image.src = "images/saturday.jpg";
  special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price."
}

/* Other alternatives to do this */

/*switch(currentDay){
   case 0:
    console.log("Sunday");
    document.getElementById("special_name").innerHTML = "$9 Deluxe Burger & Fries";
    special_name.innerHTML = "$9 Deluxe Burger & Fries";
    special_image.src = "images/sunday.jpg";
    special_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side."
    break;
  case 1:
    console.log("Monday");
    document.getElementById("special_name").innerHTML = "$12 Chicken Penne Alfredo";
    special_name.innerHTML = "$12 Chicken Penne Alfredo";
    special_image.src = "images/monday.jpg";
    special_description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included."
    break;
  case 2:
    console.log("Tuesday");
    document.getElementById("special_name").innerHTML = "$10 Any Small Pizza";
    special_name.innerHTML = "$$10 Any Small Pizza";
    special_image.src = "images/tuesday.jpg";
    special_description.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust."        
    break;
  case 3:
    console.log("Wednesday");
    document.getElementById("special_name").innerHTML = "35¢ Chicken Wings";
    special_name.innerHTML = "35¢ Chicken Wings";
    special_image.src = "images/wednesday.jpg";
    special_description.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that."
    break;
  case 4:
    console.log("Thursday");
    document.getElementById("special_name").innerHTML = "$9 Fish and Chips";
    special_name.innerHTML = "$9 Fish and Chips";
    special_image.src = "images/thursday.jpg";
    special_description.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!"
    break; 
  case 5:    
    console.log("Friday");
    document.getElementById("special_name").innerHTML = "Half Price Cocktails All Day";
    special_name.innerHTML = "Half Price Cocktails All Day";
    special_image.src = "images/friday.jpg";
    special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price."
    break;

  case 6:
    console.log("Saturday");
    document.getElementById("special_name").innerHTML = "$10 Jumbo Greek Salad";
    special_name.innerHTML = "$10 Jumbo Greek Salad";
    special_image.src = "images/saturday.jpg";
    special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price."
    break;    
}*/


/*const currentDay = new Date().getDay();

const specials = {
  0: {
    name: "$9 Deluxe Burger & Fries",
    image: "images/sunday.jpg",
    description: "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side."
  },
  1: {
    name: "$12 Chicken Penne Alfredo",
    image: "images/monday.jpg",
    description: "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included."
  },
  2: {
    name: "$10 Any Small Pizza",
    image: "images/tuesday.jpg",
    description: "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust."
  },
  3: {
    name: "35¢ Chicken Wings",
    image: "images/wednesday.jpg",
    description: "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that."
  },
  4: {
    name: "$9 Fish and Chips",
    image: "images/thursday.jpg",
    description: "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!"
  },
  5: {
    name: "Half Price Cocktails All Day",
    image: "images/friday.jpg",
    description: "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price."
  },
  6: {
    name: "$10 Jumbo Greek Salad",
    image: "images/saturday.jpg",
    description: "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price."
  }
};

const special = specials[currentDay];
if (special) {
  console.log(Object.keys(specials)[currentDay]);
  document.getElementById("special_name").innerHTML = special.name;
  special_image.src = special.image;
  special_description.innerHTML = special.description;
}*/





