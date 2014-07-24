Contacts = new Meteor.Collection("contacts",{
  schema:{
    name:{
      type: String,
      label: "Name"
    },
    sex:{
      type: String,
      label:"sex",
      optional:true
    },
    region:{
      type:String,
      label: "Region"
    },
    branch:{
      type: String,
      label: "Branch"
    },
    email:{
      type: String,
      label:"Email",
       optional: true
    },
    telephone:{
      type: String,
      label:"Telephone",
       optional: true
    },
      hospital:{
      type: String,
      label:"hospital",
        optional:true
    },
       department:{
      type: String,
      label:"科室",
         optional: true
    },
     title:{
      type: String,
      label:"职称",
        optional: true
    },
     duty:{
      type: String,
      label:"职务",
        optional: true
    },
     education:{
      type: String,
      label:"学历",
        optional: true
    },
    other:{
      type:String,
      label : "Others",
      max: 1000,
       optional: true
    }
  }
});


if (Meteor.isClient) {
  
  Meteor.subscribe("contacts");
  
  Template.peoplelist.people = function(){
    return Contacts.find();
  };
  Template.person.updating = function(){
    return Session.get("updateform") === this._id;
  };
  Template.person.events({
    'dblclick .person':function(e,t){
      Session.set("updateform",t.data._id);
      //console.log(Session.get("updateform"));
    },
    'click #deleteperson': function(e,t){
      Meteor.call('delContact',t.data._id);
    }
  });
  AutoForm.hooks({
    updateContactBook: {
      endSubmit:function(formId,template){
      //console.log("hook");
      Session.set("updateform",null);
      // console.log(Session.get("updateform"));
      }
    }
  });
  Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish("contacts", function(){
      return Contacts.find();
    });
    
    Meteor.methods({
      delContact: function(docId){
	if(adminUser(this.userId)){
	 // console.log("this test check");
	  Contacts.remove({_id:docId});
	}
      }
    });
    // code to run on server at startup
  });
}

function adminUser(userId){
	//console.log("the userId  "+userId);
	var adminUser = Meteor.users.findOne({username:"admin"});
	return (userId&&adminUser&&userId===adminUser._id);
};


