Posts = new Meteor.Collection('posts');

var id = 0;
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
      zone.addEvent('inside-button: ' + ++id);
      // Meteor.call('getData', afterGetData);
      Session.set('goo', true);
    }
  });

  function afterGetData(err, data) {
    setTimeout(function() {
      Z = zone
      var avg = data.total / data.count;
      alert(avg);
    }, 300);
  }

  Template.goo.rendered = function() {
    G = zone;
    throw new Error("Awesome Goo");
  };

  Template.main.canShowGoo = function() {
    return Session.get('goo') === true;
  }

  var lc = 0;
  Posts.find().observeChanges({
    added: function(d) {
      if(++lc >= 2) {
        K = zone;
        throw new Error('high');
      }
    }
  });


  Deps.autorun(function() {
    var goo = Session.get('goo');
    if(goo === true) {
      DD = zone;
      throw new Error('Goooo Deps');
    }
  });
}
