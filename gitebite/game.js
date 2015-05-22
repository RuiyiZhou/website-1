var SnailBait =  function () {
   this.canvas = document.getElementById('game-canvas'),
   this.context = this.canvas.getContext('2d'),

   // HTML elements........................................................
   
   this.fpsElement = document.getElementById('fps'),
   this.toast = document.getElementById('toast'),

   // Constants............................................................

   this.LEFT = 1,
   this.RIGHT = 2,

   /* Collectively, these constants control Snail Bait's time */
         
   this.BACKGROUND_VELOCITY = 35,    // pixels/second
   this.RUN_ANIMATION_RATE = 35,     // frames/second
   this.RUNNER_JUMP_DURATION = 1000, // milliseconds
   this.BUTTON_PACE_VELOCITY = 80,   // pixels/second
   this.SNAIL_PACE_VELOCITY = 50,    // pixels/second
   this.SNAIL_BOMB_VELOCITY = 550,

   this.RUBY_SPARKLE_DURATION = 200,     // milliseconds
   this.RUBY_SPARKLE_INTERVAL = 500,     // milliseconds
   this.SAPPHIRE_SPARKLE_DURATION = 100, // milliseconds
   this.SAPPHIRE_SPARKLE_INTERVAL = 300, // milliseconds
   this.SAPPHIRE_BOUNCE_RISE_DURATION = 80, // milliseconds

   this.GRAVITY_FORCE = 9.81,
   this.PIXELS_PER_METER = this.canvas.width / 10; // 10 meters, randomly selected width

   this.PAUSED_CHECK_INTERVAL = 200,
   this.DEFAULT_TOAST_TIME = 3000, // 3 seconds

   this.EXPLOSION_CELLS_HEIGHT = 62,
   this.EXPLOSION_DURATION = 500,

   this.NUM_TRACKS = 3,

   this.PLATFORM_HEIGHT = 8,  
   this.PLATFORM_STROKE_WIDTH = 2,
   this.PLATFORM_STROKE_STYLE = 'rgb(0,0,0)',

   // Platform scrolling offset is PLATFORM_VELOCITY_MULTIPLIER *
   // backgroundOffset. The platforms move PLATFORM_VELOCITY_MULTIPLIER
   // times as fast as the background.

   this.PLATFORM_VELOCITY_MULTIPLIER = 4.35,
   
   // Sounds............................................................

   this.COIN_VOLUME = 1.0,
   this.SOUNDTRACK_VOLUME = 0.12,
   this.JUMP_WHISTLE_VOLUME = 0.05,
   this.PLOP_VOLUME = 0.20,
   this.THUD_VOLUME = 0.20,
   this.FALLING_WHISTLE_VOLUME = 0.10,
   this.EXPLOSION_VOLUME = 0.25,
   this.CHIMES_VOLUME = 1.0,

   // Sprite sheet cells................................................

   this.RUNNER_CELLS_WIDTH = 40, // pixels
   this.RUNNER_CELLS_HEIGHT = 52, // pixels

   this.RUNNER_HEIGHT = 43,
   this.RUNNER_JUMP_HEIGHT = 120,

   this.RUN_ANIMATION_INITIAL_RATE = 0,

   this.BAT_CELLS_HEIGHT = 34, // No constant for bat cell width, which varies

   this.BEE_CELLS_HEIGHT = 50,
   this.BEE_CELLS_WIDTH  = 50,

   this.BUTTON_CELLS_HEIGHT  = 20,
   this.BUTTON_CELLS_WIDTH   = 30,

   this.COIN_CELLS_HEIGHT = 28,
   this.COIN_CELLS_WIDTH  = 25,

   this.RUBY_CELLS_HEIGHT = 27,
   this.RUBY_CELLS_WIDTH = 27,

   this.SAPPHIRE_CELLS_HEIGHT = 27,
   this.SAPPHIRE_CELLS_WIDTH  = 27,

   this.SNAIL_BOMB_CELLS_HEIGHT = 20,
   this.SNAIL_BOMB_CELLS_WIDTH  = 20,

   this.SNAIL_CELLS_HEIGHT = 34,
   this.SNAIL_CELLS_WIDTH  = 64,

   this.INITIAL_BACKGROUND_VELOCITY = 0,
   this.INITIAL_BACKGROUND_OFFSET = 0,
   this.INITIAL_RUNNER_LEFT = 50,
   this.INITIAL_RUNNER_TRACK = 1,
   this.INITIAL_RUNNER_VELOCITY = 0,

   // Paused............................................................
   
   this.paused = false,
   this.pauseStartTime = 0,
   this.totalTimePaused = 0,

   this.windowHasFocus = true,

   // Track baselines...................................................

   this.TRACK_1_BASELINE = 323,
   this.TRACK_2_BASELINE = 223,
   this.TRACK_3_BASELINE = 123,

   // Fps indicator.....................................................
   
   this.fpsToast = document.getElementById('fps'),

   // Images............................................................
   
   this.background  = new Image(),
   this.spritesheet = new Image(),

   // Sounds............................................................

   this.soundCheckbox = document.getElementById('sound-checkbox');
   this.musicCheckbox = document.getElementById('music-checkbox');

   this.soundOn = this.soundCheckbox.checked;
   this.musicOn = this.musicCheckbox.checked;

   this.audioTracks = [ // 8 tracks is more than enough
      new Audio(), new Audio(), new Audio(), new Audio(), 
      new Audio(), new Audio(), new Audio(), new Audio()
   ],

   this.soundtrack = document.getElementById('soundtrack'),
   this.chimesSound = document.getElementById('chimes-sound'),
   this.plopSound = document.getElementById('plop-sound'),
   this.explosionSound = document.getElementById('explosion-sound'),
   this.fallingWhistleSound = document.getElementById('whistle-down-sound'),
   this.coinSound = document.getElementById('coin-sound'),
   this.jumpWhistleSound = document.getElementById('jump-sound'),
   this.thudSound = document.getElementById('thud-sound'),

   // Time..............................................................
   
   this.lastAnimationFrameTime = 0,
   this.lastFpsUpdateTime = 0,
   this.fps = 60,

   // Translation offsets...............................................
   
   this.backgroundOffset = this.INITIAL_BACKGROUND_OFFSET,
   this.spriteOffset = this.INITIAL_BACKGROUND_OFFSET,

   // Velocities........................................................

   this.bgVelocity = this.INITIAL_BACKGROUND_VELOCITY,
   this.platformVelocity,

   // Platforms.........................................................

   this.platformData = [
      // Screen 1.......................................................
      {
         left:      10,
         width:     230,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(150,190,255)',
         opacity:   1.0,
         track:     1,
         pulsate:   false,
      },

      {  left:      250,
         width:     300,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(150,190,255)',
         opacity:   1.0,
         track:     2,
         pulsate:   false,
      },

      {  left:      400,
         width:     125,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(250,0,0)',
         opacity:   1.0,
         track:     3,
         pulsate:   true
      },

      {  left:      633,
         width:     100,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(80,140,230)',
         opacity:   1.0,
         track:     1,
         pulsate:   false,
      },

      // Screen 2.......................................................
               
      {  left:      810,
         width:     100,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(200,200,0)',
         opacity:   1.0,
         track:     2,
         pulsate:   false
      },

      {  left:      1025,
         width:     100,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(80,140,230)',
         opacity:   1.0,
         track:     2,
         pulsate:   false
      },

      {  left:      1200,
         width:     125,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'aqua',
         opacity:   1.0,
         track:     3,
         pulsate:   false
      },

      {  left:      1400,
         width:     180,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(80,140,230)',
         opacity:   1.0,
         track:     1,
         pulsate:   false,
      },

      // Screen 3.......................................................
               
      {  left:      1625,
         width:     100,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(200,200,0)',
         opacity:   1.0,
         track:     2,
         pulsate:   false
      },

      {  left:      1800,
         width:     250,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(80,140,230)',
         opacity:   1.0,
         track:     1,
         pulsate:   false
      },

      {  left:      2000,
         width:     100,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'rgb(200,200,80)',
         opacity:   1.0,
         track:     2,
         pulsate:   false
      },

      {  left:      2100,
         width:     100,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'aqua',
         opacity:   1.0,
         track:     3,
      },


      // Screen 4.......................................................

      {  left:      2269,
         width:     200,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: 'gold',
         opacity:   1.0,
         track:     1,
      },

      {  left:      2500,
         width:     200,
         height:    this.PLATFORM_HEIGHT,
         fillStyle: '#2b950a',
         opacity:   1.0,
         track:     2,
         snail:     true
      },
   ],

   // Runner...........................................................

   this.runnerCellsRight = [
      { left: 414, top: 385, width: 47, height: this.RUNNER_CELLS_HEIGHT },
      { left: 362, top: 385, width: 44, height: this.RUNNER_CELLS_HEIGHT },
      { left: 314, top: 385, width: 39, height: this.RUNNER_CELLS_HEIGHT },
      { left: 265, top: 385, width: 46, height: this.RUNNER_CELLS_HEIGHT },
      { left: 205, top: 385, width: 49, height: this.RUNNER_CELLS_HEIGHT },
      { left: 150, top: 385, width: 46, height: this.RUNNER_CELLS_HEIGHT },
      { left: 96,  top: 385, width: 42, height: this.RUNNER_CELLS_HEIGHT },
      { left: 45,  top: 385, width: 35, height: this.RUNNER_CELLS_HEIGHT },
      { left: 0,   top: 385, width: 35, height: this.RUNNER_CELLS_HEIGHT }
   ],

   this.runnerCellsLeft = [
      { left: 0,   top: 305, width: 47, height: this.RUNNER_CELLS_HEIGHT },
      { left: 55,  top: 305, width: 44, height: this.RUNNER_CELLS_HEIGHT },
      { left: 107, top: 305, width: 39, height: this.RUNNER_CELLS_HEIGHT },
      { left: 152, top: 305, width: 46, height: this.RUNNER_CELLS_HEIGHT },
      { left: 208, top: 305, width: 49, height: this.RUNNER_CELLS_HEIGHT },
      { left: 265, top: 305, width: 46, height: this.RUNNER_CELLS_HEIGHT },
      { left: 320, top: 305, width: 42, height: this.RUNNER_CELLS_HEIGHT },
      { left: 380, top: 305, width: 35, height: this.RUNNER_CELLS_HEIGHT },
      { left: 425, top: 305, width: 35, height: this.RUNNER_CELLS_HEIGHT },
   ],

   // Bats..............................................................
   
   this.batData = [
      { left: 1150, top: this.TRACK_2_BASELINE - this.BAT_CELLS_HEIGHT },
      { left: 1720, top: this.TRACK_2_BASELINE - 2*this.BAT_CELLS_HEIGHT },
      { left: 2000, top: this.TRACK_3_BASELINE }, 
      { left: 2200, top: this.TRACK_3_BASELINE - this.BAT_CELLS_HEIGHT },
      { left: 2400, top: this.TRACK_3_BASELINE - 2*this.BAT_CELLS_HEIGHT },
   ],
   
   // Bees..............................................................

   this.beeData = [
      { left: 190,  top: 250 },
      { left: 350,  top: 150 },
      { left: 944,  top: this.TRACK_2_BASELINE - 1.25*this.BEE_CELLS_HEIGHT },
      { left: 1600, top: 125 },
      { left: 2225, top: 125 },
      { left: 2295, top: 275 },
      { left: 2450, top: 275 },
   ],
   
   // Buttons...........................................................

   this.buttonData = [
      { platformIndex: 2 },
      { platformIndex: 3 },
   ],

   // Coins.............................................................

   this.coinData = [
      { left: 303,  top: this.TRACK_3_BASELINE - this.COIN_CELLS_HEIGHT }, 
      { left: 469,  top: this.TRACK_3_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 600,  top: this.TRACK_1_BASELINE - this.COIN_CELLS_HEIGHT }, 
      { left: 833,  top: this.TRACK_2_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 1050, top: this.TRACK_2_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 1500, top: this.TRACK_1_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 1670, top: this.TRACK_2_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 1870, top: this.TRACK_1_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 1930, top: this.TRACK_1_BASELINE - 2*this.COIN_CELLS_HEIGHT }, 
      { left: 2200, top: this.TRACK_3_BASELINE - 3*this.COIN_CELLS_HEIGHT }, 
   ],

   // Rubies............................................................

   this.rubyData = [
      { left: 120,  top: this.TRACK_1_BASELINE - this.RUBY_CELLS_HEIGHT },
      { left: 880,  top: this.TRACK_2_BASELINE - this.RUBY_CELLS_HEIGHT },
      { left: 1100, top: this.TRACK_2_BASELINE - 2*this.SAPPHIRE_CELLS_HEIGHT }, 
      { left: 1475, top: this.TRACK_1_BASELINE - this.RUBY_CELLS_HEIGHT },
   ],

   // Sapphires.........................................................

   this.sapphireData = [
      { left: 680,  top: this.TRACK_1_BASELINE - this.SAPPHIRE_CELLS_HEIGHT },
      { left: 1700, top: this.TRACK_2_BASELINE - this.SAPPHIRE_CELLS_HEIGHT },
      { left: 2056, top: this.TRACK_2_BASELINE - 3*this.SAPPHIRE_CELLS_HEIGHT/2 },
      { left: 2333, top: this.TRACK_2_BASELINE - this.SAPPHIRE_CELLS_HEIGHT },
   ],

   // Snails............................................................

   this.snailData = [
      { platformIndex: 7 },
   ],
   
   // Spritesheet cells................................................

   this.batCells = [
      { left: 1,   top: 0, width: 32, height: this.BAT_CELLS_HEIGHT },
      { left: 38,  top: 0, width: 46, height: this.BAT_CELLS_HEIGHT },
      { left: 90,  top: 0, width: 32, height: this.BAT_CELLS_HEIGHT },
      { left: 129, top: 0, width: 46, height: this.BAT_CELLS_HEIGHT },
   ],

   this.batRedEyeCells = [
      { left: 185, top: 0, width: 32, height: this.BAT_CELLS_HEIGHT },
      { left: 222, top: 0, width: 46, height: this.BAT_CELLS_HEIGHT },
      { left: 273, top: 0, width: 32, height: this.BAT_CELLS_HEIGHT },
      { left: 313, top: 0, width: 46, height: this.BAT_CELLS_HEIGHT },
   ],
   
   this.beeCells = [
      { left: 5,   top: 234, width: this.BEE_CELLS_WIDTH,
                            height: this.BEE_CELLS_HEIGHT },

      { left: 75,  top: 234, width: this.BEE_CELLS_WIDTH, 
                            height: this.BEE_CELLS_HEIGHT },

      { left: 145, top: 234, width: this.BEE_CELLS_WIDTH, 
                            height: this.BEE_CELLS_HEIGHT }
   ],
   
   this.buttonCells = [
      { left: 2,   top: 192, width: this.BUTTON_CELLS_WIDTH,
                            height: this.BUTTON_CELLS_HEIGHT },

      { left: 45,  top: 192, width: this.BUTTON_CELLS_WIDTH, 
                            height: this.BUTTON_CELLS_HEIGHT }
   ],

   this.coinCells = [
      { left: 2, top: 540, width: this.COIN_CELLS_WIDTH, height: this.COIN_CELLS_HEIGHT }
   ],

   this.explosionCells = [
      { left: 1,   top: 48, width: 50, height: this.EXPLOSION_CELLS_HEIGHT },
      { left: 60,  top: 48, width: 68, height: this.EXPLOSION_CELLS_HEIGHT },
      { left: 143, top: 48, width: 68, height: this.EXPLOSION_CELLS_HEIGHT },
      { left: 230, top: 48, width: 68, height: this.EXPLOSION_CELLS_HEIGHT },
      { left: 305, top: 48, width: 68, height: this.EXPLOSION_CELLS_HEIGHT },
      { left: 389, top: 48, width: 68, height: this.EXPLOSION_CELLS_HEIGHT },
      { left: 470, top: 48, width: 68, height: this.EXPLOSION_CELLS_HEIGHT }
   ],

   this.goldButtonCells = [
      { left: 88,   top: 190, width: this.BUTTON_CELLS_WIDTH,
                              height: this.BUTTON_CELLS_HEIGHT },

      { left: 130,  top: 190, width: this.BUTTON_CELLS_WIDTH,
                              height: this.BUTTON_CELLS_HEIGHT }
   ],

   this.rubyCells = [
      { left: 3,   top: 138, width: this.RUBY_CELLS_WIDTH,
                             height: this.RUBY_CELLS_HEIGHT },

      { left: 39,  top: 138, width: this.RUBY_CELLS_WIDTH, 
                             height: this.RUBY_CELLS_HEIGHT },

      { left: 76,  top: 138, width: this.RUBY_CELLS_WIDTH, 
                             height: this.RUBY_CELLS_HEIGHT },

      { left: 112, top: 138, width: this.RUBY_CELLS_WIDTH, 
                             height: this.RUBY_CELLS_HEIGHT },

      { left: 148, top: 138, width: this.RUBY_CELLS_WIDTH, 
                             height: this.RUBY_CELLS_HEIGHT }
   ],

   this.sapphireCells = [
      { left: 185,   top: 138, width: this.SAPPHIRE_CELLS_WIDTH,
                               height: this.SAPPHIRE_CELLS_HEIGHT },

      { left: 220,  top: 138, width: this.SAPPHIRE_CELLS_WIDTH, 
                               height: this.SAPPHIRE_CELLS_HEIGHT },

      { left: 258,  top: 138, width: this.SAPPHIRE_CELLS_WIDTH, 
                               height: this.SAPPHIRE_CELLS_HEIGHT },

      { left: 294, top: 138, width: this.SAPPHIRE_CELLS_WIDTH, 
                               height: this.SAPPHIRE_CELLS_HEIGHT },

      { left: 331, top: 138, width: this.SAPPHIRE_CELLS_WIDTH, 
                               height: this.SAPPHIRE_CELLS_HEIGHT }
   ],

   this.snailBombCells = [
      { left: 2, top: 512, width: 30, height: 20 }
   ],

   this.snailCells = [
      { left: 142, top: 466, width: this.SNAIL_CELLS_WIDTH,
                             height: this.SNAIL_CELLS_HEIGHT },

      { left: 75,  top: 466, width: this.SNAIL_CELLS_WIDTH, 
                             height: this.SNAIL_CELLS_HEIGHT },

      { left: 2,   top: 466, width: this.SNAIL_CELLS_WIDTH, 
                             height: this.SNAIL_CELLS_HEIGHT },
   ],

   // Sprites...........................................................
  
   this.bats         = [],
   this.bees         = [], 
   this.buttons      = [],
   this.coins        = [],
   this.platforms    = [],
   this.rubies       = [],
   this.sapphires    = [],
   this.snails       = [],
   
   // Sprite artists...................................................

   this.runnerArtist = new SpriteSheetArtist(this.spritesheet,
                                             this.runnerCellsRight),

   this.platformArtist = {
      draw: function (sprite, context) {
         var top;
         
         context.save();

         top = snailBait.calculatePlatformTop(sprite.track);

         context.lineWidth = snailBait.PLATFORM_STROKE_WIDTH;
         context.strokeStyle = snailBait.PLATFORM_STROKE_STYLE;
         context.fillStyle = sprite.fillStyle;

         context.strokeRect(sprite.left, top, sprite.width, sprite.height);
         context.fillRect  (sprite.left, top, sprite.width, sprite.height);

         context.restore();
      }
   },

   // Sprite behaviors........................................................

   // Runner's run behavior...................................................

   this.runBehavior = {
      // Every runAnimationRate milliseconds, this behavior advances the
      // runner's artist to the next frame of the spritesheet, provided the
      // runner is not jumping or falling.
      //
      // This behavior is similar to the more general CycleBehavior behavior in
      // js/behaviors. The difference is that this behavior does not advance
      // the sprite's artist if the sprite is jumping, falling, or the
      // runner's runAnimationRate is 0.

      lastAdvanceTime: 0,
      
      execute: function(sprite, time, fps) {
         if (sprite.runAnimationRate === 0) {
            return;
         }
         
         if (this.lastAdvanceTime === 0) {  // skip first time
            this.lastAdvanceTime = time;
         }
         else if (time - this.lastAdvanceTime > 1000 / sprite.runAnimationRate) {
            sprite.artist.advance();
            this.lastAdvanceTime = time;
         }
      }
   },

   // Runner's jump behavior..................................................

   this.jumpBehavior = {
      pause: function (sprite) {
         if (sprite.ascendAnimationTimer.isRunning()) {
            sprite.ascendAnimationTimer.pause();
         }
         else if (!sprite.descendAnimationTimer.isRunning()) {
            sprite.descendAnimationTimer.pause();
         }
      },

      unpause: function (sprite) {
         if (sprite.ascendAnimationTimer.isRunning()) {
            sprite.ascendAnimationTimer.unpause();
         }
         else if (sprite.descendAnimationTimer.isRunning()) {
            sprite.descendAnimationTimer.unpause();
         }
      },

      jumpIsOver: function (sprite) {
         return ! sprite.ascendAnimationTimer.isRunning() &&
                ! sprite.descendAnimationTimer.isRunning();
      },

      // Ascent...............................................................

      isAscending: function (sprite) {
         return sprite.ascendAnimationTimer.isRunning();
      },
      
      ascend: function (sprite) {
         var elapsed = sprite.ascendAnimationTimer.getElapsedTime(),
             deltaH  = elapsed / (sprite.JUMP_DURATION/2) * sprite.JUMP_HEIGHT;
         sprite.top = sprite.verticalLaunchPosition - deltaH;
      },

      isDoneAscending: function (sprite) {
         return sprite.ascendAnimationTimer.getElapsedTime() > sprite.JUMP_DURATION/2;
      },
      
      finishAscent: function (sprite) {
         sprite.jumpApex = sprite.top;
         sprite.ascendAnimationTimer.stop();
         sprite.descendAnimationTimer.start();
      },
      
      // Descents.............................................................

      isDescending: function (sprite) {
         return sprite.descendAnimationTimer.isRunning();
      },

      descend: function (sprite, verticalVelocity, fps) {
         var elapsed = sprite.descendAnimationTimer.getElapsedTime(),
             deltaH  = elapsed / (sprite.JUMP_DURATION/2) * sprite.JUMP_HEIGHT;

         sprite.top = sprite.jumpApex + deltaH;
      },
      
      isDoneDescending: function (sprite) {
         return sprite.descendAnimationTimer.getElapsedTime() > sprite.JUMP_DURATION/2;
      },

      finishDescent: function (sprite) {
         sprite.stopJumping();

         if (snailBait.isOverPlatform(sprite) !== -1) {
            sprite.top = sprite.verticalLaunchPosition;
         }
         else {
            sprite.fall(snailBait.GRAVITY_FORCE *
                        (sprite.descendAnimationTimer.getElapsedTime()/1000) *
                        snailBait.PIXELS_PER_METER);
         }
      },
      
      // Execute..............................................................

      execute: function(sprite, time, fps) {
         if ( ! sprite.jumping || sprite.exploding) {
            return;
         }

         if (this.jumpIsOver(sprite)) {
            sprite.jumping = false;
            return;
         }

         if (this.isAscending(sprite)) {
            if ( ! this.isDoneAscending(sprite)) { this.ascend(sprite); }
            else                                 { this.finishAscent(sprite); }
         }
         else if (this.isDescending(sprite)) {
            if ( ! this.isDoneDescending(sprite)) { this.descend(sprite); }
            else                                  { this.finishDescent(sprite); }
         }
      } 
   },

   // Runner's fall behavior..................................................

   this.fallBehavior = {
      isOutOfPlay: function (sprite) {
         return sprite.top > snailBait.TRACK_1_BASELINE;
      },

      willFallBelowCurrentTrack: function (sprite, deltaY) {
         return sprite.top + sprite.height + deltaY >
                snailBait.calculatePlatformTop(sprite.track);
      },

      fallOnPlatform: function (sprite) {
         sprite.top = snailBait.calculatePlatformTop(sprite.track) - sprite.height;
         sprite.stopFalling();
         snailBait.playSound(snailBait.thudSound);
      },

      setSpriteVelocity: function (sprite) {
         var fallingElapsedTime;

         sprite.velocityY = sprite.initialVelocityY + snailBait.GRAVITY_FORCE *
                            (sprite.fallAnimationTimer.getElapsedTime()/1000) *
                            snailBait.PIXELS_PER_METER;
      },

      calculateVerticalDrop: function (sprite, fps) {
         return sprite.velocityY / fps;
      },

      isPlatformUnderneath: function (sprite) {
         return snailBait.isOverPlatform(sprite) !== -1;
      },
      
      execute: function (sprite, time, fps) {
         var deltaY;

         if (sprite.jumping) {
            return;
         }

         if (this.isOutOfPlay(sprite) || sprite.exploding) {
            if (sprite.falling) {
               sprite.stopFalling();
            }
            return;
         }
         
         if (!sprite.falling) {
            if (!sprite.exploding && !this.isPlatformUnderneath(sprite)) {
               sprite.fall();
            }
            return;
         }

         this.setSpriteVelocity(sprite);
         deltaY = this.calculateVerticalDrop(sprite, fps);
               
         if (!this.willFallBelowCurrentTrack(sprite, deltaY)) {
            sprite.top += deltaY;
         }
         else { // will fall below current track

            if (this.isPlatformUnderneath(sprite)) {
               this.fallOnPlatform(sprite);
               sprite.stopFalling();
            }
            else {
               sprite.track--;

               sprite.top += deltaY;

               if (sprite.track === 0) {
                  snailBait.playSound(snailBait.fallingWhistleSound);
               }
            }
         }
      }
   },

   // Runner's collide behavior...............................................

   this.collideBehavior = {
      execute: function (sprite, time, fps, context) {
         var otherSprite;

         for (var i=0; i < snailBait.sprites.length; ++i) { 
            otherSprite = snailBait.sprites[i];

            if (this.isCandidateForCollision(sprite, otherSprite)) {
               if (this.didCollide(sprite, otherSprite, context)) { 
                  this.processCollision(sprite, otherSprite);
               }
            }
         }
      },

      isCandidateForCollision: function (sprite, otherSprite) {
         return sprite !== otherSprite &&
                sprite.visible && otherSprite.visible &&
                !sprite.exploding && !otherSprite.exploding &&
                otherSprite.left - otherSprite.offset < sprite.left + sprite.width;
      }, 

      didSnailBombCollideWithRunner: function (left, top, right, bottom,
                                         snailBomb, context) {
         // Determine if the center of the snail bomb lies within
         // the runner's bounding box  

         context.beginPath();
         context.rect(left, top, right - left, bottom - top);

         return context.isPointInPath(
                       snailBomb.left - snailBomb.offset + snailBomb.width/2,
                       snailBomb.top + snailBomb.height/2);
      },

      didRunnerCollideWithOtherSprite: function (left, top, right, bottom,
                                                 centerX, centerY,
                                                 otherSprite, context) {
         // Determine if either of the runner's four corners or its
         // center lie within the other sprite's bounding box. 

         context.beginPath();
         context.rect(otherSprite.left - otherSprite.offset, otherSprite.top,
                      otherSprite.width, otherSprite.height);
         
         return context.isPointInPath(left,    top)     ||
                context.isPointInPath(right,   top)     ||

                context.isPointInPath(centerX, centerY) ||

                context.isPointInPath(left,    bottom)  ||
                context.isPointInPath(right,   bottom);
      },
     
      didCollide: function (sprite, otherSprite, context) {
         var MARGIN_TOP = 10,
             MARGIN_LEFT = 10,
             MARGIN_RIGHT = 10,
             MARGIN_BOTTOM = 0,
             left = sprite.left + sprite.offset + MARGIN_LEFT,
             right = sprite.left + sprite.offset + sprite.width - MARGIN_RIGHT,
             top = sprite.top + MARGIN_TOP,
             bottom = sprite.top + sprite.height - MARGIN_BOTTOM,
             centerX = left + sprite.width/2,
             centerY = sprite.top + sprite.height/2;

         if (otherSprite.type === 'snail bomb') {
            return this.didSnailBombCollideWithRunner(left, top, right, bottom,
                                                otherSprite, context);
         }
         else {
            return this.didRunnerCollideWithOtherSprite(left, top, right, bottom,
                                                  centerX, centerY,
                                                  otherSprite, context);
         }
      },

      processCollision: function (sprite, otherSprite) {
         if (otherSprite.value) { // Modify Snail Bait sprites so they have values
            // Keep score...
         }

         if ('button' === otherSprite.type && (sprite.falling || sprite.jumping)) {
            otherSprite.visible = false;
            snailBait.playSound(snailBait.plopSound);
         }

         if ('coin'  === otherSprite.type    ||
             'sapphire' === otherSprite.type ||
             'ruby' === otherSprite.type     || 
             'snail bomb' === otherSprite.type) {
            otherSprite.visible = false;

            if ('coin' === otherSprite.type) {
               snailBait.playSound(snailBait.coinSound);
            }
            if ('sapphire' === otherSprite.type || 'ruby' === otherSprite.type) {
               snailBait.playSound(snailBait.chimesSound);
            }
         }

         if ('bat' === otherSprite.type   ||
             'bee' === otherSprite.type   ||
             'snail' === otherSprite.type || 
             'snail bomb' === otherSprite.type) {
            snailBait.explode(sprite);
         }

         if (sprite.jumping && 'platform' === otherSprite.type) {
            this.processPlatformCollisionDuringJump(sprite, otherSprite);
         }
      },

      processPlatformCollisionDuringJump: function (sprite, platform) {
         var isDescending = sprite.descendAnimationTimer.isRunning();

         sprite.stopJumping();

         if (isDescending) {
            sprite.track = platform.track; 
            sprite.top = snailBait.calculatePlatformTop(sprite.track) - sprite.height;
         }
         else { // Collided with platform while ascending
            snailBait.playSound(snailBait.plopSound);
            sprite.fall(); 
         }
      }
   };

   // General pace behavior...................................................

   this.paceBehavior = {
      execute: function (sprite, time, fps) {
         var sRight = sprite.left + sprite.width,
             pRight = sprite.platform.left + sprite.platform.width,
             pixelsToMove = sprite.velocityX / fps;

         if (sprite.direction === undefined) {
            sprite.direction = snailBait.RIGHT;
         }

         if (sprite.velocityX === 0) {
            if (sprite.type === 'snail') {
               sprite.velocityX = snailBait.SNAIL_PACE_VELOCITY;
            }
            else {
               sprite.velocityX = snailBait.BUTTON_PACE_VELOCITY;
            }
         }

         if (sRight > pRight && sprite.direction === snailBait.RIGHT) {
            sprite.direction = snailBait.LEFT;
         }
         else if (sprite.left < sprite.platform.left &&
                  sprite.direction === snailBait.LEFT) {
            sprite.direction = snailBait.RIGHT;
         }

         if (sprite.direction === snailBait.RIGHT) {
            sprite.left += pixelsToMove;
         }
         else {
            sprite.left -= pixelsToMove;
         }
      }
   };

   // Snail shoot behavior....................................................

   this.snailShootBehavior = { // sprite is the snail
      execute: function (sprite, time, fps) {
         var bomb = sprite.bomb;

         if (!snailBait.spriteInView(sprite)) {
            return;
         }

         if (! bomb.visible && sprite.artist.cellIndex === 2) {
            bomb.left = sprite.left;
            bomb.visible = true;
         }
      }
   };

   this.snailBombMoveBehavior = {
      execute: function(sprite, time, fps) {  // sprite is the bomb
         if (sprite.visible && snailBait.spriteInView(sprite)) {
            sprite.left -= snailBait.SNAIL_BOMB_VELOCITY / fps;
         }

         if (!snailBait.spriteInView(sprite)) {
            sprite.visible = false;
         }
      }
   };

   // Sprites...........................................................

   this.runner = new Sprite('runner',           // type
                            this.runnerArtist,  // artist
                            [ this.runBehavior, // behaviors
                              this.jumpBehavior,
                              this.fallBehavior,
                              this.collideBehavior
                            ]); 

   this.runner.width = this.RUNNER_CELLS_WIDTH;
   this.runner.height = this.RUNNER_CELLS_HEIGHT;

   // All sprites.......................................................
   // 
   // (addSpritesToSpriteArray() adds sprites from the preceding sprite
   // arrays to the sprites array)

   this.sprites = [ this.runner ];  

   this.explosionAnimator = new SpriteAnimator(
      this.explosionCells,          // Animation cells
      this.EXPLOSION_DURATION,      // Duration of the explosion

      function (sprite, animator) { // Callback after animation
         sprite.exploding = false; 

         if (sprite.jumping) {
            sprite.stopJumping();
         }
         else if (sprite.falling) {
            sprite.stopFalling();
         }

         sprite.visible = true;
         sprite.track = 1;
         sprite.top = snailBait.calculatePlatformTop(sprite.track) - sprite.height;
         sprite.artist.cellIndex = 0;
         sprite.runAnimationRate = snailBait.RUN_ANIMATION_RATE;
      }
   );
};

