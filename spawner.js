var workerSpawner = require('worker.spawner');
var fighterSpawner = require('fighter.spawner');

var spawner = {
    spawn: function(spawn) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }

        workerSpawner.spawn(spawn);
        //fighterSpawner.spawn(spawn);
    }
}

module.exports = spawner;
