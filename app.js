
if(Meteor.isServer) {
  Meteor.methods({
    getData: function() {
      return null;
    }
  });
}

if(Meteor.isClient) {
  Template.main.events({
    "click button": function() {
      Meteor.call('getData', afterGetData);
    }
  });


  function afterGetData(err, data) {
    setTimeout(function() {
      var avg = data.total / data.count;
      alert(avg);
    }, 300);
  }
}
