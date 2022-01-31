/* Scorpion character is not working */


//DOM elements
const modalStatus = document.querySelector(".status-mesg");
const modal = document.querySelector(".modal")
// const resetButton = document.querySelector(".reset")
const fightButton = document.querySelector(".fight-status")

// resetButton.onclick = hideModal;
let player;
class Player{
    constructor(classType, health, mana, power, agility, speed){
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.power = power;
    this.agility = agility;
    this.speed =  speed;
    }
}   
let fightSound = 0
let finishSound = new Audio('sounds/finishhim.wav');
let PlayerMoves = {
    calcAttack: function(){
        //Who attack first?
        fightSound++ 
        let fight = new Audio('sounds/fight.wav');
        if(fightSound <= 1){
            fight.play();
        }
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        //function for player attacks!
        let playerAttack = function(){
        let calcBaseDamage;
        if(player.mana > 0){
            calcBaseDamage = player.power * player.mana / 1000; // calculate damage
        }else{
            calcBaseDamage = player.power * player.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * 10);
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        console.log(calcBaseDamage)
        //Number of Hits
        let numberOfHits =  Math.floor(Math.random() * (3-1+1)+1);
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    //function for enemy attacks
    let enemyAttack = function(){
        let calcBaseDamage;
        if(enemy.mana > 0){
            calcBaseDamage = enemy.power * enemy.mana/1000; // calculate damage
        }else{
            calcBaseDamage = enemy.power * enemy.agility/1000;
        }
        let offsetDamage = Math.floor(Math.random() * 10 );
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //Number of Hits
        let numberOfHits = Math.floor(Math.random() * (3-1+1)+1);
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    //Get Player/Enemy health  damage
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        //Initiate attacks!
        if(getPlayerSpeed >= getEnemySpeed){
           let playerAttackValues = playerAttack();
           //console.log(playerAttack());
           let totalDamage = playerAttackValues[0]  *  playerAttackValues[1];
           enemy.health = enemy.health - totalDamage;
           modal.classList.remove("hidden")
           modalStatus.textContent = "You hit: " + playerAttackValues[0]  + "\nDamage: " + playerAttackValues[1] + " times!"
           if(enemy.health <= 0){
               finishSound.play();
            modal.classList.remove("hidden")
            modalStatus.textContent = "You win! Refresh browser to play again!"
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getPlayerHealth.innerHTML = 'Health: 0';
           }else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            //enemy attacks
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            modal.classList.remove("hidden")
            modalStatus.textContent =  'Enemy hit: '+ enemyAttackValues[0]+ " \nDamage: "+ enemyAttackValues[1]+ " times"
            if(player.health <= 0){
                finishSound.play();
                modal.classList.remove("hidden")
                modalStatus.textContent = "You lose! Refresh browser to play again."
                getPlayerHealth.innerHTML = "Health: 0";
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
            }else{
                getPlayerHealth.innerHTML = "Health: " + player.health;
            }
           }
        }else if(getEnemySpeed >= getPlayerSpeed){
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0]  *  enemyAttackValues[1];
            player.health = player.health - totalDamage;
            modal.classList.remove("hidden")
            modalStatus.textContent = "Enemy hit " + playerAttackValues[0] + "\nDamage " + playerAttackValues[1] + " times!"
            if(player.health <= 0){
                finishSound.play();
                modal.classList.remove("hidden")
                modalStatus.textContent = "You Lose! Refresh browser to play again!"
                 getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                 getPlayerHealth.innerHTML = 'Health: 0';
            }else {
             getPlayerHealth.innerHTML = 'Health: ' + player.health;
             //player attacks
             let playerAttackValues = playerAttack();
             let totalDamage = playerAttackValues[0] * enemyAttackValues[1];
             enemy.health = enemy.health - totalDamage;
             modal.classList.remove("hidden")
             modalStatus.textContent = 'You hit '+ playerAttackValues[0]+  + playerAttackValues[1]+ " times!"
             if(enemy.health <= 0){
                finishSound.play();
             modal.classList.remove("hidden")
             modalStatus.textContent = "You Win! Refresh browser to play again."
                 getEnemyHealth.innerHTML = "Health: 0";
                 getPlayerHealth.innerHTML = "Health: " + player.health;
             }else{
                 getEnemyHealth.innerHTML = "Health: " + enemy.health;
             }
            }
         }
}
};
fightButton.onclick = PlayerMoves.calcAttack;