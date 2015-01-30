function Mashiro(){
  
  this.init =function(){
    var name = this.addCategory("namae");
    name.addDetails("Watashi wa Mashiro desu");
    
    var age = this.addCategory("sai");
    age.addDetails("hatachi desu");
    age.addDetails("tanjobi wa ....");
  }
  this.aboutMe = {};
  
  this.addCategory = function(title){
    this.aboutMe.title = new Category();
    return this.aboutMe.title;
  }
  this.searchKey = function(key){
    
  };
}


function Category(){
  this.details = [];
  this.addDetails = function(string){
    this.details.push(string);
  };
  this.startDetail = function(string){
    return this.details[0];
  };
  
};


