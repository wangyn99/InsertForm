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
    },
   /*  owner:{
      type:String,
      autoVaule:function(){
        if(this.isInsert){
          return Meteor.userId;
        }
        else if(this.isUpsert){
          return {$setOnInsert:Meteor.userId};
        }
        else {
          this.unset();
        }
      }
    },
    createAt:{
      type:Date,
      autoVaule:function(){
        if(this.isInsert){
          return new Date;
        }
        else if(this.isUpsert){
          return {$setOnInsert:new Date};
        }
        else {
          this.unset();
        }
      }
    }*/
  }
});

function adminUser(userId){
  //console.log("the userId  "+userId);
  var admUser1 = Meteor.users.findOne({username:"admin"});
  var admUser2 = Meteor.users.findOne({username:"alice"});
  var admUser3 = Meteor.users.findOne({username:"bob"});
  var admUser =admUser1 ||admUser2 ||admUser3;
  return (userId&&admUser&&userId===admUser._id);
};