import { test } from 'qunit';
import moduleForAcceptance from 'rss2go/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'rss2go/tests/helpers/ember-simple-auth';
import startApp from '../helpers/start-app';

moduleForAcceptance('Acceptance | list feeds');

test('visiting /feeds', function(assert) {
  let a = startApp();
  authenticateSession(a, 'foobar');
  visit('/feeds');

  andThen(function() {
    assert.equal(currentURL(), '/feeds');
  });
});
