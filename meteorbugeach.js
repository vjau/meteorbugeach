if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    arrayOfStrings: function(){
      return ['abcd','efgh', 'ijkl'];
    }
  });

  Template.hello.events({
    'click .foo': function(){
      debugger;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
