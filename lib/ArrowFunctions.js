"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskCollection =
/*#__PURE__*/
function () {
  function TaskCollection() {
    var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollection);

    this.tasks = tasks;
  }

  _createClass(TaskCollection, [{
    key: "log",
    value: function log() {
      this.tasks.forEach(function (task) {
        return console.log(task);
      });
    }
  }, {
    key: "prepare",
    value: function prepare() {
      this.tasks.forEach(function (task) {
        return task.displaySomeString();
      });
    }
  }]);

  return TaskCollection;
}();

var Task =
/*#__PURE__*/
function () {
  function Task() {
    _classCallCheck(this, Task);
  }

  _createClass(Task, [{
    key: "displaySomeString",
    value: function displaySomeString() {
      console.log("Hello World");
    }
  }]);

  return Task;
}();

new TaskCollection([new Task(), new Task(), new Task(), new Task()]).prepare();
var names = ['Taylor', 'Jeffrey', 'Adam', 'Matt'];
names = names.map(function (name) {
  return name + ' is cool.';
});
console.log(names);