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
 