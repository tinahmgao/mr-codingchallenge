//The root centralized factory object
let partFactories = {};

partFactories['screen'] = class ScreenFactory{
  constructor(props){
    this.screenSize = props.screenSize
    this.screenColor = props.screenColor
  }
}

partFactories['color'] = class InterfaceFactory{
  constructor(props){
    this.color = props.color
  }
}

partFactories['price'] = class PricingFactory{
  constructor(props){
    this.price = props.price
    this.manager = props.manager
  }
}

//new phone factory based on the partFactory
class PhonePartFactory {
  constructor(type, props){
    return new partFactories[type](props)
  }
}

//specific examples
let newPhone = {};
let newPhoneProps = {
  screenSize: 6.5,
  color:"red",
  price:1000
};

//create new phone based on client input props
newPhone.screen = new PhonePartFactory('screen', newPhoneProps)
newPhone.color = new PhonePartFactory('color', newPhoneProps)
newPhone.price = new PhonePartFactory('price', newPhoneProps)

console.log(newPhone.color.color)
