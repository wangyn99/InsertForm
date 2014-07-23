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
  Template.peoplelist.people = function(){
    return Contacts.find();
  };
  Template.person.updating = function(){
   // return Session.get("updating");
    return Session.get("update-"+this._id);
  };
  Template.person.events({
    'dblclick .person':function(e,t){
      Session.set("update-"+t.data._id,true);
     // Session.set("updating",true);
      Session.set("selectedDocId",this._id);
    },
    	'focusout .person': function(e,t){
        Session.set("selectedDocId",null);
       Session.set("update-"+t.data._id,false);
  }
  });
  Template.updateContactBook.editingDoc = function () {
  return Contacts.findOne({_id: Session.get("selectedDocId")});
};
    Template.deleteContactBook.editingDoc = function (e,t) {
  return Contacts.findOne({_id: t.data._id });
};

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
