var workerSpawner = require('workerSpawner');
var attackSpawner = require('fighterSpawner');

var spawner = {
    spawn: function(spawn) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }

        var spawners[wokerSpawner, attackSpawner];

        for(var spawner in spawners) {
            spawner.spawn(spawn);
        }
    }
}

module.exports = spawner;
