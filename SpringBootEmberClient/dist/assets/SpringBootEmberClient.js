"use strict";



define('SpringBootEmberClient/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({});
});
define('SpringBootEmberClient/app', ['exports', 'ember', 'SpringBootEmberClient/resolver', 'ember-load-initializers', 'SpringBootEmberClient/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('SpringBootEmberClient/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('SpringBootEmberClient/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('SpringBootEmberClient/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('SpringBootEmberClient/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('SpringBootEmberClient/controllers/list-user', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({

    actions: {

      /***
      * Go to user creation page
      **/
      goToCreateUserPage: function goToCreateUserPage() {
        this.transitionToRoute('user.create');
      }
    }
  });
});
define('SpringBootEmberClient/controllers/message', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    queryParams: ['message', 'status'],
    message: null,
    status: null
  });
});
define('SpringBootEmberClient/controllers/user/create', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    ajax: _ember.default.inject.service(),
    actions: {

      /***
      * Create api call by ember create record
      **/
      save: function save(fullNameInput, phoneInput) {
        var _this = this;

        if (fullNameInput === undefined || phoneInput === undefined || fullNameInput === '' || phoneInput === '') {
          alert("Please enter valid input!!!");
          return;
        }

        this.get('store').createRecord('user', {
          fullName: fullNameInput,
          phone: phoneInput
        }).save().then(function () {
          _this.transitionToRoute('message', { queryParams: { message: 'created' } });
        });

        //clean up input box
        this.set('userfullName', undefined);
        this.set('userphone', undefined);
      },


      /***
      * Create user api call by using ajax
      **/
      saveByAjax: function saveByAjax(fullNameF, phoneF) {
        var _this2 = this;

        if (fullNameF === undefined || phoneF === undefined || fullNameF === '' || phoneF === '') {
          alert("Please enter valid input!!!");
          return;
        }

        this.get('ajax').request('/users/', {
          type: 'POST',
          contentType: "application/json",
          dataType: "text",
          data: JSON.stringify({
            fullName: fullNameF,
            phone: phoneF
          }),
          success: function success(response) {
            alert(response);
          },
          error: function error(response) {
            alert(response);
          }
        }).then(function () {
          _this2.transitionToRoute('message', { queryParams: { message: 'created' } });
        });
        this.set('userfullName', undefined);
        this.set('userphone', undefined);
      },

      /***
      * Create api call by using ajax
      **/
      goBackShowUsersPage: function goBackShowUsersPage() {
        this.set('userfullName', undefined);
        this.set('userphone', undefined);
        this.transitionToRoute('list-user');
      }
    }
  });
});
define('SpringBootEmberClient/controllers/user/edit', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({

    //Define variable to use in template
    modelFromController: _ember.default.computed.alias('model'),

    actions: {

      /***
      * Create api call by using ajax
      **/
      saveEdit: function saveEdit(model, fullNameInput, phoneInput) {
        if (fullNameInput === undefined || fullNameInput === '') {
          fullNameInput = model.get('fullName');
        }

        if (phoneInput === undefined || phoneInput === '') {
          phoneInput = model.get('phone');
        }

        model.setProperties({
          fullName: fullNameInput,
          phone: phoneInput
        });
        model.save();
        this.set('fullNameInput', undefined);
        this.set('phoneInput', undefined);
        this.transitionToRoute('user.show', model.id);
      },


      /***
      * Close edit page and go back to show users page
      * Clear up input box for full name and phone
      **/
      closeEdit: function closeEdit(id) {
        this.set('fullNameInput', undefined);
        this.set('phoneInput', undefined);
        this.transitionToRoute('user.show', id);
      }
    }
  });
});
define('SpringBootEmberClient/controllers/user/show', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    //Using ajax call
    ajax: _ember.default.inject.service(),

    actions: {

      /***
      * Go to show users page
      **/
      goBackToIndexAction: function goBackToIndexAction() {
        this.transitionToRoute('list-user');
      },


      /***
      * Go to user editor page
      **/
      goToEditUserAction: function goToEditUserAction(id) {
        this.transitionToRoute('user.edit', id);
      },


      /***
      * Delete user action by using ajax call
      **/
      deleteUserAction: function deleteUserAction(id) {
        var _this = this;

        this.get('ajax').request('/users/' + id, {
          type: 'DELETE',
          contentType: "application/json",
          dataType: "text",
          success: function success(response) {
            alert(response);
          },
          error: function error(response) {
            alert(response);
          }
        }).then(function () {
          _this.transitionToRoute('list-user');
        });
      }
    }
  });
});
define('SpringBootEmberClient/helpers/app-version', ['exports', 'ember', 'SpringBootEmberClient/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('SpringBootEmberClient/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('SpringBootEmberClient/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('SpringBootEmberClient/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('SpringBootEmberClient/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('SpringBootEmberClient/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'SpringBootEmberClient/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('SpringBootEmberClient/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('SpringBootEmberClient/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('SpringBootEmberClient/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('SpringBootEmberClient/initializers/export-application-global', ['exports', 'ember', 'SpringBootEmberClient/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('SpringBootEmberClient/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('SpringBootEmberClient/initializers/load-bootstrap-config', ['exports', 'SpringBootEmberClient/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('SpringBootEmberClient/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('SpringBootEmberClient/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("SpringBootEmberClient/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('SpringBootEmberClient/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    fullName: _emberData.default.attr(),
    phone: _emberData.default.attr()
  });
});
define('SpringBootEmberClient/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('SpringBootEmberClient/router', ['exports', 'ember', 'SpringBootEmberClient/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('list-user', { path: '/' });
    this.route('message');

    this.route('user', function () {
      this.route('show', { path: '/show/:id' });
      this.route('create');
      this.route('edit', { path: '/edit/:id' });
    });
  });

  exports.default = Router;
});
define('SpringBootEmberClient/routes/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({

    /***
    * Replace index page with show user list
    **/
    beforeModel: function beforeModel() {
      this.replaceWith('list-user');
    }
  });
});
define("SpringBootEmberClient/routes/list-user", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return _ember.default.$.getJSON("/users/all");
    }
  });
});
define('SpringBootEmberClient/routes/message', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('SpringBootEmberClient/routes/user/create', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return this.get('store').createRecord('user');
    }
  });
});
define('SpringBootEmberClient/routes/user/edit', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model(params) {
      return this.store.find('user', params.id);
    }
  });
});
define('SpringBootEmberClient/routes/user/show', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('user', params.id);
    },

    actions: {
      error: function error(_error) {
        if (_error) {
          return this.transitionTo('message', { queryParams: { message: _error, status: _error.errors[0].status } });
        }
      }
    }
  });
});
define('SpringBootEmberClient/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({});
});
define('SpringBootEmberClient/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("SpringBootEmberClient/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EpEQvtro", "block": "{\"statements\":[[0,\"\\n\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel panel-primary\"],[13],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[11,\"h3\",[]],[13],[0,\"Spring Boot EmberJs 2.x MVC\"],[14],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel panel-info\"],[13],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"Greetings\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[11,\"h5\",[]],[15,\"class\",\"text-success\"],[13],[0,\"\\nSpring Boot MVC for Backend, and EmberJs 2.13.2 for GUI. \\n\"],[11,\"br\",[]],[13],[14],[0,\" \"],[11,\"br\",[]],[13],[14],[0,\"\\nYou are able to - Show users, Add, Edit and Delete a User.\"],[14],[14],[0,\"\\n\\n\\n\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel panel-danger\"],[13],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"Customer Info\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"body\"],[13],[0,\"\\n    \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/application.hbs" } });
});
define("SpringBootEmberClient/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/4N5LJMI", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"This is Index pages\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/index.hbs" } });
});
define("SpringBootEmberClient/templates/list-user", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "41VZq/RS", "block": "{\"statements\":[[11,\"h3\",[]],[15,\"class\",\"text-warning\"],[13],[0,\"List Of Available Users:\"],[14],[0,\"\\n\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"list-group\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[15,\"class\",\"list-group-item list-group-item-success\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"user.show\",[28,[\"user\",\"id\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,[\"user\",\"fullName\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"user\"]},null],[14],[0,\"\\n\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"group-show-users-btn\"],[13],[0,\"\\n  \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"goToCreateUserPage\"]],[13],[0,\"Create User\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/list-user.hbs" } });
});
define("SpringBootEmberClient/templates/message", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J25fNJ4E", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"status\"]]],null,{\"statements\":[[0,\"  \"],[11,\"h1\",[]],[13],[0,\"Status: \"],[1,[26,[\"status\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"h2\",[]],[13],[0,\"Message: \"],[1,[26,[\"message\"]],false],[14],[0,\"\\n\\n\"],[6,[\"link-to\"],[\"list-user\"],null,{\"statements\":[[0,\"  Back To Show Users\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/message.hbs" } });
});
define("SpringBootEmberClient/templates/user/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ytKnkWHU", "block": "{\"statements\":[[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel panel-info\"],[13],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"Create User\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n\\n\\n\\n\"],[11,\"div\",[]],[16,\"class\",[34,[\"form-group \",[33,[\"unless\"],[[28,[\"isFullNameValid\"]],\"has-error\"],null]]]],[13],[0,\"\\n  \"],[11,\"label\",[]],[15,\"for\",\"full-name\"],[15,\"class\",\"required text-primary\"],[15,\"title\",\"This field is requeired\"],[13],[0,\"Full name\"],[14],[0,\"\\n  \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"class\",\"id\",\"placeholder\"],[\"text\",[28,[\"userfullName\"]],\"form-control\",\"full-name\",\"Full name\"]]],false],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"isFullNameValid\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"help-block\"],[13],[0,\"Full name is required\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[16,\"class\",[34,[\"form-group \",[33,[\"unless\"],[[28,[\"isPhoneValid\"]],\"has-error\"],null]]]],[13],[0,\"\\n  \"],[11,\"label\",[]],[15,\"for\",\"phone\"],[15,\"class\",\"required text-primary\"],[15,\"title\",\"This field is requeired\"],[13],[0,\"Phone\"],[14],[0,\"\\n  \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"class\",\"id\",\"placeholder\"],[\"text\",[28,[\"userphone\"]],\"form-control\",\"phone\",\"Phone number\"]]],false],[0,\"\\n\\n\"],[6,[\"unless\"],[[28,[\"isPhoneValid\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"help-block\"],[13],[0,\"Phone number is required\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[5,[\"action\"],[[28,[null]],\"saveByAjax\",[28,[\"userfullName\"]],[28,[\"userphone\"]]]],[13],[0,\"Save\"],[14],[0,\"\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"goBackShowUsersPage\"]],[13],[0,\"Back\"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/user/create.hbs" } });
});
define("SpringBootEmberClient/templates/user/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FNlcJCP1", "block": "{\"statements\":[[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel panel-warning\"],[13],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"Show Customer\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n\\n\"],[11,\"h3\",[]],[15,\"class\",\"text-info\"],[13],[0,\"Edit User ID \"],[1,[28,[\"modelFromController\",\"id\"]],false],[14],[0,\"\\n\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"text-danger\"],[13],[0,\"\\n  \"],[11,\"form\",[]],[13],[0,\"\\n        \"],[11,\"table\",[]],[13],[0,\"\\n          \"],[11,\"tr\",[]],[13],[0,\"\\n            \"],[11,\"td\",[]],[15,\"align\",\"right\"],[13],[0,\"Full Name:  \"],[14],[0,\"\\n            \"],[11,\"td\",[]],[15,\"align\",\"left\"],[13],[1,[33,[\"input\"],null,[[\"autoclose\",\"value\",\"placeholder\"],[true,[28,[\"fullNameInput\"]],[28,[\"modelFromController\",\"fullName\"]]]]],false],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"tr\",[]],[13],[0,\"\\n            \"],[11,\"td\",[]],[15,\"align\",\"left\"],[13],[0,\"Phone:  \"],[14],[0,\"\\n            \"],[11,\"td\",[]],[15,\"align\",\"left\"],[13],[1,[33,[\"input\"],null,[[\"value\",\"placeholder\"],[[28,[\"phoneInput\"]],[28,[\"modelFromController\",\"phone\"]]]]],false],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"br\",[]],[13],[14],[0,\"\\n  \"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n   \\n    \"],[11,\"div\",[]],[15,\"class\",\"save-edit-btn-task\"],[13],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"saveEdit\",[28,[\"model\"]],[28,[\"fullNameInput\"]],[28,[\"phoneInput\"]]]],[13],[0,\"Save\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"closeEdit\",[28,[\"model\",\"id\"]]]],[13],[0,\"Back\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/user/edit.hbs" } });
});
define("SpringBootEmberClient/templates/user/show", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iYUkEhWS", "block": "{\"statements\":[[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel panel-info\"],[13],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"Show Customer\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n\\n\"],[11,\"h2\",[]],[15,\"class\",\"text-danger\"],[13],[0,\"Id: \"],[11,\"span\",[]],[15,\"class\",\"text-primary\"],[13],[0,\" \"],[1,[28,[\"model\",\"id\"]],false],[0,\" \"],[14],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"class\",\"text-danger\"],[13],[0,\"FullName: \"],[11,\"span\",[]],[15,\"class\",\"text-primary\"],[13],[1,[28,[\"model\",\"fullName\"]],false],[0,\" \"],[14],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"class\",\"text-danger\"],[13],[0,\"Phone: \"],[11,\"span\",[]],[15,\"class\",\"text-primary\"],[13],[1,[28,[\"model\",\"phone\"]],false],[14],[14],[0,\"\\n\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"goBackToIndexAction\"]],[13],[0,\"Back\"],[14],[0,\"\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"goToEditUserAction\",[28,[\"model\",\"id\"]]]],[13],[0,\"Edit User\"],[14],[0,\"\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"deleteUserAction\",[28,[\"model\",\"id\"]]]],[13],[0,\"Delete User\"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "SpringBootEmberClient/templates/user/show.hbs" } });
});


define('spring-emberj-aaron-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'spring-emberj-aaron-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("spring-emberj-aaron-frontend/app")["default"].create({"name":"SpringBootEmberClient","version":"0.0.0+"});
}
//# sourceMappingURL=SpringBootEmberClient.map
