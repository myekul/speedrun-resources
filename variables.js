// let globalBossIndex = -1
let globalBossIndex = 0
let globalDifficulty = 1
const difficulties=['Simple','Regular','Expert']
bosses.sort((a, b) => a.order - b.order)
const bossArray = bosses.slice(6, 25).concat(bosses.slice(0, 6))