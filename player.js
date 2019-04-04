const player = {
  lastDamageTaken: 0,
  levelUp: function() {
  this.levelUp = true;
  this.hitPoints = 100;
  },
  hitPoints: 100,
  isAlive: true,
}