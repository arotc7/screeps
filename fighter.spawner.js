var constants = require('constants');

var fighterSpawner = {
    spawn: function(spawner) {
        var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
        console.log('Attackers: ' + attackers.length);
        if(attackers.length < constants.ATTACK_CREEPS_COUNT) {
            var newName = spawner.createCreep([MOVE, MOVE, MOVE, ATTACK, ATTACK], undefined, {role : "attacker"});
            console.log('Spawning new attacker: ' + newName);
        }

        var rangedAttackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'ranged_attacker');
        console.log('Ranged Attackers: ' + rangedAttackers.length);
        if(attackers.length < constants.RANGED_ATTACK_CREEPS_COUNT) {
            var newName = spawner.createCreep([MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK], undefined, {role : "ranged_attacker"});
            console.log('Spawning new ranged attacker: ' + newName);
        }
    }
}

module.exports = fighterSpawner;
