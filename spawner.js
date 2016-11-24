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

        var spawners = [workerSpawner, fighterSpawner];

        for(var s in spawners) {
            s.spawn(spawn);
        }
    }
}

module.exports = spawner;
