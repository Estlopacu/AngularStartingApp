// Home Controller
export default class HomeController{
  constructor(TestService){
    this.test = TestService.sayHello().data.hi;
  }
};
