var roadBuilder = {
    create: function(creep) {
        if(creep.pos.look().length < 1) {
            creep.pos.createConstructionSite(STRUCTURE_ROAD);
        }
    }
}

module.exports = roadBuilder;
