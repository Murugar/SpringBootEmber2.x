'use strict';

define('SpringBootEmberClient/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/list-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/list-user.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/message.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/user/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/user/create.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/user/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/user/edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/user/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/user/show.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/list-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/list-user.js should pass ESLint\n\n');
  });

  QUnit.test('routes/message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/message.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/create.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/show.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define('SpringBootEmberClient/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('SpringBootEmberClient/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'SpringBootEmberClient/tests/helpers/start-app', 'SpringBootEmberClient/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('SpringBootEmberClient/tests/helpers/resolver', ['exports', 'SpringBootEmberClient/resolver', 'SpringBootEmberClient/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('SpringBootEmberClient/tests/helpers/start-app', ['exports', 'ember', 'SpringBootEmberClient/app', 'SpringBootEmberClient/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var application = void 0;

    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    _ember.default.run(function () {
      application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('SpringBootEmberClient/tests/integration/components/user-form-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('user-form', 'Integration | Component | user form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "TBHJsTb0",
      "block": "{\"statements\":[[1,[26,[\"user-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "yt2ahWY7",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"user-form\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('SpringBootEmberClient/tests/test-helper', ['SpringBootEmberClient/tests/helpers/resolver', 'ember-qunit'], function (_resolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
});
define('SpringBootEmberClient/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/list-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/list-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/message-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/message-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/show-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/list-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/list-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/message-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/message-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/show-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define('SpringBootEmberClient/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('SpringBootEmberClient/tests/unit/controllers/list-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:list-user', 'Unit | Controller | list user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('SpringBootEmberClient/tests/unit/controllers/message-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:message', 'Unit | Controller | message', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('SpringBootEmberClient/tests/unit/controllers/user/create-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:user/create', 'Unit | Controller | user/create', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('SpringBootEmberClient/tests/unit/controllers/user/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:user/edit', 'Unit | Controller | user/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('SpringBootEmberClient/tests/unit/controllers/user/show-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:user/show', 'Unit | Controller | user/show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('SpringBootEmberClient/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('SpringBootEmberClient/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('SpringBootEmberClient/tests/unit/routes/list-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:list-user', 'Unit | Route | list user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('SpringBootEmberClient/tests/unit/routes/message-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:message', 'Unit | Route | message', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('SpringBootEmberClient/tests/unit/routes/user/create-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user/create', 'Unit | Route | user/create', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('SpringBootEmberClient/tests/unit/routes/user/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user/edit', 'Unit | Route | user/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('SpringBootEmberClient/tests/unit/routes/user/show-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user/show', 'Unit | Route | user/show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('SpringBootEmberClient/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
require('spring-emberj-aaron-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
