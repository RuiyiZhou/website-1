// Sprite Artists............................................................

// Artists draw sprites with a draw(sprite, context) method. ImageArtists
// draw an image for their sprite.

var ImageArtist = function (imageUrl) {
   this.image = new Image;
   this.image.src = imageUrl;
};

ImageArtist.prototype = {
   image: undefined,

   drawSpriteImage: function (sprite, context) {
      context.drawImage(this.image, sprite.left, sprite.top);
   },
   
   draw: function (sprite, context) {
      this.drawSpriteImage(sprite, context);   
   }
};

SpriteSheetArtist = function (spritesheet, cells) {
   this.cells = cells;
   this.spritesheet = spritesheet;
   this.cellIndex = 0;
};

SpriteSheetArtist.prototype = {
   advance: function () {
      if (this.cellIndex == this.cells.length-1) {
         this.cellIndex = 0;
      }
      else {
         this.cellIndex++;
      }
   },
   
   draw: function (sprite, context) {
      var cell = this.cells[this.cellIndex];

      context.drawImage(this.spritesheet, cell.left, cell.top,
                                          cell.width, cell.height,
                                          sprite.left, sprite.top,
                                          cell.width, cell.height);
   }
};

// Sprite Animators...........................................................

var SpriteAnimator = function (cells, duration, callback) {
   this.cells = cells;
   this.duration = duration || 1000;
   this.callback = callback;
};

SpriteAnimator.prototype = {
   start: function (sprite, reappear) {
      var originalCells = sprite.artist.cells,
          originalIndex = sprite.artist.cellIndex,
          self = this;

      sprite.artist.cells = this.cells;
      sprite.artist.cellIndex = 0;
      
      setTimeout(function() {
         sprite.artist.cells = originalCells;
         sprite.artist.cellIndex = originalIndex;

         sprite.visible = reappear;

         if (self.callback) {
            self.callback(sprite, self);
         }
      }, self.duration); 
   },
};

// Sprites....................................................................

// Sprites have a type, an artist, and an array of behaviors. Sprites can
// be updated and drawn.
//
// A sprite's artist draws the sprite: draw(sprite, context)
// A sprite's behavior executes: execute(sprite, time, fps)

var Sprite = function (type, artist, behaviors) {
   this.type = type || '';
   this.artist = artist || undefined;
   this.behaviors = behaviors || [];

   this.left = 0;
   this.top = 0;
   this.width = 10;
   this.height = 10;
	this.velocityX = 0;
	this.velocityY = 0;
	this.opacity = 1.0;
   this.visible = true;

   return this;
};

Sprite.prototype = {
	draw: function (context) {
     context.save();
     context.globalAlpha = this.opacity;
      
     if (this.artist && this.visible) {
        this.artist.draw(this, context);
     }
     context.restore();
	},

   update: function (time, fps, context) {
      for (var i = 0; i < this.behaviors.length; ++i) {
         if (this.behaviors[i] === undefined) { // Modified while looping?
            return;
         }

         this.behaviors[i].execute(this, time, fps, context);
      }
   }
};
