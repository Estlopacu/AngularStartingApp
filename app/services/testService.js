// Test Service
export default class TestService{
  sayHello(){
    return {
      status: 200,
      data: {
        hi:"Hi All"
      }
    };
  }
};
