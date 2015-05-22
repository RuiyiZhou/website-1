// AnimationTimer..................................................................
//
// An animation runs for a duration, in milliseconds. 
//
// You can supply an optional transducer function that modifies the percent
// completed for the animation. That modification lets you incorporate
// non-linear motion, such as ease-in, ease-out, elastic, etc.

AnimationTimer = function (duration, transducer)  {
   this.transducer = transducer;

   if (duration !== undefined) this.duration = duration;
   else                        this.duration = 1000;

   this.stopwatch = new Stopwatch();
};

AnimationTimer.prototype = {
       start: function () { this.stopwatch.start();           },
        stop: function () { this.stopwatch.stop();            },
       pause: function () { this.stopwatch.pause();           },
     unpause: function () { this.stopwatch.unpause();         },
    isPaused: function () { return this.stopwatch.isPaused(); },
   isRunning: function () { return this.stopwatch.running;    },
       reset: function () { this.stopwatch.reset();           },

   isExpired: function () {
      return this.stopwatch.getElapsedTime() > this.duration;
   },

   getRealElapsedTime: function () {
      return this.stopwatch.getElapsedTime();
   },
   
   getElapsedTime: function () {
      var elapsedTime = this.stopwatch.getElapsedTime(),
          percentComplete = elapsedTime / this.duration;

      if (percentComplete >= 1) {
         percentComplete = 1.0;
      }

      if (this.transducer !== undefined && percentComplete > 0) {
         elapsedTime =  elapsedTime *
                        (this.transducer(percentComplete) / percentComplete);
      }

      return elapsedTime;
   },

};

AnimationTimer.makeEaseOutTransducer = function (strength) {
   return function (percentComplete) {
      strength = strength ? strength : 1.0;

      return 1 - Math.pow(1 - percentComplete, strength*2);
   };
};

AnimationTimer.makeEaseInTransducer = function (strength) {
   strength = strength ? strength : 1.0;

   return function (percentComplete) {
      return Math.pow(percentComplete, strength*2);
   };
};

AnimationTimer.makeEaseInOutTransducer = function () {
   return function (percentComplete) {
      return percentComplete - Math.sin(percentComplete*2*Math.PI) / (2*Math.PI);
   };
};

AnimationTimer.makeElasticTransducer = function (passes) {
   passes = passes || 3;

   return function (percentComplete) {
       return ((1-Math.cos(percentComplete * Math.PI * passes)) *
               (1 - percentComplete)) + percentComplete;
   };
};

AnimationTimer.makeBounceTransducer = function (bounces) {
   var fn = AnimationTimer.makeElasticTransducer(bounces);

   bounces = bounces || 2;

   return function (percentComplete) {
      percentComplete = fn(percentComplete);
      return percentComplete <= 1 ? percentComplete : 2-percentComplete;
   }; 
};

AnimationTimer.makeLinearTransducer = function () {
   return function (percentComplete) {
      return percentComplete;
   };
};
