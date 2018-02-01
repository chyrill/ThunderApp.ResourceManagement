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

var _tools = __webpack_require__(39);

var _tools2 = _interopRequireDefault(_tools);

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
  app.use('/api/v1/tools', _tools2.default);
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
routes.get('/download/:filename', uploadController.download);

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
exports.download = download;

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

var _multer = __webpack_require__(19);

var _multer2 = _interopRequireDefault(_multer);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _mime = __webpack_require__(30);

var _mime2 = _interopRequireDefault(_mime);

var _fs = __webpack_require__(31);

var _fs2 = _interopRequireDefault(_fs);

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

async function download(req, res) {

  var file = 'public/uploads/' + req.params.filename;

  var filename = _path2.default.basename(file);
  var mimetype = _mime2.default.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = _fs2.default.createReadStream(file);
  filestream.pipe(res);
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

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("mime");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _tools = __webpack_require__(40);

var ToolsController = _interopRequireWildcard(_tools);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('/converthtmlpdf', ToolsController.convertHTMLtoPDF);

exports.default = routes;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertHTMLtoPDF = convertHTMLtoPDF;

var _phantomHtmlToPdf = __webpack_require__(235);

var _phantomHtmlToPdf2 = _interopRequireDefault(_phantomHtmlToPdf);

var _Result = __webpack_require__(1);

var _Result2 = _interopRequireDefault(_Result);

var _request = __webpack_require__(141);

var _request2 = _interopRequireDefault(_request);

var _htmlPdf = __webpack_require__(66);

var _htmlPdf2 = _interopRequireDefault(_htmlPdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function convertHTMLtoPDF(req, res) {
    var result = new _Result2.default();

    try {
        var options = {
            "format": "A4",
            "orientation": "portrait",
            "border": {
                "top": "0.2in",
                "right": "0.2in",
                "bottom": "0.2in",
                "left": "0.2in"
            },
            "timeout": "120000"
        };

        var filename = req.body.filename + '-' + Date.now() + '.pdf';
        var path = './public/uploads/' + filename;

        _htmlPdf2.default.create(req.body.Payload, options).toFile(path, (err, res) => {
            if (err) {
                console.log(err);
            }

            console.log(res);
        });
        result.successful = true;
        result.model = { Url: req.body.link + filename };
        result.message = 'Successfully converted html to pdf';
        return res.status(200).json(result);
    } catch (e) {
        console.log(e);
        result.successful = false;
        result.model = null;
        result.message = e.errmsg;

        return res.status(500).json(result);
    }
}

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var PDF = __webpack_require__(67)

module.exports = {
  create: function createPdf (html, options, callback) {
    if (arguments.length === 1) {
      return new PDF(html)
    }

    if (arguments.length === 2 && typeof options !== 'function') {
      return new PDF(html, options)
    }

    if (arguments.length === 2) {
      callback = options
      options = {}
    }

    try {
      var pdf = new PDF(html, options)
    } catch (err) {
      return callback(err)
    }

    pdf.exec(callback)
  }
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var fs = __webpack_require__(31)
var childprocess = __webpack_require__(38)
var path = __webpack_require__(7)
var assert = __webpack_require__(68)

try {
  var phantomjs = __webpack_require__(69)
} catch (err) {
  console.log('html-pdf: Failed to load PhantomJS module.', err)
}

/*
* phantomjs version 1.8.1 and later should work.
*
* Create a PDF file out of an html string.
*
* Regions for the PDF page are:
*
* - Page Header  -> document.getElementById('pageHeader')
* - Page Content -> document.getElementById('pageContent')
* - Page Footer  -> document.getElementById('pageFooter')
*
* When no #pageContent is available, phantomjs will use document.body as pdf content
*/
module.exports = PDF
function PDF (html, options) {
  this.html = html
  this.options = options || {}
  if (this.options.script) {
    this.script = path.normalize(this.options.script)
  } else {
    this.script = path.join(__dirname, 'scripts', 'pdf_a4_portrait.js')
  }

  if (this.options.filename) this.options.filename = path.resolve(this.options.filename)
  if (!this.options.phantomPath) this.options.phantomPath = phantomjs && phantomjs.path
  this.options.phantomArgs = this.options.phantomArgs || []
  assert(this.options.phantomPath, "html-pdf: Failed to load PhantomJS module. You have to set the path to the PhantomJS binary using 'options.phantomPath'")
  assert(typeof this.html === 'string' && this.html.length, "html-pdf: Can't create a pdf without an html string")
  this.options.timeout = parseInt(this.options.timeout, 10) || 30000
}

PDF.prototype.toBuffer = function PdfToBuffer (callback) {
  this.exec(function execPdfToBuffer (err, res) {
    if (err) return callback(err)
    fs.readFile(res.filename, function readCallback (err, buffer) {
      if (err) return callback(err)
      fs.unlink(res.filename, function unlinkPdfFile (err) {
        if (err) return callback(err)
        callback(null, buffer)
      })
    })
  })
}

PDF.prototype.toStream = function PdfToStream (callback) {
  this.exec(function (err, res) {
    if (err) return callback(err)
    try {
      var stream = fs.createReadStream(res.filename)
    } catch (err) {
      return callback(err)
    }

    stream.on('end', function () {
      fs.unlink(res.filename, function unlinkPdfFile (err) {
        if (err) console.log('html-pdf:', err)
      })
    })

    callback(null, stream)
  })
}

PDF.prototype.toFile = function PdfToFile (filename, callback) {
  assert(arguments.length > 0, 'html-pdf: The method .toFile([filename, ]callback) requires a callback.')
  if (filename instanceof Function) {
    callback = filename
    filename = undefined
  } else {
    this.options.filename = path.resolve(filename)
  }
  this.exec(callback)
}

PDF.prototype.exec = function PdfExec (callback) {
  var child = childprocess.spawn(this.options.phantomPath, [].concat(this.options.phantomArgs, [this.script]), this.options.childProcessOptions)
  var stderr = []

  var timeout = setTimeout(function execTimeout () {
    respond(null, new Error('html-pdf: PDF generation timeout. Phantom.js script did not exit.'))
  }, this.options.timeout)

  function onError (buffer) {
    stderr.push(buffer)
  }

  function onData (buffer) {
    var result
    try {
      var json = buffer.toString().trim()
      if (json) result = JSON.parse(json)
    } catch (err) {
      // Proxy for debugging purposes
      process.stdout.write(buffer)
    }

    if (result) respond(null, null, result)
  }

  var callbacked = false
  function respond (code, err, data) {
    if (callbacked) return
    callbacked = true
    clearTimeout(timeout)

    // If we don't have an exit code, we kill the process, ignore stderr after this point
    if (code === null) kill(child, onData, onError)

    if (!data) {
      if (!err && code) err = new Error("html-pdf: Received the exit code '" + code + "'")
      else if (!err) err = new Error('html-pdf: Unknown Error')

      var postfix = stderr.length ? '\n' + Buffer.concat(stderr).toString() : ''
      if (postfix) err.message += postfix
      return callback(err, null)
    }

    callback(null, data)
  }

  child.stdout.on('data', onData)
  child.stderr.on('data', onError)
  child.on('error', function onError (err) { respond(null, err) })

  // An exit event is most likely an error because we didn't get any data at this point
  child.on('close', respond)
  child.on('exit', respond)

  var config = JSON.stringify({html: this.html, options: this.options})
  child.stdin.write(config + '\n', 'utf8')
  child.stdin.end()
}

function kill (child, onData, onError) {
  child.stdin.end()
  child.kill()
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// Copyright 2013 The Obvious Corporation.

/**
 * @fileoverview Helpers made available via require('phantomjs') once package is
 * installed.
 */

var fs = __webpack_require__(31)
var path = __webpack_require__(7)
var spawn = __webpack_require__(38).spawn
var Promise = __webpack_require__(70).Promise


/**
 * Where the phantom binary can be found.
 * @type {string}
 */
try {
  var location = __webpack_require__(71)
  exports.path = path.resolve(__dirname, location.location)
  exports.platform = location.platform
  exports.arch = location.arch
} catch(e) {
  // Must be running inside install script.
  exports.path = null
}


/**
 * The version of phantomjs installed by this package.
 * @type {number}
 */
exports.version = '2.1.1'


/**
 * Returns a clean path that helps avoid `which` finding bin files installed
 * by NPM for this repo.
 * @param {string} path
 * @return {string}
 */
exports.cleanPath = function (path) {
  return path
      .replace(/:[^:]*node_modules[^:]*/g, '')
      .replace(/(^|:)\.\/bin(\:|$)/g, ':')
      .replace(/^:+/, '')
      .replace(/:+$/, '')
}


// Make sure the binary is executable.  For some reason doing this inside
// install does not work correctly, likely due to some NPM step.
if (exports.path) {
  try {
    // avoid touching the binary if it's already got the correct permissions
    var st = fs.statSync(exports.path)
    var mode = st.mode | parseInt('0555', 8)
    if (mode !== st.mode) {
      fs.chmodSync(exports.path, mode)
    }
  } catch (e) {
    // Just ignore error if we don't have permission.
    // We did our best. Likely because phantomjs was already installed.
  }
}

/**
 * Executes a script or just runs PhantomJS
 */
exports.exec = function () {
  var args = Array.prototype.slice.call(arguments)
  return spawn(exports.path, args)
}

/**
 * Runs PhantomJS with provided options
 * @example
 * // handy with WebDriver
 * phantomjs.run('--webdriver=4444').then(program => {
 *   // do something
 *   program.kill()
 * })
 * @returns {Promise} the process of PhantomJS
 */
exports.run = function () {
  var args = arguments
  return new Promise(function (resolve, reject) {
    try {
      var program = exports.exec.apply(null, args)
      var isFirst = true
      var stderr = ''
      program.stdout.on('data', function () {
        // This detects PhantomJS instance get ready.
        if (!isFirst) return
        isFirst = false
        resolve(program)
      })
      program.stderr.on('data', function (data) {
        stderr = stderr + data.toString('utf8')
      })
      program.on('error', function (err) {
        if (!isFirst) return
        isFirst = false
        reject(err)
      })
      program.on('exit', function (code) {
        if (!isFirst) return
        isFirst = false
        if (code == 0) {
          // PhantomJS doesn't use exit codes correctly :(
          if (stderr.indexOf('Error:') == 0) {
            reject(new Error(stderr))
          } else {
            resolve(program)
          }
        } else {
          reject(new Error('Exit code: ' + code))
        }
      })
    } catch (err) {
      reject(err)
    }
  })
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports.location = "phantom\\bin\\phantomjs.exe"
module.exports.platform = "win32"
module.exports.arch = "x64"


/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

module.exports = require("safe-buffer");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 96 */,
/* 97 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(74)._extend

function constructObject(initialObject) {
  initialObject = initialObject || {}

  return {
    extend: function (object) {
      return constructObject(extend(initialObject, object))
    },
    done: function () {
      return initialObject
    }
  }
}

function constructOptionsFrom(uri, options) {
  var params = constructObject()
  if (typeof uri === 'object') params.extend(uri)
  if (typeof uri === 'string') params.extend({uri: uri})
  params.extend(options)
  return params.done()
}

function filterForCallback(values) {
  var callbacks = values.filter(isFunction)
  return callbacks[0]
}

function isFunction(value) {
  return typeof value === 'function'
}

function paramsHaveRequestBody(params) {
  return (
    params.options.body ||
    params.options.requestBodyStream ||
    (params.options.json && typeof params.options.json !== 'boolean') ||
    params.options.multipart
  )
}

exports.isFunction            = isFunction
exports.constructObject       = constructObject
exports.constructOptionsFrom  = constructOptionsFrom
exports.filterForCallback     = filterForCallback
exports.paramsHaveRequestBody = paramsHaveRequestBody


/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, exports) {

function Caseless (dict) {
  this.dict = dict || {}
}
Caseless.prototype.set = function (name, value, clobber) {
  if (typeof name === 'object') {
    for (var i in name) {
      this.set(i, name[i], value)
    }
  } else {
    if (typeof clobber === 'undefined') clobber = true
    var has = this.has(name)

    if (!clobber && has) this.dict[has] = this.dict[has] + ',' + value
    else this.dict[has || name] = value
    return has
  }
}
Caseless.prototype.has = function (name) {
  var keys = Object.keys(this.dict)
    , name = name.toLowerCase()
    ;
  for (var i=0;i<keys.length;i++) {
    if (keys[i].toLowerCase() === name) return keys[i]
  }
  return false
}
Caseless.prototype.get = function (name) {
  name = name.toLowerCase()
  var result, _key
  var headers = this.dict
  Object.keys(headers).forEach(function (key) {
    _key = key.toLowerCase()
    if (name === _key) result = headers[key]
  })
  return result
}
Caseless.prototype.swap = function (name) {
  var has = this.has(name)
  if (has === name) return
  if (!has) throw new Error('There is no header than matches "'+name+'"')
  this.dict[name] = this.dict[has]
  delete this.dict[has]
}
Caseless.prototype.del = function (name) {
  var has = this.has(name)
  return delete this.dict[has || name]
}

module.exports = function (dict) {return new Caseless(dict)}
module.exports.httpify = function (resp, headers) {
  var c = new Caseless(headers)
  resp.setHeader = function (key, value, clobber) {
    if (typeof value === 'undefined') return
    return c.set(key, value, clobber)
  }
  resp.hasHeader = function (key) {
    return c.has(key)
  }
  resp.getHeader = function (key) {
    return c.get(key)
  }
  resp.removeHeader = function (key) {
    return c.del(key)
  }
  resp.headers = c.dict
  return c
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(212);
var v4 = __webpack_require__(213);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var optional = __webpack_require__(233)
  , tough = optional('tough-cookie')
  , Cookie = tough && tough.Cookie
  , CookieJar = tough && tough.CookieJar
  ;

exports.parse = function(str) {
  if (str && str.uri) str = str.uri
  if (typeof str !== 'string') throw new Error("The cookie function only accepts STRING as param")
  if (!Cookie) {
    return null;
  }
  return Cookie.parse(str)
};

// Adapt the sometimes-Async api of tough.CookieJar to our requirements
function RequestJar() {
  this._jar = new CookieJar();
}
RequestJar.prototype.setCookie = function(cookieOrStr, uri, options) {
  return this._jar.setCookieSync(cookieOrStr, uri, options || {});
};
RequestJar.prototype.getCookieString = function(uri) {
  return this._jar.getCookieStringSync(uri);
};
RequestJar.prototype.getCookies = function(uri) {
  return this._jar.getCookiesSync(uri);
};

exports.jar = function() {
  if (!CookieJar) {
    // tough-cookie not loaded, return a stub object:
    return {
      setCookie: function(){},
      getCookieString: function(){},
      getCookies: function(){}
    };
  }
  return new RequestJar();
};


/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports) {

module.exports = require("mime-types");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __webpack_require__(73);

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright 2010-2012 Mikeal Rogers
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var extend                = __webpack_require__(74)._extend
  , cookies               = __webpack_require__(113)
  , copy                  = __webpack_require__(234)
  , helpers               = __webpack_require__(104)
  , isFunction            = helpers.isFunction
  , constructObject       = helpers.constructObject
  , filterForCallback     = helpers.filterForCallback
  , constructOptionsFrom  = helpers.constructOptionsFrom
  , paramsHaveRequestBody = helpers.paramsHaveRequestBody
  ;

// organize params for patch, post, put, head, del
function initParams(uri, options, callback) {
  callback = filterForCallback([options, callback])
  options = constructOptionsFrom(uri, options)

  return constructObject()
    .extend({callback: callback})
    .extend({options: options})
    .extend({uri: options.uri})
    .done()
}

function request (uri, options, callback) {
  if (typeof uri === 'undefined')
    throw new Error('undefined is not a valid uri or options object.')

  var params = initParams(uri, options, callback)
  options = params.options
  options.callback = params.callback
  options.uri = params.uri

  return new request.Request(options)
}

function requester(params) {
  if(typeof params.options._requester === 'function')
    return params.options._requester
  return request
}

request.get = function (uri, options, callback) {
  var params = initParams(uri, options, callback)
  params.options.method = 'GET'
  return requester(params)(params.uri || null, params.options, params.callback)
}

request.head = function (uri, options, callback) {
  var params = initParams(uri, options, callback)
  params.options.method = 'HEAD'

  if (paramsHaveRequestBody(params))
    throw new Error("HTTP HEAD requests MUST NOT include a request body.")

  return requester(params)(params.uri || null, params.options, params.callback)
}

request.post = function (uri, options, callback) {
  var params = initParams(uri, options, callback)
  params.options.method = 'POST'
  return requester(params)(params.uri || null, params.options, params.callback)
}

request.put = function (uri, options, callback) {
  var params = initParams(uri, options, callback)
  params.options.method = 'PUT'
  return requester(params)(params.uri || null, params.options, params.callback)
}

request.patch = function (uri, options, callback) {
  var params = initParams(uri, options, callback)
  params.options.method = 'PATCH'
  return requester(params)(params.uri || null, params.options, params.callback)
}

request.del = function (uri, options, callback) {
  var params = initParams(uri, options, callback)
  params.options.method = 'DELETE'
  return requester(params)(params.uri || null, params.options, params.callback)
}

request.jar = function () {
  return cookies.jar()
}

request.cookie = function (str) {
  return cookies.parse(str)
}

request.defaults = function (options, requester) {

  var wrap = function (method) {
    var headerlessOptions = function (options) {
      options = extend({}, options)
      delete options.headers
      return options
    }

    var getHeaders = function (params, options) {
      return constructObject()
        .extend(options.headers)
        .extend(params.options.headers)
        .done()
    }

    return function (uri, opts, callback) {
      var params = initParams(uri, opts, callback)
      params.options = extend(params.options, headerlessOptions(options))

      if (options.headers)
        params.options.headers = getHeaders(params, options)

      if (isFunction(requester)) {
        if (method === request) {
          method = requester
        } else {
          params.options._requester = requester
        }
      }

      return method(params.options, params.callback)
    }
  }

  defaults          = wrap(this)
  defaults.get      = wrap(this.get)
  defaults.patch    = wrap(this.patch)
  defaults.post     = wrap(this.post)
  defaults.put      = wrap(this.put)
  defaults.head     = wrap(this.head)
  defaults.del      = wrap(this.del)
  defaults.cookie   = wrap(this.cookie)
  defaults.jar      = this.jar
  defaults.defaults = this.defaults
  return defaults
}

request.forever = function (agentOptions, optionsArg) {
  var options = constructObject()
  if (optionsArg) options.extend(optionsArg)
  if (agentOptions) options.agentOptions = agentOptions

  options.extend({forever: true})
  return request.defaults(options.done())
}

// Exports

module.exports = request
request.Request = __webpack_require__(146)
request.debug = process.env.NODE_DEBUG && /\brequest\b/.test(process.env.NODE_DEBUG)
request.initParams = initParams


/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var optional = __webpack_require__(233)
  , http = __webpack_require__(89)
  , https = optional('https')
  , tls = optional('tls')
  , url = __webpack_require__(79)
  , util = __webpack_require__(74)
  , stream = __webpack_require__(84)
  , qs = __webpack_require__(138)
  , querystring = __webpack_require__(97)
  , crypto = __webpack_require__(73)
  , zlib = __webpack_require__(147)

  , bl = __webpack_require__(252)
  , oauth = optional('oauth-sign')
  , hawk = optional('hawk')
  , aws = optional('aws-sign2')
  , httpSignature = optional('http-signature')
  , uuid = __webpack_require__(254)
  , mime = __webpack_require__(128)
  , tunnel = __webpack_require__(219)
  , _safeStringify = __webpack_require__(145)
  , stringstream = optional('stringstream')
  , caseless = __webpack_require__(111)

  , ForeverAgent = __webpack_require__(177)
  , FormData = optional('form-data')

  , cookies = __webpack_require__(113)
  , globalCookieJar = cookies.jar()

  , copy = __webpack_require__(234)
  , debug = __webpack_require__(255)
  , net = __webpack_require__(103)
  ;

function safeStringify (obj) {
  var ret
  try { ret = JSON.stringify(obj) }
  catch (e) { ret = _safeStringify(obj) }
  return ret
}

var globalPool = {}
var isUrl = /^https?:|^unix:/

var defaultProxyHeaderWhiteList = [
  'accept',
  'accept-charset',
  'accept-encoding',
  'accept-language',
  'accept-ranges',
  'cache-control',
  'content-encoding',
  'content-language',
  'content-length',
  'content-location',
  'content-md5',
  'content-range',
  'content-type',
  'connection',
  'date',
  'expect',
  'max-forwards',
  'pragma',
  'proxy-authorization',
  'referer',
  'te',
  'transfer-encoding',
  'user-agent',
  'via'
]

function isReadStream (rs) {
  return rs.readable && rs.path && rs.mode;
}

function toBase64 (str) {
  return (new Buffer(str || "", "ascii")).toString("base64")
}

function md5 (str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

// Return a simpler request object to allow serialization
function requestToJSON() {
  return {
    uri: this.uri,
    method: this.method,
    headers: this.headers
  }
}

// Return a simpler response object to allow serialization
function responseToJSON() {
  return {
    statusCode: this.statusCode,
    body: this.body,
    headers: this.headers,
    request: requestToJSON.call(this.request)
  }
}

function Request (options) {
  stream.Stream.call(this)
  this.readable = true
  this.writable = true

  if (typeof options === 'string') {
    options = {uri:options}
  }

  var reserved = Object.keys(Request.prototype)
  for (var i in options) {
    if (reserved.indexOf(i) === -1) {
      this[i] = options[i]
    } else {
      if (typeof options[i] === 'function') {
        delete options[i]
      }
    }
  }

  if (options.method) {
    this.explicitMethod = true
  }

  // Assume that we're not going to tunnel unless we need to
  if (typeof options.tunnel === 'undefined') options.tunnel = false

  this.init(options)
}
util.inherits(Request, stream.Stream)


// Set up the tunneling agent if necessary
Request.prototype.setupTunnel = function () {
  var self = this
  if (typeof self.proxy == 'string') self.proxy = url.parse(self.proxy)

  if (!self.proxy) return false

  // Don't need to use a tunneling proxy
  if (!self.tunnel && self.uri.protocol !== 'https:')
    return

  // do the HTTP CONNECT dance using koichik/node-tunnel

  // The host to tell the proxy to CONNECT to
  var proxyHost = self.uri.hostname + ':'
  if (self.uri.port)
    proxyHost += self.uri.port
  else if (self.uri.protocol === 'https:')
    proxyHost += '443'
  else
    proxyHost += '80'

  if (!self.proxyHeaderWhiteList)
    self.proxyHeaderWhiteList = defaultProxyHeaderWhiteList

  // Only send the proxy the whitelisted header names.
  var proxyHeaders = Object.keys(self.headers).filter(function (h) {
    return self.proxyHeaderWhiteList.indexOf(h.toLowerCase()) !== -1
  }).reduce(function (set, h) {
    set[h] = self.headers[h]
    return set
  }, {})

  proxyHeaders.host = proxyHost

  var tunnelFnName =
    (self.uri.protocol === 'https:' ? 'https' : 'http') +
    'Over' +
    (self.proxy.protocol === 'https:' ? 'Https' : 'Http')

  var tunnelFn = tunnel[tunnelFnName]

  var proxyAuth
  if (self.proxy.auth)
    proxyAuth = self.proxy.auth
  else if (self.proxyAuthorization)
    proxyHeaders['Proxy-Authorization'] = self.proxyAuthorization

  var tunnelOptions = { proxy: { host: self.proxy.hostname
                               , port: +self.proxy.port
                               , proxyAuth: proxyAuth
                               , headers: proxyHeaders }
                      , rejectUnauthorized: self.rejectUnauthorized
                      , headers: self.headers
                      , ca: self.ca
                      , cert: self.cert
                      , key: self.key}

  self.agent = tunnelFn(tunnelOptions)

  // At this point, we know that the proxy will support tunneling
  // (or fail miserably), so we're going to tunnel all proxied requests
  // from here on out.
  self.tunnel = true

  return true
}




Request.prototype.init = function (options) {
  // init() contains all the code to setup the request object.
  // the actual outgoing request is not started until start() is called
  // this function is called from both the constructor and on redirect.
  var self = this
  if (!options) options = {}

  caseless.httpify(self, self.headers || {})

  // Never send proxy-auth to the endpoint!
  if (self.hasHeader('proxy-authorization')) {
    self.proxyAuthorization = self.getHeader('proxy-authorization')
    self.removeHeader('proxy-authorization')
  }

  if (!self.method) self.method = options.method || 'GET'
  self.localAddress = options.localAddress

  debug(options)
  if (!self.pool && self.pool !== false) self.pool = globalPool
  self.dests = self.dests || []
  self.__isRequestRequest = true

  // Protect against double callback
  if (!self._callback && self.callback) {
    self._callback = self.callback
    self.callback = function () {
      if (self._callbackCalled) return // Print a warning maybe?
      self._callbackCalled = true
      self._callback.apply(self, arguments)
    }
    self.on('error', self.callback.bind())
    self.on('complete', self.callback.bind(self, null))
  }

  if (self.url && !self.uri) {
    // People use this property instead all the time so why not just support it.
    self.uri = self.url
    delete self.url
  }

  if (!self.uri) {
    // this will throw if unhandled but is handleable when in a redirect
    return self.emit('error', new Error("options.uri is a required argument"))
  } else {
    if (typeof self.uri == "string") self.uri = url.parse(self.uri)
  }

  if (self.strictSSL === false) {
    self.rejectUnauthorized = false
  }

  if(!self.hasOwnProperty('proxy')) {
    // check for HTTP(S)_PROXY environment variables
    if(self.uri.protocol == "http:") {
        self.proxy = process.env.HTTP_PROXY || process.env.http_proxy || null;
    } else if(self.uri.protocol == "https:") {
        self.proxy = process.env.HTTPS_PROXY || process.env.https_proxy ||
                     process.env.HTTP_PROXY || process.env.http_proxy || null;
    }
  }

  // Pass in `tunnel:true` to *always* tunnel through proxies
  self.tunnel = !!options.tunnel
  if (self.proxy) {
    self.setupTunnel()
  }

  if (!self.uri.pathname) {self.uri.pathname = '/'}

  if (!self.uri.host && !self.protocol=='unix:') {
    // Invalid URI: it may generate lot of bad errors, like "TypeError: Cannot call method 'indexOf' of undefined" in CookieJar
    // Detect and reject it as soon as possible
    var faultyUri = url.format(self.uri)
    var message = 'Invalid URI "' + faultyUri + '"'
    if (Object.keys(options).length === 0) {
      // No option ? This can be the sign of a redirect
      // As this is a case where the user cannot do anything (they didn't call request directly with this URL)
      // they should be warned that it can be caused by a redirection (can save some hair)
      message += '. This can be caused by a crappy redirection.'
    }
    self.emit('error', new Error(message))
    return // This error was fatal
  }

  self._redirectsFollowed = self._redirectsFollowed || 0
  self.maxRedirects = (self.maxRedirects !== undefined) ? self.maxRedirects : 10
  self.allowRedirect = (typeof self.followRedirect === 'function') ? self.followRedirect : function(response) {
    return true;
  };
  self.followRedirect = (self.followRedirect !== undefined) ? !!self.followRedirect : true
  self.followAllRedirects = (self.followAllRedirects !== undefined) ? self.followAllRedirects : false
  if (self.followRedirect || self.followAllRedirects)
    self.redirects = self.redirects || []

  self.setHost = false
  if (!self.hasHeader('host')) {
    self.setHeader('host', self.uri.hostname)
    if (self.uri.port) {
      if ( !(self.uri.port === 80 && self.uri.protocol === 'http:') &&
           !(self.uri.port === 443 && self.uri.protocol === 'https:') )
      self.setHeader('host', self.getHeader('host') + (':'+self.uri.port) )
    }
    self.setHost = true
  }

  self.jar(self._jar || options.jar)

  if (!self.uri.port) {
    if (self.uri.protocol == 'http:') {self.uri.port = 80}
    else if (self.uri.protocol == 'https:') {self.uri.port = 443}
  }

  if (self.proxy && !self.tunnel) {
    self.port = self.proxy.port
    self.host = self.proxy.hostname
  } else {
    self.port = self.uri.port
    self.host = self.uri.hostname
  }

  self.clientErrorHandler = function (error) {
    if (self._aborted) return
    if (self.req && self.req._reusedSocket && error.code === 'ECONNRESET'
        && self.agent.addRequestNoreuse) {
      self.agent = { addRequest: self.agent.addRequestNoreuse.bind(self.agent) }
      self.start()
      self.req.end()
      return
    }
    if (self.timeout && self.timeoutTimer) {
      clearTimeout(self.timeoutTimer)
      self.timeoutTimer = null
    }
    self.emit('error', error)
  }

  self._parserErrorHandler = function (error) {
    if (this.res) {
      if (this.res.request) {
        this.res.request.emit('error', error)
      } else {
        this.res.emit('error', error)
      }
    } else {
      this._httpMessage.emit('error', error)
    }
  }

  self._buildRequest = function(){
    var self = this;

    if (options.form) {
      self.form(options.form)
    }

    if (options.qs) self.qs(options.qs)

    if (self.uri.path) {
      self.path = self.uri.path
    } else {
      self.path = self.uri.pathname + (self.uri.search || "")
    }

    if (self.path.length === 0) self.path = '/'


    // Auth must happen last in case signing is dependent on other headers
    if (options.oauth) {
      self.oauth(options.oauth)
    }

    if (options.aws) {
      self.aws(options.aws)
    }

    if (options.hawk) {
      self.hawk(options.hawk)
    }

    if (options.httpSignature) {
      self.httpSignature(options.httpSignature)
    }

    if (options.auth) {
      if (Object.prototype.hasOwnProperty.call(options.auth, 'username')) options.auth.user = options.auth.username
      if (Object.prototype.hasOwnProperty.call(options.auth, 'password')) options.auth.pass = options.auth.password

      self.auth(
        options.auth.user,
        options.auth.pass,
        options.auth.sendImmediately,
        options.auth.bearer
      )
    }

    if (self.gzip && !self.hasHeader('accept-encoding')) {
      self.setHeader('accept-encoding', 'gzip')
    }

    if (self.uri.auth && !self.hasHeader('authorization')) {
      var authPieces = self.uri.auth.split(':').map(function(item){ return querystring.unescape(item) })
      self.auth(authPieces[0], authPieces.slice(1).join(':'), true)
    }

    if (self.proxy && !self.tunnel) {
      if (self.proxy.auth && !self.proxyAuthorization) {
        var authPieces = self.proxy.auth.split(':').map(function(item){
          return querystring.unescape(item)
        })
        var authHeader = 'Basic ' + toBase64(authPieces.join(':'))
        self.proxyAuthorization = authHeader
      }
      if (self.proxyAuthorization)
        self.setHeader('proxy-authorization', self.proxyAuthorization)
    }

    if (self.proxy && !self.tunnel) self.path = (self.uri.protocol + '//' + self.uri.host + self.path)

    if (options.json) {
      self.json(options.json)
    } else if (options.multipart) {
      self.boundary = uuid()
      self.multipart(options.multipart)
    }

    if (self.body) {
      var length = 0
      if (!Buffer.isBuffer(self.body)) {
        if (Array.isArray(self.body)) {
          for (var i = 0; i < self.body.length; i++) {
            length += self.body[i].length
          }
        } else {
          self.body = new Buffer(self.body)
          length = self.body.length
        }
      } else {
        length = self.body.length
      }
      if (length) {
        if (!self.hasHeader('content-length')) self.setHeader('content-length', length)
      } else {
        throw new Error('Argument error, options.body.')
      }
    }

    var protocol = self.proxy && !self.tunnel ? self.proxy.protocol : self.uri.protocol
      , defaultModules = {'http:':http, 'https:':https, 'unix:':http}
      , httpModules = self.httpModules || {}
      ;
    self.httpModule = httpModules[protocol] || defaultModules[protocol]

    if (!self.httpModule) return this.emit('error', new Error("Invalid protocol: " + protocol))

    if (options.ca) self.ca = options.ca

    if (!self.agent) {
      if (options.agentOptions) self.agentOptions = options.agentOptions

      if (options.agentClass) {
        self.agentClass = options.agentClass
      } else if (options.forever) {
        self.agentClass = protocol === 'http:' ? ForeverAgent : ForeverAgent.SSL
      } else {
        self.agentClass = self.httpModule.Agent
      }
    }

    if (self.pool === false) {
      self.agent = false
    } else {
      self.agent = self.agent || self.getAgent()
      if (self.maxSockets) {
        // Don't use our pooling if node has the refactored client
        self.agent.maxSockets = self.maxSockets
      }
      if (self.pool.maxSockets) {
        // Don't use our pooling if node has the refactored client
        self.agent.maxSockets = self.pool.maxSockets
      }
    }

    self.on('pipe', function (src) {
      if (self.ntick && self._started) throw new Error("You cannot pipe to this stream after the outbound request has started.")
      self.src = src
      if (isReadStream(src)) {
        if (!self.hasHeader('content-type')) self.setHeader('content-type', mime.lookup(src.path))
      } else {
        if (src.headers) {
          for (var i in src.headers) {
            if (!self.hasHeader(i)) {
              self.setHeader(i, src.headers[i])
            }
          }
        }
        if (self._json && !self.hasHeader('content-type'))
          self.setHeader('content-type', 'application/json')
        if (src.method && !self.explicitMethod) {
          self.method = src.method
        }
      }

      // self.on('pipe', function () {
      //   console.error("You have already piped to this stream. Pipeing twice is likely to break the request.")
      // })
    })

    process.nextTick(function () {
      if (self._aborted) return

      var end = function () {
        if (self._form) {
          self._form.pipe(self)
        }
        if (self.body) {
          if (Array.isArray(self.body)) {
            self.body.forEach(function (part) {
              self.write(part)
            })
          } else {
            self.write(self.body)
          }
          self.end()
        } else if (self.requestBodyStream) {
          console.warn("options.requestBodyStream is deprecated, please pass the request object to stream.pipe.")
          self.requestBodyStream.pipe(self)
        } else if (!self.src) {
          if (self.method !== 'GET' && typeof self.method !== 'undefined') {
            self.setHeader('content-length', 0)
          }
          self.end()
        }
      }

      if (self._form && !self.hasHeader('content-length')) {
        // Before ending the request, we had to compute the length of the whole form, asyncly
        self.setHeader(self._form.getHeaders())
        self._form.getLength(function (err, length) {
          if (!err) {
            self.setHeader('content-length', length)
          }
          end()
        })
      } else {
        end()
      }

      self.ntick = true
    })

  } // End _buildRequest

  self._handleUnixSocketURI = function(self){
    // Parse URI and extract a socket path (tested as a valid socket using net.connect), and a http style path suffix
    // Thus http requests can be made to a socket using the uri unix://tmp/my.socket/urlpath
    // and a request for '/urlpath' will be sent to the unix socket at /tmp/my.socket

    self.unixsocket = true;

    var full_path = self.uri.href.replace(self.uri.protocol+'/', '');

    var lookup = full_path.split('/');
    var error_connecting = true;

    var lookup_table = {};
    do { lookup_table[lookup.join('/')]={} } while(lookup.pop())
    for (r in lookup_table){
      try_next(r);
    }

    function try_next(table_row){
      var client = net.connect( table_row );
      client.path = table_row
      client.on('error', function(){ lookup_table[this.path].error_connecting=true; this.end(); });
      client.on('connect', function(){ lookup_table[this.path].error_connecting=false; this.end(); });
      table_row.client = client;
    }

    wait_for_socket_response();

    response_counter = 0;

    function wait_for_socket_response(){
      var detach;
      if('undefined' == typeof setImmediate ) detach = process.nextTick
      else detach = setImmediate;
      detach(function(){
        // counter to prevent infinite blocking waiting for an open socket to be found.
        response_counter++;
        var trying = false;
        for (r in lookup_table){
          if('undefined' == typeof lookup_table[r].error_connecting)
            trying = true;
        }
        if(trying && response_counter<1000)
          wait_for_socket_response()
        else
          set_socket_properties();
      })
    }

    function set_socket_properties(){
      var host;
      for (r in lookup_table){
        if(lookup_table[r].error_connecting === false){
          host = r
        }
      }
      if(!host){
        self.emit('error', new Error("Failed to connect to any socket in "+full_path))
      }
      var path = full_path.replace(host, '')

      self.socketPath = host
      self.uri.pathname = path
      self.uri.href = path
      self.uri.path = path
      self.host = ''
      self.hostname = ''
      delete self.host
      delete self.hostname
      self._buildRequest();
    }
  }

  // Intercept UNIX protocol requests to change properties to match socket
  if(/^unix:/.test(self.uri.protocol)){
    self._handleUnixSocketURI(self);
  } else {
    self._buildRequest();
  }

}

// Must call this when following a redirect from https to http or vice versa
// Attempts to keep everything as identical as possible, but update the
// httpModule, Tunneling agent, and/or Forever Agent in use.
Request.prototype._updateProtocol = function () {
  var self = this
  var protocol = self.uri.protocol

  if (protocol === 'https:' || self.tunnel) {
    // previously was doing http, now doing https
    // if it's https, then we might need to tunnel now.
    if (self.proxy) {
      if (self.setupTunnel()) return
    }

    self.httpModule = https
    switch (self.agentClass) {
      case ForeverAgent:
        self.agentClass = ForeverAgent.SSL
        break
      case http.Agent:
        self.agentClass = https.Agent
        break
      default:
        // nothing we can do.  Just hope for the best.
        return
    }

    // if there's an agent, we need to get a new one.
    if (self.agent) self.agent = self.getAgent()

  } else {
    // previously was doing https, now doing http
    self.httpModule = http
    switch (self.agentClass) {
      case ForeverAgent.SSL:
        self.agentClass = ForeverAgent
        break
      case https.Agent:
        self.agentClass = http.Agent
        break
      default:
        // nothing we can do.  just hope for the best
        return
    }

    // if there's an agent, then get a new one.
    if (self.agent) {
      self.agent = null
      self.agent = self.getAgent()
    }
  }
}

Request.prototype.getAgent = function () {
  var Agent = this.agentClass
  var options = {}
  if (this.agentOptions) {
    for (var i in this.agentOptions) {
      options[i] = this.agentOptions[i]
    }
  }
  if (this.ca) options.ca = this.ca
  if (this.ciphers) options.ciphers = this.ciphers
  if (this.secureProtocol) options.secureProtocol = this.secureProtocol
  if (this.secureOptions) options.secureOptions = this.secureOptions
  if (typeof this.rejectUnauthorized !== 'undefined') options.rejectUnauthorized = this.rejectUnauthorized

  if (this.cert && this.key) {
    options.key = this.key
    options.cert = this.cert
  }

  var poolKey = ''

  // different types of agents are in different pools
  if (Agent !== this.httpModule.Agent) {
    poolKey += Agent.name
  }

  if (!this.httpModule.globalAgent) {
    // node 0.4.x
    options.host = this.host
    options.port = this.port
    if (poolKey) poolKey += ':'
    poolKey += this.host + ':' + this.port
  }

  // ca option is only relevant if proxy or destination are https
  var proxy = this.proxy
  if (typeof proxy === 'string') proxy = url.parse(proxy)
  var isHttps = (proxy && proxy.protocol === 'https:') || this.uri.protocol === 'https:'
  if (isHttps) {
    if (options.ca) {
      if (poolKey) poolKey += ':'
      poolKey += options.ca
    }

    if (typeof options.rejectUnauthorized !== 'undefined') {
      if (poolKey) poolKey += ':'
      poolKey += options.rejectUnauthorized
    }

    if (options.cert)
      poolKey += options.cert.toString('ascii') + options.key.toString('ascii')

    if (options.ciphers) {
      if (poolKey) poolKey += ':'
      poolKey += options.ciphers
    }

    if (options.secureProtocol) {
      if (poolKey) poolKey += ':'
      poolKey += options.secureProtocol
    }

    if (options.secureOptions) {
      if (poolKey) poolKey += ':'
      poolKey += options.secureOptions
    }
  }

  if (this.pool === globalPool && !poolKey && Object.keys(options).length === 0 && this.httpModule.globalAgent) {
    // not doing anything special.  Use the globalAgent
    return this.httpModule.globalAgent
  }

  // we're using a stored agent.  Make sure it's protocol-specific
  poolKey = this.uri.protocol + poolKey

  // already generated an agent for this setting
  if (this.pool[poolKey]) return this.pool[poolKey]

  return this.pool[poolKey] = new Agent(options)
}

Request.prototype.start = function () {
  // start() is called once we are ready to send the outgoing HTTP request.
  // this is usually called on the first write(), end() or on nextTick()
  var self = this

  if (self._aborted) return

  self._started = true
  self.method = self.method || 'GET'
  self.href = self.uri.href

  if (self.src && self.src.stat && self.src.stat.size && !self.hasHeader('content-length')) {
    self.setHeader('content-length', self.src.stat.size)
  }
  if (self._aws) {
    self.aws(self._aws, true)
  }

  // We have a method named auth, which is completely different from the http.request
  // auth option.  If we don't remove it, we're gonna have a bad time.
  var reqOptions = copy(self)
  delete reqOptions.auth

  debug('make request', self.uri.href)
  self.req = self.httpModule.request(reqOptions, self.onResponse.bind(self))

  if (self.timeout && !self.timeoutTimer) {
    self.timeoutTimer = setTimeout(function () {
      self.req.abort()
      var e = new Error("ETIMEDOUT")
      e.code = "ETIMEDOUT"
      self.emit("error", e)
    }, self.timeout)

    // Set additional timeout on socket - in case if remote
    // server freeze after sending headers
    if (self.req.setTimeout) { // only works on node 0.6+
      self.req.setTimeout(self.timeout, function () {
        if (self.req) {
          self.req.abort()
          var e = new Error("ESOCKETTIMEDOUT")
          e.code = "ESOCKETTIMEDOUT"
          self.emit("error", e)
        }
      })
    }
  }

  self.req.on('error', self.clientErrorHandler)
  self.req.on('drain', function() {
    self.emit('drain')
  })
  self.on('end', function() {
    if ( self.req.connection ) self.req.connection.removeListener('error', self._parserErrorHandler)
  })
  self.emit('request', self.req)
}
Request.prototype.onResponse = function (response) {
  var self = this
  debug('onResponse', self.uri.href, response.statusCode, response.headers)
  response.on('end', function() {
    debug('response end', self.uri.href, response.statusCode, response.headers)
  });

  // The check on response.connection is a workaround for browserify.
  if (response.connection && response.connection.listeners('error').indexOf(self._parserErrorHandler) === -1) {
    response.connection.setMaxListeners(0)
    response.connection.once('error', self._parserErrorHandler)
  }
  if (self._aborted) {
    debug('aborted', self.uri.href)
    response.resume()
    return
  }
  if (self._paused) response.pause()
  // Check that response.resume is defined. Workaround for browserify.
  else response.resume && response.resume()

  self.response = response
  response.request = self
  response.toJSON = responseToJSON

  // XXX This is different on 0.10, because SSL is strict by default
  if (self.httpModule === https &&
      self.strictSSL && (!response.hasOwnProperty('client') ||
      !response.client.authorized)) {
    debug('strict ssl error', self.uri.href)
    var sslErr = response.hasOwnProperty('client') ? response.client.authorizationError : self.uri.href + " does not support SSL";
    self.emit('error', new Error('SSL Error: '+ sslErr))
    return
  }

  if (self.setHost) self.removeHeader('host')
  if (self.timeout && self.timeoutTimer) {
    clearTimeout(self.timeoutTimer)
    self.timeoutTimer = null
  }

  var targetCookieJar = (self._jar && self._jar.setCookie)?self._jar:globalCookieJar;
  var addCookie = function (cookie) {
    //set the cookie if it's domain in the href's domain.
    try {
      targetCookieJar.setCookie(cookie, self.uri.href, {ignoreError: true});
    } catch (e) {
      self.emit('error', e);
    }
  }

  response.caseless = caseless(response.headers)

  if (response.caseless.has('set-cookie') && (!self._disableCookies)) {
    var headerName = response.caseless.has('set-cookie')
    if (Array.isArray(response.headers[headerName])) response.headers[headerName].forEach(addCookie)
    else addCookie(response.headers[headerName])
  }

  var redirectTo = null
  if (response.statusCode >= 300 && response.statusCode < 400 && response.caseless.has('location')) {
    var location = response.caseless.get('location')
    debug('redirect', location)

    if (self.followAllRedirects) {
      redirectTo = location
    } else if (self.followRedirect) {
      switch (self.method) {
        case 'PATCH':
        case 'PUT':
        case 'POST':
        case 'DELETE':
          // Do not follow redirects
          break
        default:
          redirectTo = location
          break
      }
    }
  } else if (response.statusCode == 401 && self._hasAuth && !self._sentAuth) {
    var authHeader = response.caseless.get('www-authenticate')
    var authVerb = authHeader && authHeader.split(' ')[0].toLowerCase()
    debug('reauth', authVerb)

    switch (authVerb) {
      case 'basic':
        self.auth(self._user, self._pass, true)
        redirectTo = self.uri
        break

      case 'bearer':
        self.auth(null, null, true, self._bearer)
        redirectTo = self.uri
        break

      case 'digest':
        // TODO: More complete implementation of RFC 2617.
        //   - check challenge.algorithm
        //   - support algorithm="MD5-sess"
        //   - handle challenge.domain
        //   - support qop="auth-int" only
        //   - handle Authentication-Info (not necessarily?)
        //   - check challenge.stale (not necessarily?)
        //   - increase nc (not necessarily?)
        // For reference:
        // http://tools.ietf.org/html/rfc2617#section-3
        // https://github.com/bagder/curl/blob/master/lib/http_digest.c

        var challenge = {}
        var re = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi
        for (;;) {
          var match = re.exec(authHeader)
          if (!match) break
          challenge[match[1]] = match[2] || match[3];
        }

        var ha1 = md5(self._user + ':' + challenge.realm + ':' + self._pass)
        var ha2 = md5(self.method + ':' + self.uri.path)
        var qop = /(^|,)\s*auth\s*($|,)/.test(challenge.qop) && 'auth'
        var nc = qop && '00000001'
        var cnonce = qop && uuid().replace(/-/g, '')
        var digestResponse = qop ? md5(ha1 + ':' + challenge.nonce + ':' + nc + ':' + cnonce + ':' + qop + ':' + ha2) : md5(ha1 + ':' + challenge.nonce + ':' + ha2)
        var authValues = {
          username: self._user,
          realm: challenge.realm,
          nonce: challenge.nonce,
          uri: self.uri.path,
          qop: qop,
          response: digestResponse,
          nc: nc,
          cnonce: cnonce,
          algorithm: challenge.algorithm,
          opaque: challenge.opaque
        }

        authHeader = []
        for (var k in authValues) {
          if (!authValues[k]) {
            //ignore
          } else if (k === 'qop' || k === 'nc' || k === 'algorithm') {
            authHeader.push(k + '=' + authValues[k])
          } else {
            authHeader.push(k + '="' + authValues[k] + '"')
          }
        }
        authHeader = 'Digest ' + authHeader.join(', ')
        self.setHeader('authorization', authHeader)
        self._sentAuth = true

        redirectTo = self.uri
        break
    }
  }

  if (redirectTo && self.allowRedirect.call(self, response)) {
    debug('redirect to', redirectTo)

    // ignore any potential response body.  it cannot possibly be useful
    // to us at this point.
    if (self._paused) response.resume()

    if (self._redirectsFollowed >= self.maxRedirects) {
      self.emit('error', new Error("Exceeded maxRedirects. Probably stuck in a redirect loop "+self.uri.href))
      return
    }
    self._redirectsFollowed += 1

    if (!isUrl.test(redirectTo)) {
      redirectTo = url.resolve(self.uri.href, redirectTo)
    }

    var uriPrev = self.uri
    self.uri = url.parse(redirectTo)

    // handle the case where we change protocol from https to http or vice versa
    if (self.uri.protocol !== uriPrev.protocol) {
      self._updateProtocol()
    }

    self.redirects.push(
      { statusCode : response.statusCode
      , redirectUri: redirectTo
      }
    )
    if (self.followAllRedirects && response.statusCode != 401 && response.statusCode != 307) self.method = 'GET'
    // self.method = 'GET' // Force all redirects to use GET || commented out fixes #215
    delete self.src
    delete self.req
    delete self.agent
    delete self._started
    if (response.statusCode != 401 && response.statusCode != 307) {
      // Remove parameters from the previous response, unless this is the second request
      // for a server that requires digest authentication.
      delete self.body
      delete self._form
      if (self.headers) {
        self.removeHeader('host')
        self.removeHeader('content-type')
        self.removeHeader('content-length')
      }
    }

    self.emit('redirect');

    self.init()
    return // Ignore the rest of the response
  } else {
    self._redirectsFollowed = self._redirectsFollowed || 0
    // Be a good stream and emit end when the response is finished.
    // Hack to emit end on close because of a core bug that never fires end
    response.on('close', function () {
      if (!self._ended) self.response.emit('end')
    })

    response.on('end', function () {
      self._ended = true
    })

    var dataStream
    if (self.gzip) {
      var contentEncoding = response.headers["content-encoding"] || "identity"
      contentEncoding = contentEncoding.trim().toLowerCase()

      if (contentEncoding === "gzip") {
        dataStream = zlib.createGunzip()
        response.pipe(dataStream)
      } else {
        // Since previous versions didn't check for Content-Encoding header,
        // ignore any invalid values to preserve backwards-compatibility
        if (contentEncoding !== "identity") {
          debug("ignoring unrecognized Content-Encoding " + contentEncoding)
        }
        dataStream = response
      }
    } else {
      dataStream = response
    }

    if (self.encoding) {
      if (self.dests.length !== 0) {
        console.error("Ignoring encoding parameter as this stream is being piped to another stream which makes the encoding option invalid.")
      } else if (dataStream.setEncoding) {
        dataStream.setEncoding(self.encoding)
      } else {
        // Should only occur on node pre-v0.9.4 (joyent/node@9b5abe5) with
        // zlib streams.
        // If/When support for 0.9.4 is dropped, this should be unnecessary.
        dataStream = dataStream.pipe(stringstream(self.encoding))
      }
    }

    self.emit('response', response)

    self.dests.forEach(function (dest) {
      self.pipeDest(dest)
    })

    dataStream.on("data", function (chunk) {
      self._destdata = true
      self.emit("data", chunk)
    })
    dataStream.on("end", function (chunk) {
      self.emit("end", chunk)
    })
    dataStream.on("close", function () {self.emit("close")})

    if (self.callback) {
      var buffer = bl()
        , strings = []
        ;
      self.on("data", function (chunk) {
        if (Buffer.isBuffer(chunk)) buffer.append(chunk)
        else strings.push(chunk)
      })
      self.on("end", function () {
        debug('end event', self.uri.href)
        if (self._aborted) {
          debug('aborted', self.uri.href)
          return
        }

        if (buffer.length) {
          debug('has body', self.uri.href, buffer.length)
          if (self.encoding === null) {
            // response.body = buffer
            // can't move to this until https://github.com/rvagg/bl/issues/13
            response.body = buffer.slice()
          } else {
            response.body = buffer.toString(self.encoding)
          }
        } else if (strings.length) {
          // The UTF8 BOM [0xEF,0xBB,0xBF] is converted to [0xFE,0xFF] in the JS UTC16/UCS2 representation.
          // Strip this value out when the encoding is set to 'utf8', as upstream consumers won't expect it and it breaks JSON.parse().
          if (self.encoding === 'utf8' && strings[0].length > 0 && strings[0][0] === "\uFEFF") {
            strings[0] = strings[0].substring(1)
          }
          response.body = strings.join('')
        }

        if (self._json) {
          try {
            response.body = JSON.parse(response.body)
          } catch (e) {}
        }
        debug('emitting complete', self.uri.href)
        if(response.body == undefined && !self._json) {
          response.body = "";
        }
        self.emit('complete', response, response.body)
      })
    }
    //if no callback
    else{
      self.on("end", function () {
        if (self._aborted) {
          debug('aborted', self.uri.href)
          return
        }
        self.emit('complete', response);
      });
    }
  }
  debug('finish init function', self.uri.href)
}

Request.prototype.abort = function () {
  this._aborted = true

  if (this.req) {
    this.req.abort()
  }
  else if (this.response) {
    this.response.abort()
  }

  this.emit("abort")
}

Request.prototype.pipeDest = function (dest) {
  var response = this.response
  // Called after the response is received
  if (dest.headers && !dest.headersSent) {
    if (response.caseless.has('content-type')) {
      var ctname = response.caseless.has('content-type')
      if (dest.setHeader) dest.setHeader(ctname, response.headers[ctname])
      else dest.headers[ctname] = response.headers[ctname]
    }

    if (response.caseless.has('content-length')) {
      var clname = response.caseless.has('content-length')
      if (dest.setHeader) dest.setHeader(clname, response.headers[clname])
      else dest.headers[clname] = response.headers[clname]
    }
  }
  if (dest.setHeader && !dest.headersSent) {
    for (var i in response.headers) {
      // If the response content is being decoded, the Content-Encoding header
      // of the response doesn't represent the piped content, so don't pass it.
      if (!this.gzip || i !== 'content-encoding') {
        dest.setHeader(i, response.headers[i])
      }
    }
    dest.statusCode = response.statusCode
  }
  if (this.pipefilter) this.pipefilter(response, dest)
}

Request.prototype.qs = function (q, clobber) {
  var base
  if (!clobber && this.uri.query) base = qs.parse(this.uri.query)
  else base = {}

  for (var i in q) {
    base[i] = q[i]
  }

  if (qs.stringify(base) === ''){
    return this
  }

  this.uri = url.parse(this.uri.href.split('?')[0] + '?' + qs.stringify(base))
  this.url = this.uri
  this.path = this.uri.path

  return this
}
Request.prototype.form = function (form) {
  if (form) {
    this.setHeader('content-type', 'application/x-www-form-urlencoded; charset=utf-8')
    this.body = (typeof form === 'string') ? form.toString('utf8') : qs.stringify(form).toString('utf8')
    return this
  }
  // create form-data object
  this._form = new FormData()
  return this._form
}
Request.prototype.multipart = function (multipart) {
  var self = this
  self.body = []

  if (!self.hasHeader('content-type')) {
    self.setHeader('content-type', 'multipart/related; boundary=' + self.boundary)
  } else {
    var headerName = self.hasHeader('content-type');
    self.setHeader(headerName, self.headers[headerName].split(';')[0] + '; boundary=' + self.boundary)
  }

  if (!multipart.forEach) throw new Error('Argument error, options.multipart.')

  if (self.preambleCRLF) {
    self.body.push(new Buffer('\r\n'))
  }

  multipart.forEach(function (part) {
    var body = part.body
    if(body == null) throw Error('Body attribute missing in multipart.')
    delete part.body
    var preamble = '--' + self.boundary + '\r\n'
    Object.keys(part).forEach(function (key) {
      preamble += key + ': ' + part[key] + '\r\n'
    })
    preamble += '\r\n'
    self.body.push(new Buffer(preamble))
    self.body.push(new Buffer(body))
    self.body.push(new Buffer('\r\n'))
  })
  self.body.push(new Buffer('--' + self.boundary + '--'))
  return self
}
Request.prototype.json = function (val) {
  var self = this

  if (!self.hasHeader('accept')) self.setHeader('accept', 'application/json')

  this._json = true
  if (typeof val === 'boolean') {
    if (typeof this.body === 'object') {
      this.body = safeStringify(this.body)
      if (!self.hasHeader('content-type'))
        self.setHeader('content-type', 'application/json')
    }
  } else {
    this.body = safeStringify(val)
    if (!self.hasHeader('content-type'))
      self.setHeader('content-type', 'application/json')
  }

  return this
}
Request.prototype.getHeader = function (name, headers) {
  var result, re, match
  if (!headers) headers = this.headers
  Object.keys(headers).forEach(function (key) {
    if (key.length !== name.length) return
    re = new RegExp(name, 'i')
    match = key.match(re)
    if (match) result = headers[key]
  })
  return result
}
var getHeader = Request.prototype.getHeader

Request.prototype.auth = function (user, pass, sendImmediately, bearer) {
  if (bearer !== undefined) {
    this._bearer = bearer
    this._hasAuth = true
    if (sendImmediately || typeof sendImmediately == 'undefined') {
      if (typeof bearer === 'function') {
        bearer = bearer()
      }
      this.setHeader('authorization', 'Bearer ' + bearer)
      this._sentAuth = true
    }
    return this
  }
  if (typeof user !== 'string' || (pass !== undefined && typeof pass !== 'string')) {
    throw new Error('auth() received invalid user or password')
  }
  this._user = user
  this._pass = pass
  this._hasAuth = true
  var header = typeof pass !== 'undefined' ? user + ':' + pass : user
  if (sendImmediately || typeof sendImmediately == 'undefined') {
    this.setHeader('authorization', 'Basic ' + toBase64(header))
    this._sentAuth = true
  }
  return this
}

Request.prototype.aws = function (opts, now) {
  if (!now) {
    this._aws = opts
    return this
  }
  var date = new Date()
  this.setHeader('date', date.toUTCString())
  var auth =
    { key: opts.key
    , secret: opts.secret
    , verb: this.method.toUpperCase()
    , date: date
    , contentType: this.getHeader('content-type') || ''
    , md5: this.getHeader('content-md5') || ''
    , amazonHeaders: aws.canonicalizeHeaders(this.headers)
    }
  var path = this.uri.path;
  if (opts.bucket && path) {
    auth.resource = '/' + opts.bucket + path
  } else if (opts.bucket && !path) {
    auth.resource = '/' + opts.bucket
  } else if (!opts.bucket && path) {
    auth.resource = path
  } else if (!opts.bucket && !path) {
    auth.resource = '/'
  }
  auth.resource = aws.canonicalizeResource(auth.resource)
  this.setHeader('authorization', aws.authorization(auth))

  return this
}
Request.prototype.httpSignature = function (opts) {
  var req = this
  httpSignature.signRequest({
    getHeader: function(header) {
      return getHeader(header, req.headers)
    },
    setHeader: function(header, value) {
      req.setHeader(header, value)
    },
    method: this.method,
    path: this.path
  }, opts)
  debug('httpSignature authorization', this.getHeader('authorization'))

  return this
}

Request.prototype.hawk = function (opts) {
  this.setHeader('Authorization', hawk.client.header(this.uri, this.method, opts).field)
}

Request.prototype.oauth = function (_oauth) {
  var form, query
  if (this.hasHeader('content-type') &&
      this.getHeader('content-type').slice(0, 'application/x-www-form-urlencoded'.length) ===
        'application/x-www-form-urlencoded'
     ) {
    form = this.body
  }
  if (this.uri.query) {
    query = this.uri.query
  }

  var oa = {}
  for (var i in _oauth) oa['oauth_'+i] = _oauth[i]
  if ('oauth_realm' in oa) delete oa.oauth_realm

  if (!oa.oauth_version) oa.oauth_version = '1.0'
  if (!oa.oauth_timestamp) oa.oauth_timestamp = Math.floor( Date.now() / 1000 ).toString()
  if (!oa.oauth_nonce) oa.oauth_nonce = uuid().replace(/-/g, '')

  oa.oauth_signature_method = 'HMAC-SHA1'

  var consumer_secret = oa.oauth_consumer_secret
  delete oa.oauth_consumer_secret
  var token_secret = oa.oauth_token_secret
  delete oa.oauth_token_secret

  var baseurl = this.uri.protocol + '//' + this.uri.host + this.uri.pathname
  var params = qs.parse([].concat(query, form, qs.stringify(oa)).join('&'))
  var signature = oauth.hmacsign(this.method, baseurl, params, consumer_secret, token_secret)

  var realm = _oauth.realm ? 'realm="' + _oauth.realm + '",' : '';
  var authHeader = 'OAuth ' + realm +
    Object.keys(oa).sort().map(function (i) {return i+'="'+oauth.rfc3986(oa[i])+'"'}).join(',')
  authHeader += ',oauth_signature="' + oauth.rfc3986(signature) + '"'
  this.setHeader('Authorization', authHeader)
  return this
}
Request.prototype.jar = function (jar) {
  var cookies

  if (this._redirectsFollowed === 0) {
    this.originalCookieHeader = this.getHeader('cookie')
  }

  if (!jar) {
    // disable cookies
    cookies = false
    this._disableCookies = true
  } else {
    var targetCookieJar = (jar && jar.getCookieString)?jar:globalCookieJar;
    var urihref = this.uri.href
    //fetch cookie in the Specified host
    if (targetCookieJar) {
      cookies = targetCookieJar.getCookieString(urihref);
    }
  }

  //if need cookie and cookie is not empty
  if (cookies && cookies.length) {
    if (this.originalCookieHeader) {
      // Don't overwrite existing Cookie header
      this.setHeader('cookie', this.originalCookieHeader + '; ' + cookies)
    } else {
      this.setHeader('cookie', cookies)
    }
  }
  this._jar = jar
  return this
}


// Stream API
Request.prototype.pipe = function (dest, opts) {
  if (this.response) {
    if (this._destdata) {
      throw new Error("You cannot pipe after data has been emitted from the response.")
    } else if (this._ended) {
      throw new Error("You cannot pipe after the response has been ended.")
    } else {
      stream.Stream.prototype.pipe.call(this, dest, opts)
      this.pipeDest(dest)
      return dest
    }
  } else {
    this.dests.push(dest)
    stream.Stream.prototype.pipe.call(this, dest, opts)
    return dest
  }
}
Request.prototype.write = function () {
  if (!this._started) this.start()
  return this.req.write.apply(this.req, arguments)
}
Request.prototype.end = function (chunk) {
  if (chunk) this.write(chunk)
  if (!this._started) this.start()
  this.req.end()
}
Request.prototype.pause = function () {
  if (!this.response) this._paused = true
  else this.response.pause.apply(this.response, arguments)
}
Request.prototype.resume = function () {
  if (!this.response) this._paused = false
  else this.response.resume.apply(this.response, arguments)
}
Request.prototype.destroy = function () {
  if (!this._ended) this.end()
  else if (this.response) this.response.destroy()
}

Request.prototype.toJSON = requestToJSON

Request.defaultProxyHeaderWhiteList =
  defaultProxyHeaderWhiteList.slice()


module.exports = Request


/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = ForeverAgent
ForeverAgent.SSL = ForeverAgentSSL

var util = __webpack_require__(74)
  , Agent = __webpack_require__(89).Agent
  , net = __webpack_require__(103)
  , tls = __webpack_require__(129)
  , AgentSSL = __webpack_require__(95).Agent
  
function getConnectionName(host, port) {  
  var name = ''
  if (typeof host === 'string') {
    name = host + ':' + port
  } else {
    // For node.js v012.0 and iojs-v1.5.1, host is an object. And any existing localAddress is part of the connection name.
    name = host.host + ':' + host.port + ':' + (host.localAddress ? (host.localAddress + ':') : ':')
  }
  return name
}    

function ForeverAgent(options) {
  var self = this
  self.options = options || {}
  self.requests = {}
  self.sockets = {}
  self.freeSockets = {}
  self.maxSockets = self.options.maxSockets || Agent.defaultMaxSockets
  self.minSockets = self.options.minSockets || ForeverAgent.defaultMinSockets
  self.on('free', function(socket, host, port) {
    var name = getConnectionName(host, port)

    if (self.requests[name] && self.requests[name].length) {
      self.requests[name].shift().onSocket(socket)
    } else if (self.sockets[name].length < self.minSockets) {
      if (!self.freeSockets[name]) self.freeSockets[name] = []
      self.freeSockets[name].push(socket)
      
      // if an error happens while we don't use the socket anyway, meh, throw the socket away
      var onIdleError = function() {
        socket.destroy()
      }
      socket._onIdleError = onIdleError
      socket.on('error', onIdleError)
    } else {
      // If there are no pending requests just destroy the
      // socket and it will get removed from the pool. This
      // gets us out of timeout issues and allows us to
      // default to Connection:keep-alive.
      socket.destroy()
    }
  })

}
util.inherits(ForeverAgent, Agent)

ForeverAgent.defaultMinSockets = 5


ForeverAgent.prototype.createConnection = net.createConnection
ForeverAgent.prototype.addRequestNoreuse = Agent.prototype.addRequest
ForeverAgent.prototype.addRequest = function(req, host, port) {
  var name = getConnectionName(host, port)
  
  if (typeof host !== 'string') {
    var options = host
    port = options.port
    host = options.host
  }

  if (this.freeSockets[name] && this.freeSockets[name].length > 0 && !req.useChunkedEncodingByDefault) {
    var idleSocket = this.freeSockets[name].pop()
    idleSocket.removeListener('error', idleSocket._onIdleError)
    delete idleSocket._onIdleError
    req._reusedSocket = true
    req.onSocket(idleSocket)
  } else {
    this.addRequestNoreuse(req, host, port)
  }
}

ForeverAgent.prototype.removeSocket = function(s, name, host, port) {
  if (this.sockets[name]) {
    var index = this.sockets[name].indexOf(s)
    if (index !== -1) {
      this.sockets[name].splice(index, 1)
    }
  } else if (this.sockets[name] && this.sockets[name].length === 0) {
    // don't leak
    delete this.sockets[name]
    delete this.requests[name]
  }
  
  if (this.freeSockets[name]) {
    var index = this.freeSockets[name].indexOf(s)
    if (index !== -1) {
      this.freeSockets[name].splice(index, 1)
      if (this.freeSockets[name].length === 0) {
        delete this.freeSockets[name]
      }
    }
  }

  if (this.requests[name] && this.requests[name].length) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(name, host, port).emit('free')
  }
}

function ForeverAgentSSL (options) {
  ForeverAgent.call(this, options)
}
util.inherits(ForeverAgentSSL, ForeverAgent)

ForeverAgentSSL.prototype.createConnection = createConnectionSSL
ForeverAgentSSL.prototype.addRequestNoreuse = AgentSSL.prototype.addRequest

function createConnectionSSL (port, host, options) {
  if (typeof port === 'object') {
    options = port;
  } else if (typeof host === 'object') {
    options = host;
  } else if (typeof options === 'object') {
    options = options;
  } else {
    options = {};
  }

  if (typeof port === 'number') {
    options.port = port;
  }

  if (typeof host === 'string') {
    options.host = host;
  }

  return tls.connect(options);
}


/***/ }),
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(139);
var bytesToUuid = __webpack_require__(140);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(139);
var bytesToUuid = __webpack_require__(140);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var net = __webpack_require__(103)
  , tls = __webpack_require__(129)
  , http = __webpack_require__(89)
  , https = __webpack_require__(95)
  , events = __webpack_require__(220)
  , assert = __webpack_require__(68)
  , util = __webpack_require__(74)
  , Buffer = __webpack_require__(88).Buffer
  ;

exports.httpOverHttp = httpOverHttp
exports.httpsOverHttp = httpsOverHttp
exports.httpOverHttps = httpOverHttps
exports.httpsOverHttps = httpsOverHttps


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options)
  agent.request = http.request
  return agent
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options)
  agent.request = http.request
  agent.createSocket = createSecureSocket
  agent.defaultPort = 443
  return agent
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options)
  agent.request = https.request
  return agent
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options)
  agent.request = https.request
  agent.createSocket = createSecureSocket
  agent.defaultPort = 443
  return agent
}


