var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawner = require('spawner');
var wall = require('wall');
var roleConstruction = require('role.construction');

module.exports.loop = function () {

    var tower = Game.getObjectById('583740aba6d61f8e7ea9266b');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
       if(closestDamagedStructure) {
           tower.repair(closestDamagedStructure);
       }

       var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
       if(closestHostile) {
           tower.attack(closestHostile);
       }
   }

    spawner.spawn(Game.spawns["Spawn1"]);

    // Define a wall inside of here to build
    //wall.build(Game.spawns["Spawn1"]);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            roleConstruction.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            roleConstruction.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
