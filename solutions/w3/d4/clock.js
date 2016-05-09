var clock = {
  totalSeconds : 0,

  getSeconds : function() {
    var seconds = this.totalSeconds % 60;

    if(seconds < 10) {
      return "0" + seconds;
    }

    return seconds;
  },

  getMinutes : function() {
    var minutes = (Math.floor(this.totalSeconds/60) % 60);

    if(minutes < 10) {
      return "0" + minutes;
    }

    return minutes;
  },

  getHours : function() {
    var hours = Math.floor((this.totalSeconds/60) / 60);

    if(hours < 10) {
      return "0" + hours;
    }

    return hours;
  },

  timeoutTick : function(startSeconds) {
    if(startSeconds) {
      this.totalSeconds = startSeconds;
    }

    this.totalSeconds += 1;
    this.printTime();
    setTimeout(this.timeoutTick.bind(clock), 1000);
  },

  intervalTick : function(startSeconds) {
    if(startSeconds) {
      this.totalSeconds = startSeconds;
    }

    setInterval(function() {
      this.totalSeconds += 1;
      this.printTime();
    }.bind(clock), 1000);
  },

  printTime: function() {
    console.log(this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds());
  }
};