function TunnelingAgent(options) {
  var self = this
  self.options = options || {}
  self.proxyOptions = self.options.proxy || {}
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets
  self.requests = []
  self.sockets = []

  self.on('free', function onFree(socket, host, port) {
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i]
      if (pending.host === host && pending.port === port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1)
        pending.request.onSocket(socket)
        return
      }
    }
    socket.destroy()
    self.removeSocket(socket)
  })
}
util.inherits(TunnelingAgent, events.EventEmitter)

TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
  var self = this

   // Legacy API: addRequest(req, host, port, path)
  if (typeof options === 'string') {
    options = {
      host: options,
      port: arguments[2],
      path: arguments[3]
    };
  }

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push({host: options.host, port: options.port, request: req})
    return
  }

  // If we are under maxSockets create a new one.
  self.createConnection({host: options.host, port: options.port, request: req})
}

TunnelingAgent.prototype.createConnection = function createConnection(pending) {
  var self = this

  self.createSocket(pending, function(socket) {
    socket.on('free', onFree)
    socket.on('close', onCloseOrRemove)
    socket.on('agentRemove', onCloseOrRemove)
    pending.request.onSocket(socket)

    function onFree() {
      self.emit('free', socket, pending.host, pending.port)
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket)
      socket.removeListener('free', onFree)
      socket.removeListener('close', onCloseOrRemove)
      socket.removeListener('agentRemove', onCloseOrRemove)
    }
  })
}

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this
  var placeholder = {}
  self.sockets.push(placeholder)

  var connectOptions = mergeOptions({}, self.proxyOptions,
    { method: 'CONNECT'
    , path: options.host + ':' + options.port
    , agent: false
    }
  )
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {}
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        Buffer.from(connectOptions.proxyAuth).toString('base64')
  }

  debug('making CONNECT request')
  var connectReq = self.request(connectOptions)
  connectReq.useChunkedEncodingByDefault = false // for v0.6
  connectReq.once('response', onResponse) // for v0.6
  connectReq.once('upgrade', onUpgrade)   // for v0.6
  connectReq.once('connect', onConnect)   // for v0.7 or later
  connectReq.once('error', onError)
  connectReq.end()

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head)
    })
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners()
    socket.removeAllListeners()

    if (res.statusCode === 200) {
      assert.equal(head.length, 0)
      debug('tunneling connection has established')
      self.sockets[self.sockets.indexOf(placeholder)] = socket
      cb(socket)
    } else {
      debug('tunneling socket could not be established, statusCode=%d', res.statusCode)
      var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode)
      error.code = 'ECONNRESET'
      options.request.emit('error', error)
      self.removeSocket(placeholder)
    }
  }

  function onError(cause) {
    connectReq.removeAllListeners()

    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack)
    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message)
    error.code = 'ECONNRESET'
    options.request.emit('error', error)
    self.removeSocket(placeholder)
  }
}

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) return

  this.sockets.splice(pos, 1)

  var pending = this.requests.shift()
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createConnection(pending)
  }
}

