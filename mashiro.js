function Mashiro(){
  this.aboutMe = {};
  
  this.addCategory = function(title){
    this.aboutMe.title = new Category();
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


