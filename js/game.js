//creates object and assign to game
let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    
    resetPlayer: function(classType){
        switch (classType){//switch condition
            case  "Johnny":
                player = new Player(classType, 200, 0 , 200, 100, 50);
                break;
            case  "Subzero":
                player = new Player(classType, 100, 0 , 100, 150, 200);
                break;
            case  "Scorpion":
                player = new Player(classType, 250, 0 , 150, 200, 50);
                break;
            case  "Raiden":
                player = new Player(classType, 200, 0 , 50, 200, 100);
                break;
        }
        let getInterFace =  document.querySelector(".interface");
        getInterFace.innerHTML = '<img src="imgs/"' + classType.toLowerCase() + '.png" class="imgs-avatar"/><div><h3> ' + classType + '</h3><p>Health:  ' + player.health + '</p><p>Mana:  ' + player.mana+ '</p><p>Power:  ' + player.power + '</p><p>Agility :  ' + player.agility + '</p><p>Speed:  ' + player.speed + '</p></div>';
 },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Pick your enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Pick Your Enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //Create Enemy Fighter!
        let enemy00 = new Enemy("Scorpion", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Subzero", 200, 0, 150, 80, 100);
        let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(2));
        //console.log(chooseRandomEnemy);
        switch(chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose Your Move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="imgs/"'+ enemy.enemyType.toLowerCase() + '.png" atl="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.EnemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Power: ' + enemy.power + '</p><p>Agility: '+ enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}