function createSecureSocket(options, cb) {
  var self = this
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, mergeOptions({}, self.options,
      { servername: options.host
      , socket: socket
      }
    ))
    self.sockets[self.sockets.indexOf(socket)] = secureSocket
    cb(secureSocket)
  })
}


function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i]
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides)
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j]
        if (overrides[k] !== undefined) {
          target[k] = overrides[k]
        }
      }
    }
  }
  return target
}


var debug
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments)
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0]
    } else {
      args.unshift('TUNNEL:')
    }
    console.error.apply(console, args)
  }
} else {
  debug = function() {}
}
exports.debug = debug // for test


/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var Phantom = __webpack_require__(237),
    fs = __webpack_require__(31),
    _ = __webpack_require__(227);

var phantoms = {};

function ensurePhantom(phantom, cb) {
    if (phantom.started)
        return cb();

    phantom.startCb = phantom.startCb || [];
    phantom.startCb.push(cb);

    if (phantom.starting)
        return;

    phantom.starting = true;

    phantom.start(function(startErr) {
        phantom.started = true;
        phantom.starting = false;
        phantom.startCb.forEach(function(cb) { cb(startErr); })
    });
}

module.exports = function(options, requestOptions, id, cb) {
    var phantomInstanceId = requestOptions.phantomPath || options.phantomPath || "default";

    if (!phantoms[phantomInstanceId]) {
        var opts = _.extend({}, options);
        opts.workerEnv = {
            'PHANTON_MAX_LOG_ENTRY_SIZE': options.maxLogEntrySize || 1000
        }
        opts.phantomPath = requestOptions.phantomPath || options.phantomPath;
        phantoms[phantomInstanceId] = Phantom(opts);
    }

    var phantom = phantoms[phantomInstanceId];

    ensurePhantom(phantom, function(err) {
        if (err)
            return cb(err);

        phantom.execute(requestOptions, function (err, res) {
            if (err) {
                // if the error is a timeout from phantom-workers
                if (err.message === "Timeout") {
                    err.phantomTimeout = true;
                }

                return cb(err);
            }

            if (res.isError) {
                var error = new Error(res.message);
                error.stack = res.stack;
                return cb(error);
            }

            res.logs.forEach(function(m) {
                m.timestamp = new Date(m.timestamp)
            })

            cb(null, {
                stream: fs.createReadStream(requestOptions.output),
                numberOfPages: res.numberOfPages,
                logs: res.logs
            });
        });
    })
};

