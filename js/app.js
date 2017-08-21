// Enemies our player must avoid
var Enemy = function(x, y, speed) { //this is an enemy..now below put what it needs
    this.x = x;  //x location attribute is x passed into function
    this.y = y;  //y location attribute is y passed into function
    this.sprite = 'images/enemy-bug.png'; //image
    this.speed = speed; //speed of enemy is speed put into function
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if (this.x > -200 && this.x < 500){
    this.x += this.speed * dt;
  }
  else {
    this.x = -100;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  this.x = x; // xlocation passed into function
  this.y = y; //y location passed into function
  this.speed = speed; //speed of the player (will be used to move)
  this.sprite = "images/char-boy.png";
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function() {
  if (this.y < 0) {
    this.reset();
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-100, 210,100), new Enemy(-100, 130, 200), new Enemy(-100, 50, 300)];
var player = new Player(200, 400, 100);

/*
for collisions:

I loop through the allEnemies array ,
then I check each iteration if x and y = player x and y,
if true then reset the player to init position

will be done in player update
because it updates the player
*/

player.handleInput = function(key) {
    if (key === 'left' && player.x > 0) {
        player.x -= player.speed;
    }
    if (key === 'up' && player.y > -10) {
        player.y -= player.speed;
    }
    if (key === 'right' && player.x < 400) {
        player.x += player.speed;
    }
    if (key === 'down' && player.y < 400) {
        player.y += player.speed;
    }
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
