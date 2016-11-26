var constants = require('constants');

var workerSpawner = {

    spawn: function(spawner) {
        var creepType = [WORK, CARRY, MOVE];

        cost = (constants.WORK_COST * 4) + constants.CARRY_COST + (constants.MOVE_COST * 2)
        if(spawner.room.energyAvailable > cost) {
            creepType = [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE];
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < constants.HARVESTERS_COUNT) {
            var newName = spawner.createCreep(creepType, undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: ' + upgraders.length);
        if(upgraders.length < constants.UPGRADERS_COUNT) {

            var newName = spawner.createCreep(creepType, undefined, {role: 'upgrader', upgrading: false});
            console.log('Spawning new upgrader: ' + newName);
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('Builders: ' + builders.length);
        if(builders.length < constants.BUILDERS_COUNT) {
            var newName = spawner.createCreep(creepType, undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
    }
}

module.exports = workerSpawner;
