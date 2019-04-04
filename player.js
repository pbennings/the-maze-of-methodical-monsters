const player = {
  isAlive: true,
  hitPoints: 100,
  level: 1,
  lastDamageTaken: 0,
  fight: function(monster) {
    this.lastDamageTaken =
  Math.ceil(Math.random() * monster.baseAttackDamage);
  Math.ceil(Math.random() * this.baseAttackDamageTaken);
  this.hitPoints = this.hitPoints - this.lastDamageTaken;
  monster.hitPoints - monster.lastDamageTaken;

  if(monster.hitPoints <1){
    monster.isAlive = false;
  } else if(this.hitPoints <=0){
    player.isAlive = false;
  }
  },
  levelUp: function() {
  this.levelUp += 1;
  },

  reset: function(){
    this.isAlive = true;
    this.hitPoints = 100;
    this.level = 1;
    this.baseAttackDamage = 5;
    this.lastDamageTaken = 0;
  },
}