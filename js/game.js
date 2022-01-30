//Sound
let background = new Audio('sounds/themesong.mp3');
background.volume = .1;
background.preload = 'auto';
background.loop = true;
//creates object and assign to game
let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    
    
    resetPlayer: function(classType){
        background.play();
        switch (classType){//switch condition
            case  "Johnny":
                player = new Player(classType, 200, 0 , 200, 100, 110);
                break;
            case  "Subzero":
                player = new Player(classType, 100, 0 , 100, 150, 200);
                break;
            case  "Scorpion":
                player = new Player(classType, 250, 0 , 150, 210, 50);
                break;
            case  "Raiden":
                player = new Player(classType, 200, 0 , 250, 200, 100);
                break;
        }
        
        let getInterFace =  document.querySelector(".interface");
        getInterFace.innerHTML = '<img src="img/mortal-player/' + classType.toLowerCase() + '.png" class="imgs-avatar"/><div><h3> ' + classType + '</h3><p class="health-player">Health:  ' + player.health + '</p><p>Mana:  ' + player.mana+ '</p><p>Power:  ' + player.power + '</p><p>Agility :  ' + player.agility + '</p><p>Speed:  ' + player.speed + '</p></div>';
 },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Battle of the Realms!</p>';
        getActions.innerHTML = '<a href="#" class="btn-pre-fight" onclick="GameManager.setFight()">Pick Your Battle!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        fightSong.play();
        //Create Enemy Fighter!
        let enemy00 = new Enemy("kunglao", 100, 0, 150, 100, 100);
        let enemy01 = new Enemy("Kang", 150, 0, 120, 120, 110);
        let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(2));
        console.log(enemy00);
        switch(chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Battle of the Realms!!</p>';
        getActions.innerHTML = '<a href="#" class="btn-pre-fight" onclick="PlayerMoves.calcAttack()">Attack Your Enemy!</a>';
        getEnemy.innerHTML = '<img src="img/mortal-enemy/' + enemy.enemyType.toLowerCase() + '.png" atl="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Power: ' + enemy.power + '</p><p>Agility: '+ enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}