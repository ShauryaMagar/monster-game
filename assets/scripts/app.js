const attackValue = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
const monsterAttackValue =10;
const strongAttackValue = 20;
const healValue = 10;


adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You win!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You Lose!");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("draw");
    }
}

function attackMonster(mode){
    let maxDamage;
    if(mode == "attack" ){
          maxDamage= attackValue;

    }else if(mode === "strongAttack"){
           maxDamage = strongAttackValue;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
    
}



function attackHandler() {
    attackMonster("attack");
}

function strongAttackHandler (){
    attackMonster("strongAttack");
}


function healPlayerHandler(){
    let heal_value;
    if(currentPlayerHealth >= chosenMaxLife - healValue){
        
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
     endRound();
}

attackBtn.addEventListener("click", attackHandler );
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);