// SnailBait's prototype --------------------------------------------------

SnailBait.prototype = {
   // Drawing..............................................................

   draw: function (now) {
      this.setPlatformVelocity();
      this.setTranslationOffsets();

      this.drawBackground();

      this.updateSprites(now);
      this.drawSprites();
   },

   setPlatformVelocity: function () {
      this.platformVelocity = this.bgVelocity * this.PLATFORM_VELOCITY_MULTIPLIER; 
   },

   setTranslationOffsets: function () {
      this.setBackgroundTranslationOffset();
      this.setSpriteTranslationOffsets();
   },
   
   setSpriteTranslationOffsets: function () {
      var i, sprite;
   
      this.spriteOffset += this.platformVelocity / this.fps; // In step with platforms

      for (i=0; i < this.sprites.length; ++i) {
         sprite = this.sprites[i];
      
         if ('runner' !== sprite.type) {
            sprite.offset = this.spriteOffset; 
         }
      }
   },

   setBackgroundTranslationOffset: function () {
      var offset = this.backgroundOffset + this.bgVelocity/this.fps;
   
      if (offset > 0 && offset < this.background.width) {
         this.backgroundOffset = offset;
      }
      else {
         this.backgroundOffset = 0;
      }
   },
   
   drawBackground: function () {
      this.context.save();
   
      this.context.globalAlpha = 1.0;
      this.context.translate(-this.backgroundOffset, 0);
   
      // Initially onscreen:
      this.context.drawImage(this.background, 0, 0,
                        this.background.width, this.background.height);
   
      // Initially offscreen:
      this.context.drawImage(this.background, this.background.width, 0,
                        this.background.width+1, this.background.height);
   
      this.context.restore();
   },
   
   calculateFps: function (now) {
      var fps = 1000 / (now - this.lastAnimationFrameTime);
      this.lastAnimationFrameTime = now;
   
      if (now - this.lastFpsUpdateTime > 1000) {
         this.lastFpsUpdateTime = now;
         this.fpsElement.innerHTML = fps.toFixed(0) + ' fps';
      }

      return fps; 
   },
   
   calculatePlatformTop: function (track) {
      var top;
   
      if      (track === 1) { top = this.TRACK_1_BASELINE; }
      else if (track === 2) { top = this.TRACK_2_BASELINE; }
      else if (track === 3) { top = this.TRACK_3_BASELINE; }

      return top;
   },

   turnLeft: function () {
      this.bgVelocity = -this.BACKGROUND_VELOCITY;
      this.runner.runAnimationRate = this.RUN_ANIMATION_RATE;
      this.runnerArtist.cells = this.runnerCellsLeft;
      this.runner.direction = this.LEFT;
   },

   turnRight: function () {
      this.bgVelocity = this.BACKGROUND_VELOCITY;
      this.runner.runAnimationRate = this.RUN_ANIMATION_RATE;
      this.runnerArtist.cells = this.runnerCellsRight;
      this.runner.direction = this.RIGHT;
   },
   
   // Sprites..............................................................

   equipRunner: function () {
      // Animation rate, track, direction, velocity,
      // position, and artist cells........................................
      
      this.runner.runAnimationRate = this.RUN_ANIMATION_INITIAL_RATE,
   
      this.runner.track = this.INITIAL_RUNNER_TRACK;
      this.runner.direction = this.LEFT;
      this.runner.velocityX = this.INITIAL_RUNNER_VELOCITY;
      this.runner.left = this.INITIAL_RUNNER_LEFT;
      this.runner.top = this.calculatePlatformTop(this.runner.track) -
                        this.RUNNER_CELLS_HEIGHT;

      this.runner.artist.cells = this.runnerCellsRight;
      this.runner.offset = 0;

      this.equipRunnerForJumping();
      this.equipRunnerForFalling();
   },

   equipRunnerForFalling: function () {
      this.runner.falling = false;
      this.runner.fallAnimationTimer = new AnimationTimer();

      this.runner.fall = function (initialVelocity) {
         this.velocityY = initialVelocity || 0;
         this.initialVelocityY = initialVelocity || 0;
         this.fallAnimationTimer.start();
         this.falling = true;
      }

      this.runner.stopFalling = function () {
         this.falling = false;
         this.velocityY = 0;
         this.fallAnimationTimer.stop();
      }
   },
   
   equipRunnerForJumping: function () {
      this.runner.JUMP_DURATION = this.RUNNER_JUMP_DURATION; // milliseconds
      this.runner.JUMP_HEIGHT = this.RUNNER_JUMP_HEIGHT;

      this.runner.jumping = false;

      this.runner.ascendAnimationTimer =
         new AnimationTimer(this.runner.JUMP_DURATION/2,
                            AnimationTimer.makeEaseOutTransducer(1.1));

      this.runner.descendAnimationTimer =
         new AnimationTimer(this.runner.JUMP_DURATION/2,
                            AnimationTimer.makeEaseInTransducer(1.1));

      this.runner.stopJumping = function () {
         this.jumping = false;
         this.ascendAnimationTimer.stop();
         this.descendAnimationTimer.stop();
         this.runAnimationRate = snailBait.RUN_ANIMATION_RATE;
      };
      
      this.runner.jump = function () {
         if (this.jumping) // 'this' is the runner
            return;

         this.runAnimationRate = 0;
         this.jumping = true;
         this.verticalLaunchPosition = this.top;
         this.ascendAnimationTimer.start();

         snailBait.playSound(snailBait.jumpWhistleSound);
      };
   },
   
   createPlatformSprites: function () {
      var sprite, pd;  // Sprite, Platform data
   
      for (var i=0; i < this.platformData.length; ++i) {
         pd = this.platformData[i];
         sprite  = new Sprite('platform', this.platformArtist);

         sprite.left      = pd.left;
         sprite.width     = pd.width;
         sprite.height    = pd.height;
         sprite.fillStyle = pd.fillStyle;
         sprite.opacity   = pd.opacity;
         sprite.track     = pd.track;
         sprite.button    = pd.button;
         sprite.pulsate   = pd.pulsate;

         sprite.top = this.calculatePlatformTop(pd.track);
   
         if (sprite.pulsate) {
            sprite.behaviors = [ new PulseBehavior(1000, 0.5) ];
         }

         this.platforms.push(sprite);
      }
   },
 
   explode: function (sprite, silent) {
      if (sprite.runAnimationRate === 0) {
         sprite.runAnimationRate = this.RUN_ANIMATION_RATE;
      }
               
      sprite.exploding = true;

      this.playSound(this.explosionSound);
      this.explosionAnimator.start(sprite, true);  // true means sprite reappears
   },

   // Animation............................................................

   animate: function (now) { 
      if (snailBait.paused) {
         setTimeout( function () {
            requestNextAnimationFrame(snailBait.animate);
         }, snailBait.PAUSED_CHECK_INTERVAL);
      }
      else {
         snailBait.fps = snailBait.calculateFps(now); 
         snailBait.draw(now);
         requestNextAnimationFrame(snailBait.animate);
      }
   },

   togglePausedStateOfAllBehaviors: function () {
      var behavior;
   
      for (var i=0; i < this.sprites.length; ++i) { 
         sprite = this.sprites[i];

         for (var j=0; j < sprite.behaviors.length; ++j) { 
            behavior = sprite.behaviors[j];

            if (this.paused) {
               if (behavior.pause) {
                  behavior.pause(sprite);
               }
            }
            else {
               if (behavior.unpause) {
                  behavior.unpause(sprite);
               }
            }
         }
      }
   },

   togglePaused: function () {
      var now = +new Date();

      this.paused = !this.paused;
      this.togglePausedStateOfAllBehaviors();
   
      if (this.paused) {
         this.pauseStartTime = now;
      }
      else {
         this.lastAnimationFrameTime += (now - this.pauseStartTime);
      }

      if (this.paused && this.musicOn) {
         this.soundtrack.pause();
      }
      else if (!this.paused && this.musicOn) {
         this.soundtrack.play();
      }
   },

   // Playing sounds.......................................................

   soundIsPlaying: function (sound) {
      return !sound.ended && sound.currentTime > 0;
   },

   playSound: function (sound) {
      var track, index;

      if (this.soundOn) {
         if (!this.soundIsPlaying(sound)) {
            sound.play();
         }
         else {
            for (i=0; index < this.audioTracks.length; ++index) {
               track = this.audioTracks[index];
            
               if (!this.soundIsPlaying(track)) {
                  track.src = sound.currentSrc;
                  track.load();
                  track.volume = sound.volume;
                  track.play();

                  break;
               }
            }
         }              
      }
   },

   initializeSounds: function () {
      this.soundtrack.volume          = this.SOUNDTRACK_VOLUME;
      this.jumpWhistleSound.volume    = this.JUMP_WHISTLE_VOLUME;
      this.thudSound.volume           = this.THUD_VOLUME;
      this.fallingWhistleSound.volume = this.FALLING_WHISTLE_VOLUME;
      this.chimesSound.volume         = this.CHIMES_VOLUME;
      this.explosionSound.volume      = this.EXPLOSION_VOLUME;
      this.coinSound.volume           = this.COIN_VOLUME;
   },


   // ------------------------- INITIALIZATION ----------------------------

   start: function () {
      this.createSprites();
      this.initializeImages();
      this.initializeSounds();
      this.equipRunner();
      this.splashToast('Good Luck!');

      document.getElementById('instructions').style.opacity =
         snailBait.INSTRUCTIONS_OPACITY;
   },
   
   initializeImages: function () {
      var self = this;

      this.background.src = 'images/background_level_one_dark_red.png';
      this.spritesheet.src = 'images/spritesheet.png';
   
      this.background.onload = function (e) {
         self.startGame();
      };
   },

   startGame: function () {
      if (this.musicOn) {
         this.soundtrack.play();
      }
      requestNextAnimationFrame(this.animate);
   },

   positionSprites: function (sprites, spriteData) {
      var sprite;

      for (var i = 0; i < sprites.length; ++i) {
         sprite = sprites[i];

         if (spriteData[i].platformIndex) { 
            this.putSpriteOnPlatform(sprite,
               this.platforms[spriteData[i].platformIndex]);
         }
         else {
            sprite.top  = spriteData[i].top;
            sprite.left = spriteData[i].left;
         }
      }
   },

   armSnails: function () {
      var snail,
          snailBombArtist = new SpriteSheetArtist(this.spritesheet, this.snailBombCells);

      for (var i=0; i < this.snails.length; ++i) {
         snail = this.snails[i];
         snail.bomb = new Sprite('snail bomb',
                                  snailBombArtist,
                                  [ this.snailBombMoveBehavior ]);

         snail.bomb.width  = snailBait.SNAIL_BOMB_CELLS_WIDTH;
         snail.bomb.height = snailBait.SNAIL_BOMB_CELLS_HEIGHT;

         snail.bomb.top = snail.top + snail.bomb.height/2;
         snail.bomb.left = snail.left + snail.bomb.width/2;
         snail.bomb.visible = false;

         snail.bomb.snail = snail;  // Snail bombs maintain a reference to their snail

         this.sprites.push(snail.bomb);
      }
   },
   
   addSpritesToSpriteArray: function () {
      for (var i=0; i < this.platforms.length; ++i) {
         this.sprites.push(this.platforms[i]);
      }

      for (var i=0; i < this.bats.length; ++i) {
         this.sprites.push(this.bats[i]);
      }

      for (var i=0; i < this.bees.length; ++i) {
         this.sprites.push(this.bees[i]);
      }

      for (var i=0; i < this.buttons.length; ++i) {
         this.sprites.push(this.buttons[i]);
      }

      for (var i=0; i < this.coins.length; ++i) {
         this.sprites.push(this.coins[i]);
      }

      for (var i=0; i < this.rubies.length; ++i) {
         this.sprites.push(this.rubies[i]);
      }

      for (var i=0; i < this.sapphires.length; ++i) {
         this.sprites.push(this.sapphires[i]);
      }

     for (var i=0; i < this.snails.length; ++i) {
         this.sprites.push(this.snails[i]);
      }
   },

   createBatSprites: function () {
      var bat,
          batArtist = new SpriteSheetArtist(this.spritesheet, this.batCells),
    redEyeBatArtist = new SpriteSheetArtist(this.spritesheet, this.batRedEyeCells);

      for (var i = 0; i < this.batData.length; ++i) {
         if (i % 2 === 0) bat = new Sprite('bat', batArtist);
         else             bat = new Sprite('bat', redEyeBatArtist);

         bat.width = this.BAT_CELLS_WIDTH;
         bat.height = this.BAT_CELLS_HEIGHT;

         this.bats.push(bat);
      }
   },

   createBeeSprites: function () {
      var bee,
          beeArtist;

      for (var i = 0; i < this.beeData.length; ++i) {
         bee = new Sprite('bee',
                          new SpriteSheetArtist(this.spritesheet, this.beeCells),
                          [ new CycleBehavior(100) ]);

         bee.width = this.BEE_CELLS_WIDTH;
         bee.height = this.BEE_CELLS_HEIGHT;

         this.bees.push(bee);
      }
   },

   createButtonSprites: function () {
      var button,
          buttonArtist = new SpriteSheetArtist(this.spritesheet,
                                               this.buttonCells),
      goldButtonArtist = new SpriteSheetArtist(this.spritesheet,
                                               this.goldButtonCells);

      for (var i = 0; i < this.buttonData.length; ++i) {
         if (i === this.buttonData.length - 1) {
            button = new Sprite('button',
                                 goldButtonArtist,
                                 [ this.paceBehavior ]);
         }
         else {
            button = new Sprite('button',
                                 buttonArtist, 
                                 [ this.paceBehavior ]);
         }

         button.width = this.BUTTON_CELLS_WIDTH;
         button.height = this.BUTTON_CELLS_HEIGHT;

         this.buttons.push(button);
      }
   },
   
   createCoinSprites: function () {
      var coin,
          coinArtist = new SpriteSheetArtist(this.spritesheet, this.coinCells);
   
      for (var i = 0; i < this.coinData.length; ++i) {
         coin = new Sprite('coin', coinArtist);

         coin.width = this.COIN_CELLS_WIDTH;
         coin.height = this.COIN_CELLS_HEIGHT;

         this.coins.push(coin);
      }
   },
   
   createSapphireSprites: function () {
      var sapphire,
          sapphireArtist = new SpriteSheetArtist(this.spritesheet, this.sapphireCells);
   
      for (var i = 0; i < this.sapphireData.length; ++i) {
         sapphire = new Sprite('sapphire', sapphireArtist,
                               [ new CycleBehavior(this.SAPPHIRE_SPARKLE_DURATION,
                                           this.SAPPHIRE_SPARKLE_INTERVAL),

                                 new BounceBehavior()
                               ]);

         sapphire.width = this.SAPPHIRE_CELLS_WIDTH;
         sapphire.height = this.SAPPHIRE_CELLS_HEIGHT;

         this.sapphires.push(sapphire);
      }
   },
   
   createRubySprites: function () {
      var ruby,
          rubyArtist = new SpriteSheetArtist(this.spritesheet, this.rubyCells);
   
      for (var i = 0; i < this.rubyData.length; ++i) {
         ruby = new Sprite('ruby', rubyArtist, [ new CycleBehavior(200, 500) ]);
         ruby = new Sprite('ruby', rubyArtist, [ new CycleBehavior(this.RUBY_SPARKLE_DURATION,
                                                           this.RUBY_SPARKLE_INTERVAL) ]);
         ruby.width = this.RUBY_CELLS_WIDTH;
         ruby.height = this.RUBY_CELLS_HEIGHT;
         
         this.rubies.push(ruby);
      }
   },
   
   createSnailSprites: function () {
      var snail,
          snailArtist = new SpriteSheetArtist(this.spritesheet, this.snailCells);
   
      for (var i = 0; i < this.snailData.length; ++i) {
         snail = new Sprite('snail',
                            snailArtist,
                            [ this.paceBehavior,
                              this.snailShootBehavior,
                              new CycleBehavior(300, 1500)
                            ]);

         snail.width  = this.SNAIL_CELLS_WIDTH;
         snail.height = this.SNAIL_CELLS_HEIGHT;

         this.snails.push(snail);
      }
   },
   
   updateSprites: function (now) {
      var sprite;
   
      for (var i=0; i < this.sprites.length; ++i) {
         sprite = this.sprites[i];

         if (sprite.visible && this.spriteInView(sprite)) {
            sprite.update(now, this.fps, this.context);
         }
      }
   },
   
   drawSprites: function() {
      var sprite;
   
      for (var i=0; i < this.sprites.length; ++i) {
         sprite = this.sprites[i];

         if (sprite.visible && this.spriteInView(sprite)) {
            this.context.translate(-sprite.offset, 0);

            sprite.draw(this.context);

            this.context.translate(sprite.offset, 0);
         }
      }
   },
   
   spriteInView: function(sprite) {
      return sprite === this.runner || // runner is always visible
         (sprite.left + sprite.width > this.spriteOffset &&
          sprite.left < this.spriteOffset + this.canvas.width);   
   },

   isOverPlatform: function (sprite, track) {
      var p,
          index = -1,
          center = sprite.left + sprite.offset + sprite.width/2;

      if (track === undefined) { 
         track = sprite.track; // Look on sprite track only
      }

      for (var i=0; i < snailBait.platforms.length; ++i) {
         p = snailBait.platforms[i];

         if (track === p.track) {
            if (center > p.left - p.offset && center < (p.left - p.offset + p.width)) {
               index = i;
               break;
            }
         }
      }
      return index;
   },
   
   putSpriteOnPlatform: function(sprite, platformSprite) {
      sprite.top  = platformSprite.top - sprite.height;
      sprite.left = platformSprite.left;
      sprite.platform = platformSprite;
   },
   
   createSprites: function() {  
      this.createPlatformSprites(); // Platforms must be created first
      
      this.createBatSprites();
      this.createBeeSprites();
      this.createButtonSprites();
      this.createCoinSprites();
      this.createRubySprites();
      this.createSapphireSprites();
      this.createSnailSprites();

      this.initializeSprites();

      this.addSpritesToSpriteArray();
   },
   
   initializeSprites: function() {  
      for (var i=0; i < snailBait.sprites.length; ++i) { 
         snailBait.sprites[i].offset = 0;
      }

      this.positionSprites(this.bats,       this.batData);
      this.positionSprites(this.bees,       this.beeData);
      this.positionSprites(this.buttons,    this.buttonData);
      this.positionSprites(this.coins,      this.coinData);
      this.positionSprites(this.rubies,     this.rubyData);
      this.positionSprites(this.sapphires,  this.sapphireData);
      this.positionSprites(this.snails,     this.snailData);

      this.armSnails();
   },

   // Toast................................................................

   splashToast: function (text, howLong) {
      howLong = howLong || this.DEFAULT_TOAST_TIME;

      toast.style.display = 'block';
      toast.innerHTML = text;

      setTimeout( function (e) {
         if (snailBait.windowHasFocus) {
            toast.style.opacity = 1.0; // After toast is displayed
         }
      }, 50);

      setTimeout( function (e) {
         if (snailBait.windowHasFocus) {
            toast.style.opacity = 0; // Starts CSS3 transition
         }

         setTimeout( function (e) { 
            if (snailBait.windowHasFocus) {
               toast.style.display = 'none'; 
            }
         }, 480);
      }, howLong);
   },
};
   
