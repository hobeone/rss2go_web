import Ember from 'ember';

export default Ember.Component.extend({
  isSubscribed: false,

  actions: {
    toggleSubscription() {
      this.toggleProperty('isSubscribed');
    }
  }
});
