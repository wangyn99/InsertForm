
  Meteor.subscribe("contacts");
  Template.workspace.events({
	  'click #logout': function(){
      Meteor.logout();
    }
});
  
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
      Contacts.remove({_id:t.data._id});
    //  Meteor.call('delContact',t.data._id);
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