module.exports.kill = function() {
    Object.keys(phantoms).forEach(function(key) {
        var phantom = phantoms[key]
        if (!phantom.started)
            return;

        phantom.started = false;
        phantom.startCb = [];
        return phantom.kill();
    });
    phantoms = {}
}


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright(c) 2014 Jan Blaha
 *
 * PhantomManager is responsible of managing pool of phantomjs worker processes
 * and distributing pdf rendering tasks to them.
 */

var events = __webpack_require__(220),
    util = __webpack_require__(74),
    _ = __webpack_require__(238),
    numCPUs = __webpack_require__(226).cpus().length,
    cluster = __webpack_require__(225),
    PhantomWorker = __webpack_require__(230);

var PhantomManager = module.exports = function (options) {
    this._phantomInstances = [];
    this.options = options || {};
    this.options.workerEnv = this.options.workerEnv || {};
    this.options.numberOfWorkers = this.options.numberOfWorkers || numCPUs;
    this.options.timeout = this.options.timeout || 180000;
    this.options.host = this.options.host || "127.0.0.1";
    this.options.hostEnvVarName = this.options.hostEnvVarName || "PHANTOM_WORKER_HOST"
    this.options.portEnvVarName = this.options.portEnvVarName || "PHANTOM_WORKER_PORT";
    this._timeouts = [];
    this.tasksQueue = [];
};

