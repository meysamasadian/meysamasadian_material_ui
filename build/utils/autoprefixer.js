'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (muiTheme) {
  var userAgent = muiTheme.userAgent;

  if (userAgent === undefined && typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent;
  }

  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;

    hasWarnedAboutUserAgent = true;
  }

  if (userAgent === false) {
    // Disabled autoprefixer
    return null;
  } else if (userAgent === 'all' || userAgent === undefined) {
    // Prefix for all user agent
    return function (style) {
      return _inlineStylePrefixer2.default.prefixAll(style);
    };
  } else {
    var prefixer = new _inlineStylePrefixer2.default({
      userAgent: userAgent
    });

    return function (style) {
      return prefixer.prefix(style);
    };
  }
};

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasWarnedAboutUserAgent = false;