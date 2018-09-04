(function() {
  var seats, _ref;

  seats = _.filter((_ref = this.segment.seatSelection) != null ? _ref.seats : void 0, (function(_this) {
    return function(seat) {
      return seat.value !== seatCode;
    };
  })(this));

}).call(this);
