module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class Result {
    constructor(model, message, successful) {
        this.model = model;
        this.message = message;
        this.successful = successful;
    }
}

exports.default = Result;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorization = Authorization;

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function Authorization(bearer) {
  var data = {};
  try {
    var authCode = bearer.split(" ")[1];
    await _axios2.default.post('http://localhost:3000/api/v1/userLogin/authorize', { Authorization: authCode }).then(response => {
      data = response.data;
    }).catch(err => {

      data = err.response.data;
    });
    return data;
  } catch (e) {
    console.log(e);
    result.message = e;
    result.successful = false;
    return result;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class SearchResult {
    constructor(items, totalcount, pages, message, successful) {
        this.items = items;
        this.totalcount = totalcount;
        this.pages = pages;
        this.message = message;
        this.successful = successful;
    }
}

exports.default = SearchResult;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryFilters = QueryFilters;
function QueryFilters(filters, context) {

  var request = JSON.parse(JSON.stringify(filters));
  var result = {};

  var data = request.split(',');

  for (var i in data) {

    var propertyName = data[i].split(':')[0];
    var value = data[i].split(':')[1];
    if (value.indexOf('/') > -1) {
      var item = value.replace('/', '').replace('/', '');
      console.log(item);
      result[propertyName] = new RegExp(item, "i");
    } else {
      result[propertyName] = value;
    }
  }

  result["Context"] = context;
  console.log(result);
  return result;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const devConfig = {
  MONGO_URL: 'mongodb://localhost/ResourceManagement-dev'
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/ResourceManagement-test'
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/ResourceManagement'
};

const defaultConfig = {
  PORT: process.env.PORT || 4000
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _constants = __webpack_require__(6);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(10);

var _middlewares = __webpack_require__(11);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _modules = __webpack_require__(16);

var _modules2 = _interopRequireDefault(_modules);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

(0, _middlewares2.default)(app);
(0, _modules2.default)(app);

app.use(_express2.default.static('public'));

app.listen(_constants2.default.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on PORT: ${_constants2.default.PORT}
      ==================================
      Running on ${process.env.NODE_ENV}
      ==================================
      `);
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(6);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

try {
  _mongoose2.default.connect(_constants2.default.MONGO_URL);
} catch (err) {
  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);
}

_mongoose2.default.connection.once('open', () => console.log('MongoDB running')).on('error', e => {
  throw e;
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = __webpack_require__(12);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(13);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(14);

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(15);

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

exports.default = app => {
  if (isProd) {
    app.use((0, _compression2.default)());
    app.use(helmet());
  }
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));

  if (isDev) {
    app.use((0, _morgan2.default)('dev'));
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = __webpack_require__(17);

var _upload2 = _interopRequireDefault(_upload);

var _city = __webpack_require__(20);

var _city2 = _interopRequireDefault(_city);

var _country = __webpack_require__(24);

var _country2 = _interopRequireDefault(_country);

var _state = __webpack_require__(27);

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use('/api/v1/upload', _upload2.default);
  app.use('/api/v1/city', _city2.default);
  app.use('/api/v1/country', _country2.default);
  app.use('/api/v1/state', _state2.default);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = __webpack_require__(18);

var uploadController = _interopRequireWildcard(_upload);

var _express = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('', uploadController.upload);

exports.default = routes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = upload;
exports.bulkUpload = bulkUpload;

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

var _multer = __webpack_require__(19);

var _multer2 = _interopRequireDefault(_multer);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer2.default.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    cb(null, file.originalname.substring(0, file.originalname.indexOf(_path2.default.extname(file.originalname))) + '-' + Date.now() + _path2.default.extname(file.originalname));
  }
});
//req.file.orginalname+'-'+Date.now()+path.extname(file.originalname)
const Upload = (0, _multer2.default)({ storage: storage }).single('uploaddata');

async function upload(req, res) {
  var result = new _Result2.default();
  Upload(req, res, err => {
    console.log(req.file);
    if (err) {
      result.message = err;
      result.successful = false;
      result.model = null;

      return res.status(400).json(result);
    } else {
      result.message = 'Successfully uploaded file';
      result.successful = true;
      result.model = 'http://' + req.get('host') + '/uploads/' + req.file.filename;

      return res.status(200).json(result);
    }
  });
}

async function bulkUpload(req, res) {
  try {} catch (e) {}
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _city = __webpack_require__(21);

var CityController = _interopRequireWildcard(_city);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('', CityController.create);
routes.get('', CityController.getAll);

exports.default = routes;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.getAll = getAll;

var _city = __webpack_require__(22);

var _city2 = _interopRequireDefault(_city);

var _Authorization = __webpack_require__(3);

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

var _SearchResult = __webpack_require__(4);

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _QueryFilters = __webpack_require__(5);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _requestIp = __webpack_require__(23);

var _requestIp2 = _interopRequireDefault(_requestIp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function create(req, res) {
    var result = new _Result2.default();

    try {
        var ifAlreadyExist = await checkIfExist(req.body.Name);

        if (ifAlreadyExist.successful) {
            result.successful = false;
            result.model = req.body;
            result.message = ifAlreadyExist.message;

            return res.status(400).json(result);
        }

        var createRes = await _city2.default.create(req.body);

        result.successful = true;
        result.model = createRes;
        result.message = 'Successfully added record';

        return res.status(200).json(result);
    } catch (e) {
        result.successful = false;
        result.model = req.body;
        result.message = e.errmsg;

        return res.status(500).json(result);
    }
}

async function getAll(req, res) {
    var result = new _SearchResult2.default();

    try {
        var searchItems = await _city2.default.find();

        result.items = searchItems;
        result.totalcount = searchItems.length;
        result.pages = 1;
        result.message = 'Succesfully retrieve records';
        result.successful = true;

        return res.status(200).json(result);
    } catch (e) {
        result.items = null;
        result.totalcount = 0;
        result.pages = 1;
        result.message = e.errmsg;
        result.successful = false;

        return res.status(500).json(result);
    }
}

async function checkIfExist(name) {
    var result = new _Result2.default();

    try {
        var cityRes = await _city2.default.find({ Name: name });

        if (cityRes.length > 0) {
            result.successful = true;
            result.message = 'City already Exist';
            return result;
        } else {
            result.successful = false;
            result.message = 'City does not exist';

            return result;
        }
    } catch (e) {
        result.successful = false;
        result.message = e;

        return result;
    }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CitySchema = new _mongoose.Schema({
    Name: {
        type: String
    }
});

exports.default = _mongoose2.default.model('City', CitySchema);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _country = __webpack_require__(25);

var CountryController = _interopRequireWildcard(_country);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('', CountryController.create);
routes.get('', CountryController.getAll);

exports.default = routes;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.getAll = getAll;

var _country = __webpack_require__(26);

var _country2 = _interopRequireDefault(_country);

var _Authorization = __webpack_require__(3);

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

var _SearchResult = __webpack_require__(4);

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _QueryFilters = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function create(req, res) {
    var result = new _Result2.default();

    try {
        var ifAlreadyExist = await checkIfExist(req.body.Name);

        if (ifAlreadyExist.successful) {
            result.successful = false;
            result.model = req.body;
            result.message = ifAlreadyExist.message;

            return res.status(400).json(result);
        }

        var createRes = await _country2.default.create(req.body);

        result.successful = true;
        result.model = createRes;
        result.message = 'Successfully added record';

        return res.status(200).json(result);
    } catch (e) {
        result.successful = false;
        result.model = req.body;
        result.message = e.errmsg;

        return res.status(500).json(result);
    }
}

async function getAll(req, res) {
    var result = new _SearchResult2.default();

    try {
        var searchItems = await _country2.default.find();

        result.items = searchItems;
        result.totalcount = searchItems.length;
        result.pages = 1;
        result.message = 'Succesfully retrieve records';
        result.successful = true;

        return res.status(200).json(result);
    } catch (e) {
        result.items = null;
        result.totalcount = 0;
        result.pages = 1;
        result.message = e.errmsg;
        result.successful = false;

        return res.status(500).json(result);
    }
}

async function checkIfExist(name) {
    var result = new _Result2.default();

    try {
        var cityRes = await _country2.default.find({ Name: name });

        if (cityRes.length > 0) {
            result.successful = true;
            result.message = 'City already Exist';
            return result;
        } else {
            result.successful = false;
            result.message = 'City does not exist';

            return result;
        }
    } catch (e) {
        result.successful = false;
        result.message = e;

        return result;
    }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CountrySchema = new _mongoose.Schema({
    Name: {
        type: String
    }
});

exports.default = _mongoose2.default.model('Country', CountrySchema);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _state = __webpack_require__(28);

var StateController = _interopRequireWildcard(_state);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('', StateController.create);
routes.get('', StateController.getAll);

exports.default = routes;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.getAll = getAll;

var _state = __webpack_require__(29);

var _state2 = _interopRequireDefault(_state);

var _Authorization = __webpack_require__(3);

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

var _SearchResult = __webpack_require__(4);

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _QueryFilters = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function create(req, res) {
    var result = new _Result2.default();

    try {
        var ifAlreadyExist = await checkIfExist(req.body.Name);

        if (ifAlreadyExist.successful) {
            result.successful = false;
            result.model = req.body;
            result.message = ifAlreadyExist.message;

            return res.status(400).json(result);
        }

        var createRes = await _state2.default.create(req.body);

        result.successful = true;
        result.model = createRes;
        result.message = 'Successfully added record';

        return res.status(200).json(result);
    } catch (e) {
        result.successful = false;
        result.model = req.body;
        result.message = e.errmsg;

        return res.status(500).json(result);
    }
}

async function getAll(req, res) {
    var result = new _SearchResult2.default();

    try {
        var searchItems = await _state2.default.find();

        result.items = searchItems;
        result.totalcount = searchItems.length;
        result.pages = 1;
        result.message = 'Succesfully retrieve records';
        result.successful = true;

        return res.status(200).json(result);
    } catch (e) {
        result.items = null;
        result.totalcount = 0;
        result.pages = 1;
        result.message = e.errmsg;
        result.successful = false;

        return res.status(500).json(result);
    }
}

async function checkIfExist(name) {
    var result = new _Result2.default();

    try {
        var cityRes = await _state2.default.find({ Name: name });

        if (cityRes.length > 0) {
            result.successful = true;
            result.message = 'City already Exist';
            return result;
        } else {
            result.successful = false;
            result.message = 'City does not exist';

            return result;
        }
    } catch (e) {
        result.successful = false;
        result.message = e;

        return result;
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StateSchema = new _mongoose.Schema({
    Name: {
        type: String
    }
});

exports.default = _mongoose2.default.model('State', StateSchema);

/***/ })
/******/ ]);