
  Meteor.subscribe("contacts");
 /*Template.workspace.alerting = function(){
   Session.get("redu_alerting");
};*/
  
  Template.workspace.events({
	  'click #logout': function(){
      Meteor.logout();
    }
});
  
  Template.peoplelist.people = function(){
    return Contacts.find();
    //return Contacts.find().sort({createdAt:-1});
    //不能显示结果
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
 /*  AutoForm.hooks({
    insertContactBook: {
     endSubmit:function(formId,template){
       console.log("hook doc.name"+AutoForm.getFieldVaule(formId,"name"));
       var currentname = AutoForm.getFieldVaule(formId,"name");
       console.log("hook doc.name"+currentname);
	if(Contacts.findOne({name: currentname}))
	  Session.set("redu_alertng",true);
      }
    }
  });*/
  
  Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
});





