var roadBuilder = require('build.road');

var roleConstruction = {
    run: function(creep) {
            // check roads first
            var foundRoads = _.filter(creep.pos.lookFor(LOOK_STRUCTURES), (structure) => structure.structureType == "STRUCTURE_ROAD");
            if(foundRoads.length == 0) {
                roadBuilder.create(creep);
            }
    }
}

module.exports = roleConstruction;
