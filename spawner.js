var BUILDERS_COUNT = 3;
var UPGRADERS_COUNT = 4;
var HARVESTERS_COUNT = 3;


var spawner = {
    
    spawn: function(spawner) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);
    
        if(harvesters.length < BUILDERS_COUNT) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }
        
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: ' + upgraders.length);
        if(upgraders.length < UPGRADERS_COUNT) {
            var creepType = [WORK, CARRY, MOVE];

            if(spawner.room.energyAvailable > 450) {
                creepType = [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE];
            }

            var newName = Game.spawns["Spawn1"].createCreep(creepType, undefined, {role: 'upgrader', upgrading: false});
            console.log('Spawning new upgrader: ' + newName);
        }
        
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('Builders: ' + builders.length);
        if(builders.length < BUILDERS_COUNT) {
            var newName = Game.spawns["Spawn1"].createCreep([WORK, CARRY, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
    }
}

module.exports = spawner;