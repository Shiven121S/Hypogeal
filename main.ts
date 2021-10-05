function SpawnResourcesGold () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        if (tiles.locationXY(value, tiles.XY.row) >= 8) {
            tiles.setTileAt(value, assets.tile`myTile2`)
        }
    }
}
tiles.loadMap(tiles.createSmallMap(tilemap`level1`))
SpawnResourcesGold()
