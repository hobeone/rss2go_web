import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  site: DS.attr('string'),
  lastPollTime: DS.attr('date'),
  lastPollError: DS.attr('string')
});