util.inherits(PhantomManager, events.EventEmitter);

PhantomManager.prototype.start = function (cb) {
    var self = this;

    process.once("exit", function () {
        self.kill();
    });

    var started = 0;
    var workerErrors = [];
    var couldNotStartWorkersErr;
    var workerMainErrorMsg = '';

    for (var i = 0; i < self.options.numberOfWorkers; i++) {
        self._phantomInstances.push(new PhantomWorker({
            pathToPhantomScript: self.options.pathToPhantomScript,
            hostEnvVarName: self.options.hostEnvVarName,
            portEnvVarName: self.options.portEnvVarName,
            host: self.options.host,
            portLeftBoundary: self.options.portLeftBoundary,
            portRightBoundary: self.options.portRightBoundary,
            phantomPath: self.options.phantomPath,
            env: self.options.workerEnv
        }));
        self._phantomInstances[i].start(function(err) {
            if (err) {
                if (err.mainReason && workerMainErrorMsg === '') {
                    workerMainErrorMsg = err.mainReason;
                }

                workerErrors.push(err);
            }

            started++;

            if (started === self.options.numberOfWorkers) {
                if (workerErrors.length) {
                    couldNotStartWorkersErr = new Error("phantom manager could not start all workers.." + workerMainErrorMsg);
                    couldNotStartWorkersErr.workerErrors = workerErrors;
                    return cb(couldNotStartWorkersErr);
                }

                cb(null);
            }
        });
    }
};

