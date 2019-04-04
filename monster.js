const monster = {
  lastDamageTaken: 0,
  respawn: function() {
  this.isAlive = true;
  this.hitPoints = 30;
  },
  hitPoints: 30,
  isAlive: true,
};