(function (require) {
require = (function (cache, modules, cx) {
return function (r) {
if (!modules[r]) throw new Error(r + ' is not a module');
return cache[r] ? cache[r].exports : ((cache[r] = {
exports: {}
}, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports)));
};
})({}, {
0: function (require, module, exports) {
var Timer;

Timer = new function() {
  this.timers = {};
  this.callbacks = {};
  this.timePassed = {};
  this.add = function(arg) {
    var interval, label, startTime, stopAfter, updateCallback;
    label = arg.label, interval = arg.interval, stopAfter = arg.stopAfter, updateCallback = arg.updateCallback;
    this.timePassed[label] = 0;
    this.callbacks[label] = {};
    startTime = Date.now();
    this.timers[label] = setInterval((function(_this) {
      return function() {
        if (typeof updateCallback === "function") {
          updateCallback();
        }
        _this.timePassed[label] = Date.now() - startTime;
        return _this.invokeCallbacks(label, _this.timePassed[label]);
      };
    })(this), interval);
    if (stopAfter) {
      return setTimeout((function(_this) {
        return function() {
          return _this.remove(label);
        };
      })(this), stopAfter);
    }
  };
  this.remove = function(label) {
    clearInterval(this.timers[label]);
    delete this.timers[label];
    delete this.callbacks[label];
    return delete this.timePassed[label];
  };
  this.listen = function(label, targetTime, callbackToInvoke) {
    var base;
    if (!this.callbacks[label]) {
      return console.error("Failed to listen to a timer - '" + label + "' doesn't exist.");
    } else {
      if ((base = this.callbacks[label])[targetTime] == null) {
        base[targetTime] = [];
      }
      return this.callbacks[label][targetTime].push(callbackToInvoke);
    }
  };
  this.invokeCallbacks = function(label, timePassed) {
    var callback, exceededTimePoints, i, j, len, len1, ref, results, timePoint;
    if (this.callbacks[label]) {
      exceededTimePoints = Object.keys(this.callbacks[label]).filter(function(timePoint) {
        return parseFloat(timePoint) < timePassed;
      });
      if (exceededTimePoints.length) {
        results = [];
        for (i = 0, len = exceededTimePoints.length; i < len; i++) {
          timePoint = exceededTimePoints[i];
          ref = this.callbacks[label][timePoint];
          for (j = 0, len1 = ref.length; j < len1; j++) {
            callback = ref[j];
            callback();
          }
          results.push(delete this.callbacks[label][timePoint]);
        }
        return results;
      }
    }
  };
  return this;
};

module.exports = Timer;

;
return module.exports;
}
}, this);
return require(0);
}).call(this, null);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRpbWVyO1xuXG5UaW1lciA9IG5ldyBmdW5jdGlvbigpIHtcbiAgdGhpcy50aW1lcnMgPSB7fTtcbiAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgdGhpcy50aW1lUGFzc2VkID0ge307XG4gIHRoaXMuYWRkID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgdmFyIGludGVydmFsLCBsYWJlbCwgc3RhcnRUaW1lLCBzdG9wQWZ0ZXIsIHVwZGF0ZUNhbGxiYWNrO1xuICAgIGxhYmVsID0gYXJnLmxhYmVsLCBpbnRlcnZhbCA9IGFyZy5pbnRlcnZhbCwgc3RvcEFmdGVyID0gYXJnLnN0b3BBZnRlciwgdXBkYXRlQ2FsbGJhY2sgPSBhcmcudXBkYXRlQ2FsbGJhY2s7XG4gICAgdGhpcy50aW1lUGFzc2VkW2xhYmVsXSA9IDA7XG4gICAgdGhpcy5jYWxsYmFja3NbbGFiZWxdID0ge307XG4gICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpbWVyc1tsYWJlbF0gPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdXBkYXRlQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy50aW1lUGFzc2VkW2xhYmVsXSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgICAgIHJldHVybiBfdGhpcy5pbnZva2VDYWxsYmFja3MobGFiZWwsIF90aGlzLnRpbWVQYXNzZWRbbGFiZWxdKTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIGludGVydmFsKTtcbiAgICBpZiAoc3RvcEFmdGVyKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmUobGFiZWwpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksIHN0b3BBZnRlcik7XG4gICAgfVxuICB9O1xuICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyc1tsYWJlbF0pO1xuICAgIGRlbGV0ZSB0aGlzLnRpbWVyc1tsYWJlbF07XG4gICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2xhYmVsXTtcbiAgICByZXR1cm4gZGVsZXRlIHRoaXMudGltZVBhc3NlZFtsYWJlbF07XG4gIH07XG4gIHRoaXMubGlzdGVuID0gZnVuY3Rpb24obGFiZWwsIHRhcmdldFRpbWUsIGNhbGxiYWNrVG9JbnZva2UpIHtcbiAgICB2YXIgYmFzZTtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2xhYmVsXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbGlzdGVuIHRvIGEgdGltZXIgLSAnXCIgKyBsYWJlbCArIFwiJyBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChiYXNlID0gdGhpcy5jYWxsYmFja3NbbGFiZWxdKVt0YXJnZXRUaW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGJhc2VbdGFyZ2V0VGltZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrc1tsYWJlbF1bdGFyZ2V0VGltZV0ucHVzaChjYWxsYmFja1RvSW52b2tlKTtcbiAgICB9XG4gIH07XG4gIHRoaXMuaW52b2tlQ2FsbGJhY2tzID0gZnVuY3Rpb24obGFiZWwsIHRpbWVQYXNzZWQpIHtcbiAgICB2YXIgY2FsbGJhY2ssIGV4Y2VlZGVkVGltZVBvaW50cywgaSwgaiwgbGVuLCBsZW4xLCByZWYsIHJlc3VsdHMsIHRpbWVQb2ludDtcbiAgICBpZiAodGhpcy5jYWxsYmFja3NbbGFiZWxdKSB7XG4gICAgICBleGNlZWRlZFRpbWVQb2ludHMgPSBPYmplY3Qua2V5cyh0aGlzLmNhbGxiYWNrc1tsYWJlbF0pLmZpbHRlcihmdW5jdGlvbih0aW1lUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGltZVBvaW50KSA8IHRpbWVQYXNzZWQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChleGNlZWRlZFRpbWVQb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gZXhjZWVkZWRUaW1lUG9pbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdGltZVBvaW50ID0gZXhjZWVkZWRUaW1lUG9pbnRzW2ldO1xuICAgICAgICAgIHJlZiA9IHRoaXMuY2FsbGJhY2tzW2xhYmVsXVt0aW1lUG9pbnRdO1xuICAgICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IHJlZltqXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdHMucHVzaChkZWxldGUgdGhpcy5jYWxsYmFja3NbbGFiZWxdW3RpbWVQb2ludF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVyO1xuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKcGJtUmxlQzVqYjJabVpXVWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5Il19