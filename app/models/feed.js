import DS from 'ember-data';
import { memberAction } from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  siteUrl: DS.attr('string'),
  lastPollTime: DS.attr('date'),
  lastPollError: DS.attr('string'),

  subscribe: memberAction({path: 'subscribe'}),
  unsubscribe: memberAction({path: 'unsubscribe'})
});
