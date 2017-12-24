var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 15 },
    americano: { beanRequirement: 5, price: 10 },
    doubleShot: { beanRequirement: 15, price: 20 },
    frenchPress: { beanRequirement: 12, price: 17 }
  },

  makeDrink: function (drinkType) {
      console.log(drinkType);
    
      if(this.drinkRequirements[drinkType]){
        if((this.beans - this.drinkRequirements[drinkType].beanRequirement) < 0){
          alert("Sorry, we're all out of beans!");
          return false;
        }
      this.beans -= this.drinkRequirements[drinkType].beanRequirement; 
      return true;
      }
      else{
        alert("Sorry, we don't make " + drinkType); 
        return false;  
      }   
      },
  
  money: 100,
  
  beanPrice: 3,

  buySupplies: function (numOfBeans) {
    var totalPrice = numOfBeans * this.beanPrice;
    if((this.money - totalPrice) > 0){
      this.money -= totalPrice;
      this.beans += numOfBeans;
      console.log("new balance after this purchase: " + this.money + " and beans balance is: " + this.beans);
      return true;
   }
   else{
     console.log("no dinero! balance: " + this.money);
     return false;
   }
  },
  buyDrink: function (drinkType){
    var result = this.makeDrink(drinkType);
    if(result){
      this.money += this.drinkRequirements[drinkType].price;
      return console.log("enjoy!");
    }
  
  }
  }

/*coffeeShop.makeDrink("latte");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("americano");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("filtered");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("doubleShot");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("frenchPress");
coffeeShop.makeDrink("choclate");*/

/*coffeeShop.buySupplies(20);
console.log(coffeeShop.money, coffeeShop.beans);*/
coffeeShop.buyDrink("americano");
console.log(coffeeShop.money, coffeeShop.beans);
coffeeShop.buyDrink("doubleShot");
console.log(coffeeShop.money, coffeeShop.beans);
coffeeShop.buyDrink("doubleShot");
console.log(coffeeShop.money, coffeeShop.beans);
coffeeShop.buyDrink("choco");
console.log(coffeeShop.money, coffeeShop.beans);
coffeeShop.buySupplies(20);
