var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawner = require('spawner');
var wall = require('wall');
var roadBuilder = require('build.road');

module.exports.loop = function () {

    spawner.spawn(Game.spawns["Spawn1"]);

    // Define a wall inside of here to build
    //wall.build(Game.spawns["Spawn1"]);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            roadBuilder.create(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            roadBuilder.create(creep);
        }
    }
}
