var workerSpawner = require('workerSpawner');
var attackSpawner = require('fighterSpawner');

var spawner = {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var spawners[wokerSpawner, attackSpawner];

    for(var spawner in spawners) {
        spawner.spawn(Game.spawns["Spawn1"]);
    }
}

module.exports = spawner;
