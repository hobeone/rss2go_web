import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import RSVP from 'rsvp';

moduleForComponent('feed-listing', 'Integration | Component | feed listing', {
  integration: true
});

const ITEMS = [{name: 'ArsTechnica'}, {name: 'MTGGoldfish'}];
const FILTERED_ITEMS = [{name: 'ArsTechnica'}];

test('load all items', function(assert) {

  this.on('filterByName', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
      {{#list-filter filter=(action 'filterByName') as |results|}}
      <ul>
        {{#each results as |item|}}
        <li class="feed">
          {{item.name}}
        </li>
        {{/each}}
      </ul>
      {{/list-filter}}
  `);

  return wait().then(() => {
    assert.equal(this.$('.feed').length, 2);
    assert.equal(this.$('.feed').first().text().trim(), 'ArsTechnica');
  });
});

test('should update with matching feeds', function (assert) {
  this.on('filterByName', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#list-filter filter=(action 'filterByName') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="feed">
          {{item.name}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // The keyup event here should invoke an action that will cause the list to be filtered
  this.$('.list-filter input').val('Ars').keyup();

  return wait().then(() => {
    assert.equal(this.$('.feed').length, 1);
    assert.equal(this.$('.feed').text().trim(), 'ArsTechnica');
  });
});