PhantomManager.prototype.kill = function() {
    this._timeouts.forEach(function(t) {
        clearTimeout(t);
    });
    this._phantomInstances.forEach(function (i) {
        i.kill();
    });
};

PhantomManager.prototype.execute = function (options, cb) {
    var self = this;

    var freePhantomInstance = _.findWhere(this._phantomInstances, {
        isBusy: false
    });

    if (freePhantomInstance) {
        this._executeInWorker(freePhantomInstance, options, cb);
        return;
    }

    this.tasksQueue.push({options: options, cb: cb});
};

PhantomManager.prototype._executeInWorker = function (worker, options, cb) {
    var self = this;
    var isDone = false;
    var callbackWasCalled = false;

    var timeout = setTimeout(function () {
        self._timeouts.splice(self._timeouts.indexOf(timeout), 1);
        if (isDone)
            return;

        isDone = true;

        self.emit("timeout", worker);

        worker.recycle(function () {
            if (!callbackWasCalled) {
                var error = new Error();
                error.weak = true;
                error.message = "Timeout";
                cb(error);
            }

            self.tryFlushQueue();
        });
    }, this.options.timeout);

    this._timeouts.push(timeout);

    worker.execute(options, function (err, result) {
        if (isDone)
            return;

        if (err) {
            callbackWasCalled = true;
            return cb(err);
        }

        callbackWasCalled = true;
        isDone = true;
        self.tryFlushQueue();
        cb(null, result);
    });
};

PhantomManager.prototype.tryFlushQueue = function () {
    if (this.tasksQueue.length === 0)
        return;

    var freePhantomInstance = _.findWhere(this._phantomInstances, {
        isBusy: false
    });

    if (!freePhantomInstance)
        return;

    var task = this.tasksQueue.shift();

    this._executeInWorker(freePhantomInstance, task.options, task.cb);
};


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var childProcess = __webpack_require__(38),
    cluster = __webpack_require__(225),
    http = __webpack_require__(89),
    netCluster = __webpack_require__(239),
    checkPortStatus = __webpack_require__(242),
    portScanner = __webpack_require__(243),
    objectAssign = __webpack_require__(231);


var findFreePort = function (host, cb) {
    var server = netCluster.createServer();
    var port = 0;
    server.on('listening', function () {
        port = server.address().port;
        server.close();
    });
    server.on('close', function () {
        cb(null, port);
    });
    server.listen(0, host);
};

var findFreePortInRange = function (host, portLeftBoundary, portRightBoundary, cb) {

    //in cluster we don't want ports to collide, so we make a special space for every worker assuming max number of cluster workers is 5
    if (cluster.worker) {
        portLeftBoundary = portLeftBoundary + (((portRightBoundary - portLeftBoundary) / 5) * (cluster.worker.id - 1));
    }

    portScanner.findAPortNotInUse(portLeftBoundary, portRightBoundary, host, function(error, port) {
        cb(error, port);
    })
};


var PhantomWorker = module.exports = function (options) {
    this.options = options;
    this.isBusy = false;

    if (!this.options.phantomPath) {
        this.options.phantomPath = __webpack_require__(245).path;
    }

    if (options.portLeftBoundary && options.portRightBoundary) {
        this.findFreePort = function (cb) {
            findFreePortInRange(options.host, options.portLeftBoundary, options.portRightBoundary, cb);
        };
    }
    else {
        this.findFreePort = function (cb) {
            findFreePort(options.host, cb);
        };
    }
};

PhantomWorker.prototype.start = function (cb) {
    var self = this;
    var startError;

    this.findFreePort(function (err, port) {
        if (err)
            return cb(err);

        self.port = port;

        var childArgs = [
            '--ignore-ssl-errors=yes',
            '--web-security=false',
            '--ssl-protocol=any'
        ];

        if (self.options.proxy) {
            childArgs.push('--proxy=' + self.options.proxy);
        }

        if (self.options['proxy-type']) {
            childArgs.push('--proxy-type=' + self.options['proxy-type']);
        }

        if (self.options['proxy-auth']) {
            childArgs.push('--proxy-auth=' + self.options['proxy-auth']);
        }

        childArgs.push(self.options.pathToPhantomScript);

        var childOpts = {
            env: objectAssign({}, process.env, self.options.env)
        };

        childOpts.env[self.options.hostEnvVarName] = self.options.host;
        childOpts.env[self.options.portEnvVarName] = port;

        //we send host and port as env vars to child process
        self._childProcess = childProcess.execFile(self.options.phantomPath, childArgs, childOpts, function (error, stdout, stderr) {
          var segFaultMsg;

            if (error) {
                if (error.signal === 'SIGSEGV') {
                    segFaultMsg = (
                        'Segmentation fault error: if you are using macOS Sierra with phantomjs < 2 remember that ' +
                        'phantomjs < 2 does not work there and has bugs (https://github.com/ariya/phantomjs/issues/14558), ' +
                        'try to upgrade to phantom 2 if using macOS Sierra'
                    );

                    error.message = error.message + ', ' + segFaultMsg;
                    error.mainReason = segFaultMsg;
                }

                startError = error
            }
        });

        self.checkAlive(function (checkErr) {
            if (startError) {
                return cb(startError);
            } else if (checkErr) {
                return cb(checkErr);
            }

            cb();
        });

        process.stdout.setMaxListeners(0);
        process.stderr.setMaxListeners(0);

        self._childProcess.stdout.pipe(process.stdout);
        self._childProcess.stderr.pipe(process.stderr);
    });
};

PhantomWorker.prototype.checkAlive = function (cb, shot) {
    var self = this;
    shot = shot || 1;
    checkPortStatus(this.port, this.options.host, function (err, status) {
        if (!err && status === 'open') {
            return cb();
        }

        if (shot > 50) {
            return cb(new Error("Unable to reach phantomjs web server."));
        }

        shot++;
        setTimeout(function() {
            self.checkAlive(cb, shot);
        }, 100);
    });
};

PhantomWorker.prototype.recycle = function (cb) {
    var self = this;
    self._childProcess.kill();
    self.start(cb);
};

PhantomWorker.prototype.kill = function () {
    if (this._childProcess)
        this._childProcess.kill("SIGTERM");
};

