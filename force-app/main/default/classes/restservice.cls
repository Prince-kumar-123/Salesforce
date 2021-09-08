@RestResource(urlMapping='/helloWorld/*')
global class restservice {

  @HttpGetglobal static String helloWorld(){
    return 'HelloWorld';
  }

}