// Event processrs.......................................................
   
window.onkeydown = function (e) {
   var key = e.keyCode;

   if (key === 80 || (snailBait.paused && key !== 80)) {  // 'p'
      snailBait.togglePaused();
   }
   
   if (key === 68 || key === 37) { // 'd' or left arrow
      snailBait.turnLeft();
   }
   else if (key === 75 || key === 39) { // 'k' or right arrow
      snailBait.turnRight();
   }
   else if (key === 74) { // 'j'
      if (!snailBait.runner.jumping && !snailBait.runner.falling) {
         snailBait.runner.jump();
      }
   }
};

window.onblur = function (e) {  // pause if unpaused
   snailBait.windowHasFocus = false;
   
   if (!snailBait.paused) {
      snailBait.togglePaused();
   }
};

window.onfocus = function (e) {  // unpause if paused
   var originalFont = snailBait.toast.style.fontSize;

   snailBait.windowHasFocus = true;

   if (snailBait.paused) {
      snailBait.toast.style.font = '128px fantasy';

      snailBait.splashToast('3', 500); // Display 3 for one half second

      setTimeout(function (e) {
         snailBait.splashToast('2', 500); // Display 2 for one half second

         setTimeout(function (e) {
            snailBait.splashToast('1', 500); // Display 1 for one half second

            setTimeout(function (e) {
               if ( snailBait.windowHasFocus) {
                  snailBait.togglePaused();
               }

               setTimeout(function (e) { // Wait for '1' to disappear
                  snailBait.toast.style.fontSize = originalFont;
               }, 2000);
            }, 1000);
         }, 1000);
      }, 1000);
   }
};

// Launch game.........................................................

var snailBait = new SnailBait();
snailBait.start();

// Sound and music controls............................................

snailBait.soundCheckbox.onchange = function (e) {
   snailBait.soundOn = snailBait.soundCheckbox.checked;
};

snailBait.musicCheckbox.onchange = function (e) {
   snailBait.musicOn = snailBait.musicCheckbox.checked;

   if (snailBait.musicOn) {
      snailBait.soundtrack.play();
   }
   else {
      snailBait.soundtrack.pause();
   }
};