PhantomWorker.prototype.execute = function (options, cb) {
    var self = this;
    this.isBusy = true;
    var http_opts = {
        hostname: this.options.host,
        port: this.port,
        path: '/',
        method: 'POST'
    };

    var req = http.request(http_opts, function (res) {
        var result = "";
        res.on("data", function (chunk) {
            result += chunk;
        });
        res.on("end", function () {
            self.isBusy = false;
            cb(null, result ? JSON.parse(result) : null);
        });
    });

    req.setHeader('Content-Type', 'application/json');
    var json = JSON.stringify(options);
    req.setHeader('Content-Length', Buffer.byteLength(json));
    req.write(json);

    req.on("error", function (e) {
        self.isBusy = false;
        cb(e);
    });

    req.end();
};


/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("which");

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {module.exports = function(moduleName) {
  try {
    return module.parent.require(moduleName);
  } catch (e) {
    // This could mean that we are in a browser context.
    // Add another try catch like it used to be, for backwards compability
    // and browserify reasons.
    try {
      return !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    }
    catch (e) {}
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports =
function copy (obj) {
  var o = {}
  Object.keys(obj).forEach(function (i) {
    o[i] = obj[i]
  })
  return o
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(236);

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(7),
    fs = __webpack_require__(31),
    uuid = __webpack_require__(112).v4,
    tmpDir = __webpack_require__(226).tmpdir(),
    _ = __webpack_require__(227);

 var options;
function writeHtmlFile(opt, type, id, cb) {
    if (!opt[type])
        return cb();

    var htmlPath = path.resolve(path.join(options.tmpDir, id + type + ".html"));
    opt[type + "File"] = path.resolve(htmlPath);
    fs.writeFile(htmlPath, opt[type], cb);
}

function writeHtml(opt, id, cb) {
    writeHtmlFile(opt, "html", id, function (err) {
        if (err)
            return cb(err);

        writeHtmlFile(opt, "header", id, function (err) {
            if (err)
                return cb(err);

            writeHtmlFile(opt, "footer", id, function (err) {
                if (err)
                    return cb(err);

                cb();
            });
        });
    });
}

function convert(conversionOptions, cb) {
    var opt = _.cloneDeep(conversionOptions);
    if (typeof opt == 'string' || opt instanceof String) {
        opt = {
            html: opt
        }
    }

    opt.viewportSize = opt.viewportSize || {};
    opt.paperSize = opt.paperSize || {};
    opt.settings = opt.settings || {};
    opt.fitToPage = opt.fitToPage || false;
    opt.waitForJSVarName = opt.waitForJSVarName  || 'PHANTOM_HTML_TO_PDF_READY';
    opt.injectJs = opt.injectJs || [];
    opt.cookies = opt.cookies || [];
    
    if (opt.waitForJS && opt.settings.javascriptEnabled === false) {
        throw new Error('can\'t use waitForJS option if settings.javascriptEnabled is not activated');
    }

    var id = opt.tmpId || uuid();

    writeHtml(opt, id, function (err) {
        if (err) {
            return cb(err);
        }

        opt.url = opt.url || "file:///" + encodeURIComponent(opt.htmlFile);
        opt.output = path.resolve(path.join(options.tmpDir, id + ".pdf"));

        delete opt.html;

        if (options.strategy === "phantom-server")
            return __webpack_require__(228)(options, opt, id, cb);
        if (options.strategy === "dedicated-process")
            return __webpack_require__(247)(options, opt, id, cb);

        cb(new Error("Unsupported strategy " + options.strategy));
    });
}

function kill() {
    __webpack_require__(228).kill();
}

module.exports = function (opt) {
    options = opt || {};
    options.timeout = options.timeout || 180000;
    options.numberOfWorkers = options.numberOfWorkers || 2;
    options.pathToPhantomScript = options.pathToPhantomScript || path.join(__dirname, "scripts", "serverScript.js");
    options.tmpDir = options.tmpDir || tmpDir;
    options.strategy = options.strategy || "phantom-server";

    // always set env var names for phantom-workers (don't let the user override this config)
    options.hostEnvVarName = 'PHANTOM_WORKER_HOST';
    options.portEnvVarName = 'PHANTOM_WORKER_PORT';

    convert.options = options;
    convert.kill = kill;

    return convert;
};


/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = function(options) {
    return new (__webpack_require__(229))(options);
}

module.exports.PhantomManager = __webpack_require__(229);
module.exports.PhantomWorker = __webpack_require__(230);



/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.2';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var isArrayLike = function(collection) {
    var length = collection && collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, target, fromIndex) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    return _.indexOf(obj, target, typeof fromIndex == 'number' && fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, 'length').length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = list && list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    var i = 0, length = array && array.length;
    if (typeof isSorted == 'number') {
      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
    } else if (isSorted && length) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (item !== item) {
      return _.findIndex(slice.call(array, i), _.isNaN);
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    var idx = array ? array.length : 0;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    if (item !== item) {
      return _.findLastIndex(slice.call(array, 0, idx), _.isNaN);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = array != null && array.length;
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createIndexFinder(1);

  _.findLastIndex = createIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of 
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
  
  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(240);


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var Server, TCP, key, net, utils, value, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  net = __webpack_require__(103);

  TCP = process.binding("tcp_wrap").TCP;

  utils = __webpack_require__(241);

  Server = (function(_super) {
    __extends(Server, _super);

    function Server() {
      this.listen = __bind(this.listen, this);
      this._netClusterListen = __bind(this._netClusterListen, this);      _ref = Server.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Server.prototype._netClusterListen = function(address, port, addressType) {
      var errno, handle,
        _this = this;

      handle = new TCP();
      errno = 0;
      if (addressType === 6) {
        errno = handle.bind6(address, port);
      } else {
        errno = handle.bind(address, port);
      }
      if (errno) {
        handle.close();
        return process.nextTick(function() {
          return _this.emit("error", utils.errnoException(errno, "listen"));
        });
      }
      this._handle = handle;
      return this._listen2.apply(this, arguments);
    };

    Server.prototype.listen = function() {
      var args, lastArg,
        _this = this;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (!utils.shouldDoIntercept(args)) {
        return Server.__super__.listen.apply(this, arguments);
      }
      lastArg = args[args.length - 1];
      if (typeof lastArg === "function") {
        this.once("listening", lastArg);
      }
      return utils.getPortArguments(args, function(err, portArgs) {
        if (err) {
          return _this.emit("error", err);
        }
        return _this._netClusterListen.apply(_this, portArgs);
      });
    };

    return Server;

  })(net.Server);

  for (key in net) {
    if (!__hasProp.call(net, key)) continue;
    value = net[key];
    exports[key] = value;
  }

  exports.Server = Server;

  exports.createServer = function() {
    var args;

    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return new Server(args);
  };

}).call(this);


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var cluster, dns;

  cluster = __webpack_require__(225);

  dns = __webpack_require__(151);

  exports.toNumber = function(x) {
    x = Number(x);
    if (x >= 0) {
      return x;
    }
    return false;
  };

  exports.isPipeName = function(s) {
    return typeof s === 'string' && exports.toNumber(s) === false;
  };

  exports.errnoException = function(errorno, syscall) {
    var e;

    e = new Error(syscall + ' ' + errorno);
    e.errno = e.code = errorno;
    e.syscall = syscall;
    return e;
  };

  exports.getPortArguments = function(args, cb) {
    var backlog, port;

    port = exports.toNumber(args[0]);
    backlog = exports.toNumber(args[1] || exports.toNumber(args[2]));
    if (args.length === 0 || typeof args[0] === "function") {
      return cb(null, ["0.0.0.0", 0, null, backlog]);
    } else if (typeof args[1] === "undefined" || typeof args[1] === "function" || typeof args[1] === "number") {
      return cb(null, ["0.0.0.0", port, 4, backlog]);
    } else {
      return dns.lookup(args[1], function(err, ip, addressType) {
        if (err) {
          return cb(err);
        }
        if (!ip) {
          ip = "0.0.0.0";
          addressType = 4;
        }
        return cb(null, [ip, port, addressType, backlog]);
      });
    }
  };

  exports.shouldDoIntercept = function(args) {
    var port;

    if (!cluster.isWorker) {
      return false;
    }
    port = exports.toNumber(args[0]);
    if (args.length === 0 || typeof args[0] === "function") {
      return true;
    } else if (args[0] && typeof args[0] === "object") {
      return false;
    } else if (exports.isPipeName(args[0])) {
      return false;
    } else if (typeof args[1] === "undefined" || typeof args[1] === "function" || typeof args[1] === "number") {
      return port === 0;
    } else {
      return port === 0;
    }
  };

}).call(this);


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var net = __webpack_require__(103)
    , Socket = net.Socket;


module.exports = function (port, host, cb) {
    var host = host;
    var timeout = 50;
    var connectionRefused = false;

    var socket = new Socket()
        , status = null
        , error = null;

    // Socket connection established, port is open
    socket.on('connect', function () {
        status = 'open';
        socket.destroy()
    });

    // If no response, assume port is not listening
    socket.setTimeout(timeout);
    socket.on('timeout', function () {
        status = 'closed';
        error = new Error('Timeout (' + timeout + 'ms) occurred waiting for ' + host + ':' + port + ' to be available')
        socket.destroy();
    });

    // Assuming the port is not open if an error. May need to refine based on
    // exception
    socket.on('error', function (exception) {
        if (exception.code !== "ECONNREFUSED") {
            error = exception
        }
        else
            connectionRefused = true;
        status = 'closed'
    });

    // Return after the socket has closed
    socket.on('close', function (exception) {
        if (exception && !connectionRefused)
            error = exception;
        else
            error = null;
        cb(error, status)
    });

    socket.connect(port, host)
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var net    = __webpack_require__(103)
  , Socket = net.Socket
  , async  = __webpack_require__(244)

var portscanner = exports

/**
 * Finds the first port with a status of 'open', implying the port is in use and
 * there is likely a service listening on it.
 *
 * @param {Number} startPort  - Port to begin status check on (inclusive).
 * @param {Number} endPort    - Last port to check status on (inclusive).
 *                              Defaults to 65535.
 * @param {String} host       - Where to scan. Defaults to '127.0.0.1'.
 * @param {Function} callback - function (error, port) { ... }
 *   - {Object|null} error    - Any errors that occurred while port scanning.
 *   - {Number|Boolean} port  - The first open port found. Note, this is the
 *                              first port that returns status as 'open', not
 *                              necessarily the first open port checked. If no
 *                              open port is found, the value is false.
 */
portscanner.findAPortInUse = function(startPort, endPort, host, callback) {
  findAPortWithStatus('open', startPort, endPort, host, callback)
}

/**
 * Finds the first port with a status of 'closed', implying the port is not in
 * use.
 *
 * @param {Number} startPort  - Port to begin status check on (inclusive).
 * @param {Number} endPort    - Last port to check status on (inclusive).
 *                              Defaults to 65535.
 * @param {String} host       - Where to scan. Defaults to '127.0.0.1'.
 * @param {Function} callback - function (error, port) { ... }
 *   - {Object|null} error    - Any errors that occurred while port scanning.
 *   - {Number|Boolean} port  - The first closed port found. Note, this is the
 *                              first port that returns status as 'closed', not
 *                              necessarily the first closed port checked. If no
 *                              closed port is found, the value is false.
 */
portscanner.findAPortNotInUse = function(startPort, endPort, host, callback) {
  findAPortWithStatus('closed', startPort, endPort, host, callback)
}

/**
 * Checks the status of an individual port.
 *
 * @param {Number} port           - Port to check status on.
 * @param {String|Object} options - host or options
 *   - {String} host              - Host of where to scan. Defaults to '127.0.0.1'.
 *   - {Object} options
 *     - {String} host            - Host of where to scan. Defaults to '127.0.0.1'.
 *     - {Number} timeout         - Connection timeout. Defaults to 400ms.
 * @param {Function} callback     - function (error, port) { ... }
 *   - {Object|null} error        - Any errors that occurred while port scanning.
 *   - {String} status            - 'open' if the port is in use.
 *                                  'closed' if the port is available.
 */
portscanner.checkPortStatus = function(port, options, callback) {
  if (typeof options === 'string') {
    // Assume this param is the host option
    options = {host: options}
  }

  var host = options.host || '127.0.0.1'
  var timeout = options.timeout || 400
  var connectionRefused = false;

  var socket = new Socket()
    , status = null
    , error = null

  // Socket connection established, port is open
  socket.on('connect', function() {
    status = 'open'
    socket.destroy()
  })

  // If no response, assume port is not listening
  socket.setTimeout(timeout)
  socket.on('timeout', function() {
    status = 'closed'
    error = new Error('Timeout (' + timeout + 'ms) occurred waiting for ' + host + ':' + port + ' to be available')
    socket.destroy()
  })

  // Assuming the port is not open if an error. May need to refine based on
  // exception
  socket.on('error', function(exception) {
    if(exception.code !== "ECONNREFUSED") {
      error = exception
    }
    else
      connectionRefused = true;
    status = 'closed'
  })

  // Return after the socket has closed
  socket.on('close', function(exception) {
    if(exception && !connectionRefused) 
      error = exception;
    else
      error = null;
    callback(error, status)
  })

  socket.connect(port, host)
}

function findAPortWithStatus(status, startPort, endPort, host, callback) {
  endPort = endPort || 65535
  var foundPort = false
  var numberOfPortsChecked = 0
  var port = startPort

  // Returns true if a port with matching status has been found or if checked
  // the entire range of ports
  var hasFoundPort = function() {
    return foundPort || numberOfPortsChecked === (endPort - startPort + 1)
  }

  // Checks the status of the port
  var checkNextPort = function(callback) {
    portscanner.checkPortStatus(port, host, function(error, statusOfPort) {
      numberOfPortsChecked++
      if (statusOfPort === status) {
        foundPort = true
        callback(error)
      }
      else {
        port++
        callback(null)
      }
    })
  }

  // Check the status of each port until one with a matching status has been
  // found or the range of ports has been exhausted
  async.until(hasFoundPort, checkNextPort, function(error) {
    if (error) {
      callback(error, port)
    }
    else if (foundPort) {
      callback(null, port)
    }
    else {
      callback(null, false)
    }
  })
}



/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// Copyright 2013 The Obvious Corporation.

/**
 * @fileoverview Helpers made available via require('phantomjs') once package is
 * installed.
 */

var fs = __webpack_require__(31)
var path = __webpack_require__(7)
var which = __webpack_require__(232)


/**
 * Where the phantom binary can be found.
 * @type {string}
 */
try {
  exports.path = path.resolve(__dirname, __webpack_require__(246).location)
} catch(e) {
  // Must be running inside install script.
  exports.path = null
}


/**
 * The version of phantomjs installed by this package.
 * @type {number}
 */
exports.version = '1.9.8'


/**
 * Returns a clean path that helps avoid `which` finding bin files installed
 * by NPM for this repo.
 * @param {string} path
 * @return {string}
 */
exports.cleanPath = function (path) {
  return path
      .replace(/:[^:]*node_modules[^:]*/g, '')
      .replace(/(^|:)\.\/bin(\:|$)/g, ':')
      .replace(/^:+/, '')
      .replace(/:+$/, '')
}


// Make sure the binary is executable.  For some reason doing this inside
// install does not work correctly, likely due to some NPM step.
if (exports.path) {
  try {
    // avoid touching the binary if it's already got the correct permissions
    var st = fs.statSync(exports.path);
    var mode = st.mode | 0555;
    if (mode !== st.mode) {
      fs.chmodSync(exports.path, mode);
    }
  } catch (e) {
    // Just ignore error if we don't have permission.
    // We did our best. Likely because phantomjs was already installed.
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports.location = "phantom\\phantomjs.exe"

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(7),
    childProcess = __webpack_require__(38),
    fs = __webpack_require__(31);
    objectAssign = __webpack_require__(231);


module.exports = function(options, requestOptions, id, cb) {
    if (!options.phantomPath) {
        options.phantomPath = __webpack_require__(248).path;
    }

    var settingsFilePath = path.resolve(path.join(options.tmpDir, id + "settings.html"));

    fs.writeFile(settingsFilePath, JSON.stringify(requestOptions), function (err) {
        if (err)
            return cb(err);

        var childArgs = [
            '--ignore-ssl-errors=yes',
            '--web-security=false',
            '--ssl-protocol=any'
        ];

        if (options.proxy) {
            childArgs.push('--proxy=' + options.proxy);
        }

        if (options['proxy-type']) {
            childArgs.push('--proxy-type=' + options['proxy-type']);
        }

        if (options['proxy-auth']) {
            childArgs.push('--proxy-auth=' + options['proxy-auth']);
        }

        childArgs.push(options.standaloneScriptPath || path.join(__dirname, 'scripts', 'standaloneScript.js'));
        childArgs.push(settingsFilePath);

        var childOptions = {
            env: objectAssign({}, process.env, { 'PHANTON_MAX_LOG_ENTRY_SIZE': options.maxLogEntrySize || 1000 })
        } 
        

        var isDone = false;

        var data = "";
        var child = childProcess.execFile(requestOptions.phantomPath || options.phantomPath, childArgs, childOptions, function (err, stdout, stderr) {
            if (isDone)
                return;

            isDone = true;
            if (err) {
                if (err.signal === 'SIGSEGV') {
                    err.message = (
                        err.message + ', Segmentation fault error: if you are using macOS Sierra with phantomjs < 2 remember that ' +
                        'phantomjs < 2 does not work there and has bugs (https://github.com/ariya/phantomjs/issues/14558), ' +
                        'try to upgrade to phantom 2 if using macOS Sierra'
                    )
                }

                return cb(err);
            }

            var response = JSON.parse(data);
            response.logs.forEach(function(m) {
                m.timestamp = new Date(m.timestamp)
            })

            cb(null, {
                stream: fs.createReadStream(requestOptions.output),
                numberOfPages: response.numberOfPages,
                logs: response.logs
            });
        });

        child.stdout.on("data", function(d) {
            if (d) {
                data += d;
            }
        });

        setTimeout(function() {
            var timeoutErr;

            if (isDone)
                return;

            isDone = true;
            timeoutErr = new Error("Timeout when executing in phantom");
            timeoutErr.phantomTimeout = true;
            child.kill();

            cb(timeoutErr);
        }, requestOptions.timeout || options.timeout).unref();
    });
};

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// Copyright 2013 The Obvious Corporation.

/**
 * @fileoverview Helpers made available via require('phantomjs') once package is
 * installed.
 */

var fs = __webpack_require__(31)
var path = __webpack_require__(7)
var which = __webpack_require__(232)


/**
 * Where the phantom binary can be found.
 * @type {string}
 */
try {
  exports.path = path.resolve(__dirname, __webpack_require__(249).location)
} catch(e) {
  // Must be running inside install script.
  exports.path = null
}


/**
 * The version of phantomjs installed by this package.
 * @type {number}
 */
exports.version = '1.9.8'


/**
 * Returns a clean path that helps avoid `which` finding bin files installed
 * by NPM for this repo.
 * @param {string} path
 * @return {string}
 */
exports.cleanPath = function (path) {
  return path
      .replace(/:[^:]*node_modules[^:]*/g, '')
      .replace(/(^|:)\.\/bin(\:|$)/g, ':')
      .replace(/^:+/, '')
      .replace(/:+$/, '')
}


// Make sure the binary is executable.  For some reason doing this inside
// install does not work correctly, likely due to some NPM step.
if (exports.path) {
  try {
    // avoid touching the binary if it's already got the correct permissions
    var st = fs.statSync(exports.path);
    var mode = st.mode | 0555;
    if (mode !== st.mode) {
      fs.chmodSync(exports.path, mode);
    }
  } catch (e) {
    // Just ignore error if we don't have permission.
    // We did our best. Likely because phantomjs was already installed.
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports.location = "phantom\\phantomjs.exe"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 251 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 251;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var DuplexStream = __webpack_require__(253)
  , util         = __webpack_require__(74)

function BufferList (callback) {
  if (!(this instanceof BufferList))
    return new BufferList(callback)

  this._bufs  = []
  this.length = 0

  if (typeof callback == 'function') {
    this._callback = callback

    var piper = function (err) {
      if (this._callback) {
        this._callback(err)
        this._callback = null
      }
    }.bind(this)

    this.on('pipe', function (src) {
      src.on('error', piper)
    })
    this.on('unpipe', function (src) {
      src.removeListener('error', piper)
    })
  }
  else if (Buffer.isBuffer(callback))
    this.append(callback)
  else if (Array.isArray(callback)) {
    callback.forEach(function (b) {
      Buffer.isBuffer(b) && this.append(b)
    }.bind(this))
  }

  DuplexStream.call(this)
}

util.inherits(BufferList, DuplexStream)

BufferList.prototype._offset = function (offset) {
  var tot = 0, i = 0, _t
  for (; i < this._bufs.length; i++) {
    _t = tot + this._bufs[i].length
    if (offset < _t)
      return [ i, offset - tot ]
    tot = _t
  }
}

BufferList.prototype.append = function (buf) {
  var isBuffer = Buffer.isBuffer(buf) ||
                 buf instanceof BufferList

  // coerce number arguments to strings, since Buffer(number) does
  // uninitialized memory allocation
  if (typeof buf == 'number')
    buf = buf.toString()

  this._bufs.push(isBuffer ? buf : new Buffer(buf))
  this.length += buf.length
  return this
}

BufferList.prototype._write = function (buf, encoding, callback) {
  this.append(buf)
  if (callback)
    callback()
}

BufferList.prototype._read = function (size) {
  if (!this.length)
    return this.push(null)
  size = Math.min(size, this.length)
  this.push(this.slice(0, size))
  this.consume(size)
}

BufferList.prototype.end = function (chunk) {
  DuplexStream.prototype.end.call(this, chunk)

  if (this._callback) {
    this._callback(null, this.slice())
    this._callback = null
  }
}

BufferList.prototype.get = function (index) {
  return this.slice(index, index + 1)[0]
}

BufferList.prototype.slice = function (start, end) {
  return this.copy(null, 0, start, end)
}

BufferList.prototype.copy = function (dst, dstStart, srcStart, srcEnd) {
  if (typeof srcStart != 'number' || srcStart < 0)
    srcStart = 0
  if (typeof srcEnd != 'number' || srcEnd > this.length)
    srcEnd = this.length
  if (srcStart >= this.length)
    return dst || new Buffer(0)
  if (srcEnd <= 0)
    return dst || new Buffer(0)

  var copy   = !!dst
    , off    = this._offset(srcStart)
    , len    = srcEnd - srcStart
    , bytes  = len
    , bufoff = (copy && dstStart) || 0
    , start  = off[1]
    , l
    , i

  // copy/slice everything
  if (srcStart === 0 && srcEnd == this.length) {
    if (!copy) // slice, just return a full concat
      return Buffer.concat(this._bufs)

    // copy, need to copy individual buffers
    for (i = 0; i < this._bufs.length; i++) {
      this._bufs[i].copy(dst, bufoff)
      bufoff += this._bufs[i].length
    }

    return dst
  }

  // easy, cheap case where it's a subset of one of the buffers
  if (bytes <= this._bufs[off[0]].length - start) {
    return copy
      ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
      : this._bufs[off[0]].slice(start, start + bytes)
  }

  if (!copy) // a slice, we need something to copy in to
    dst = new Buffer(len)

  for (i = off[0]; i < this._bufs.length; i++) {
    l = this._bufs[i].length - start

    if (bytes > l) {
      this._bufs[i].copy(dst, bufoff, start)
    } else {
      this._bufs[i].copy(dst, bufoff, start, start + bytes)
      break
    }

    bufoff += l
    bytes -= l

    if (start)
      start = 0
  }

  return dst
}

BufferList.prototype.toString = function (encoding, start, end) {
  return this.slice(start, end).toString(encoding)
}

BufferList.prototype.consume = function (bytes) {
  while (this._bufs.length) {
    if (bytes > this._bufs[0].length) {
      bytes -= this._bufs[0].length
      this.length -= this._bufs[0].length
      this._bufs.shift()
    } else {
      this._bufs[0] = this._bufs[0].slice(bytes)
      this.length -= bytes
      break
    }
  }
  return this
}

BufferList.prototype.duplicate = function () {
  var i = 0
    , copy = new BufferList()

  for (; i < this._bufs.length; i++)
    copy.append(this._bufs[i])

  return copy
}

BufferList.prototype.destroy = function () {
  this._bufs.length = 0;
  this.length = 0;
  this.push(null);
}

;(function () {
  var methods = {
      'readDoubleBE' : 8
    , 'readDoubleLE' : 8
    , 'readFloatBE'  : 4
    , 'readFloatLE'  : 4
    , 'readInt32BE'  : 4
    , 'readInt32LE'  : 4
    , 'readUInt32BE' : 4
    , 'readUInt32LE' : 4
    , 'readInt16BE'  : 2
    , 'readInt16LE'  : 2
    , 'readUInt16BE' : 2
    , 'readUInt16LE' : 2
    , 'readInt8'     : 1
    , 'readUInt8'    : 1
  }

  for (var m in methods) {
    (function (m) {
      BufferList.prototype[m] = function (offset) {
        return this.slice(offset, offset + methods[m])[m](0)
      }
    }(m))
  }
}())

module.exports = BufferList


/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = require("readable-stream/duplex");

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

/*global window, require, define */
(function(_window) {
  'use strict';

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;

  function setupBrowser() {
    // Allow for MSIE11 msCrypto
    var _crypto = _window.crypto || _window.msCrypto;

    if (!_rng && _crypto && _crypto.getRandomValues) {
      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
      //
      // Moderately fast, high quality
      try {
        var _rnds8 = new Uint8Array(16);
        _whatwgRNG = _rng = function whatwgRNG() {
          _crypto.getRandomValues(_rnds8);
          return _rnds8;
        };
        _rng();
      } catch(e) {}
    }

    if (!_rng) {
      // Math.random()-based (RNG)
      //
      // If all else fails, use Math.random().  It's fast, but is of unspecified
      // quality.
      var  _rnds = new Array(16);
      _mathRNG = _rng = function() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }

        return _rnds;
      };
      if ('undefined' !== typeof console && console.warn) {
        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
      }
    }
  }

  function setupNode() {
    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
    //
    // Moderately fast, high quality
    if (true) {
      try {
        var _rb = __webpack_require__(73).randomBytes;
        _nodeRNG = _rng = _rb && function() {return _rb(16);};
        _rng();
      } catch(e) {}
    }
  }

  if (_window) {
    setupBrowser();
  } else {
    setupNode();
  }

  // Buffer class to use
  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = (buf && offset) || 0, ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
      if (ii < 16) { // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [
    _seedBytes[0] | 0x01,
    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
  ];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0, _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof(options) === 'string') {
      buf = (options === 'binary') ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;
  uuid._rng = _rng;
  uuid._mathRNG = _mathRNG;
  uuid._nodeRNG = _nodeRNG;
  uuid._whatwgRNG = _whatwgRNG;

  if (('undefined' !== typeof module) && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else if (true) {
    // Publish as AMD module
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return uuid;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


  } else {
    // Publish as global (in browsers)
    _previousRoot = _window.uuid;

    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _window.uuid = _previousRoot;
      return uuid;
    };

    _window.uuid = uuid;
  }
})('undefined' !== typeof window ? window : null);


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(74)
  , request = __webpack_require__(141)
  ;

module.exports = function debug() {
  if (request.debug) {
    console.error('REQUEST %s', util.format.apply(util, arguments))
  }
}


/***/ })
/******/ ]);