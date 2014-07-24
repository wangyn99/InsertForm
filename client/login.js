

Template.login.administrator = function(){
  return(adminUser(Meteor.userId()));
};

function adminUser(userId){
  //console.log("the userId  "+userId);
  var admUser1 = Meteor.users.findOne({username:"admin"});
  var admUser2 = Meteor.users.findOne({username:"alice"});
  var admUser3 = Meteor.users.findOne({username:"bob"});
  var admUser =admUser1 ||admUser2 ||admUser3;
  return (userId&&admUser&&userId===admUser._id);
};

Template.login.creatingAccount = function(){
    return Session.get("creatingAccount");
 };

  Template.login.events({
    'click #loginform': function(e,t){
      Session.set('creatingAccount',false);
    },
    'click #accountform': function(){
      Session.set('creatingAccount',true);
    },
    'click #createaccount': function(e,t){
	Accounts.createUser({
	  username: t.find("#username").value,
	  password:t.find("#password").value,
	  profile:{
	    name: t.find("#name").value
	  }
	});
    },
    'click #login': function(e,t){
      Meteor.loginWithPassword(t.find("#username").value,t.find("#password").value);
    },
     'click #logout': function(){
      Meteor.logout();
    }
  });
  