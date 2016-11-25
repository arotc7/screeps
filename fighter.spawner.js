var RANGED_ATTACK_CREEPS = 5;
var ATTACK_CREEPS = 5;

var ATTACK_COST = 80;
var RANGED_ATTACK_COST = 150;
var HEAL_COST = 250;

var fighterSpawner = {
    spawn: function(spawner) {
        var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
        console.log('Attackers: ' + attackers.length);
        if(attackers.length < ATTACK_CREEPS) {
            var newName = spawner.createCreep([MOVE, MOVE, MOVE, ATTACK, ATTACK], undefined, {role : "attacker"});
            console.log('Spawning new attacker: ' + newName);
        }

        var rangedAttackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'ranged_attacker');
        console.log('Ranged Attackers: ' + rangedAttackers.length);
        if(attackers.length < RANGED_ATTACK_CREEPS) {
            var newName = spawner.createCreep([MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK], undefined, {role : "ranged_attacker"});
            console.log('Spawning new ranged attacker: ' + newName);
        }
    }
}

module.exports = fighterSpawner;
