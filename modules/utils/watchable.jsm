var EXPORTED_SYMBOLS = ["Watchable"];

function Watchable() {
  this.watches = [];
}
Watchable.prototype = {
  watch: function(callback) {
    let index = this.watches.length;
    this.watches.push(callback);
    
    function removeFunction() {
      this.watches.splice(index, 1);
    }
    return removeFunction;
  },
  
  send: function() {
    let args = arguments;
    this.watches.forEach(function(callback) {
      callback.apply(null, args);
    });
  }
};