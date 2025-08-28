let globalBossIndex = -1
bosses.sort((a, b) => a.order - b.order)
const bossArray = bosses.slice(6, 25).concat(bosses.slice(0, 6))