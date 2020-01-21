class Fighter {
    constructor(fighter) {
        this._name = fighter.name;
        this._damage = fighter.damage;
        this._health = fighter.health;
        this._strength = fighter.strength;
        this._agility = fighter.agility;
        this._currentHP = fighter.hp;
        this._wins = 0;
        this._lose = 0;
    }

    get getName() {
        return this._name
    }

    get getDamage() {
        return this._damage
    }

    get getStrength() {
        return this._strength
    }

    get getAgility() {
        return this._agility
    }

    get getHealth() {
        return this._currentHP
    }

    get getWins() {
        return this._wins
    }

    get getLose() {
        return this._lose
    }

    get fullHealth() {
        return this._health
    }

    attack(defender) {
        const probabilitySuccess = 100;
        const fighterAttack = defender.getStrength + defender.getAgility;
        const result = Math.ceil(Math.random() * Math.floor(probabilitySuccess));
        if (result <= fighterAttack) {
            defender.dealDamage(this.getDamage);
            console.log(`${this.getName} makes ${this.getDamage} damage to ${defender.getName}`);
        } else {
            console.log(`${this.getName} attack missed`);
        }
    }

    get logCombatHistory() {
        return console.log(`Name: ${this.getName}, Wins : ${this._wins}, Losses : ${this._lose}`)
    }

    heal(heal) {
        const fullHeal = heal + this.getHealth;
        fullHeal < this.fullHealth ? this._currentHP = this._currentHP + heal : this._currentHP = this._health;
    }

    dealDamage(damage) {
        this._currentHP = this._currentHP - damage;
        this._currentHP <= 0 ? this._wins++ : null;
    }

    addWin() {
        this._wins += 1;
        return this._wins;
    }

    addLose() {
        this._lose += 1;
        return this._lose;
    }
}

function battle(fighterOne, fighterTwo) {
    if (fighterOne.getHealth && fighterTwo.getHealth) {
        fighterOne.attack(fighterTwo);
        if (fighterTwo.getHealth) {
            fighterTwo.attack(fighterOne);
            if (fighterTwo.getHealth && fighterOne.getHealth) {
                battle(fighterOne, fighterTwo)
            } else {
                fighterTwo.addWin;
                fighterOne.addLose;
                console.log(`${fighterTwo.getName} has won!`)
            }
        } else {
          
            console.log(`${fighterOne.getName} has won`)
        }
    } else {
        if (fighterOne.getHealth){
            console.log(`${fighterTwo.getName} is dead and can't fight.`)
        }else {
            console.log(`${fighterOne.getName} is dead and can't fight.`)
        }
    }
}

let fighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 35, hp: 100});
let fighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp:90});
battle(fighter1, fighter2) 


