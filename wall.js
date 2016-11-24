var wall = {
    build: function(spawn) {
        for(var i = 0; i < 3; i++) {
            spawn.room.createConstructionSite(37 - i, 24 + i, STRUCTURE_RAMPART);
        }
    }
}

module.exports = wall;