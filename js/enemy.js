let enemy;
class Enemy {
    constructor(enemyType, health, mana, power, agility, speed){
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.power = power;
    this.agility = agility;
    this.speed =  speed;
}
}
const resetBtn = ()=>{
    getArena.style.visibility = "invisible";
}