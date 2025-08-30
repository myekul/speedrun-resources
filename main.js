setTitle('SPEEDRUN RESOURCES')
setFooter('2025')
initializeHash('home')
setCuphead()
const fontAwesomeSet = {
    home: ['Home', 'home'],
    bossInfo: ['Boss Info', 'drivers-license-o'],
    ballpit: ['Ballpit', 'smile-o'],
    shots: ['Shots', 'crosshairs']
}
document.addEventListener('DOMContentLoaded', () => {
    setTabs(['home', 'bossInfo', null, 'ballpit'])
        .then(() => {
            showTab(globalTab)
        })
})
function action() {
    if (globalTab != 'home') setPageTitle(fontAwesomeSet[globalTab][1], fontAwesomeSet[globalTab][0])
    switch (globalTab) {
        case 'home':
            generateHome()
            break
        case 'bossInfo':
            generateBossInfo()
            break
        case 'ballpit':
            generateBallpit()
            break
    }
}
function getImage(boss, size = 100, phase) {
    return `<img src='https://myekul.github.io/shared-assets/cuphead/images/${phase ? 'phase/' : ''}${boss.id}${phase ? phase : ''}.png' style='height:${size}px'>`
}
function updateBoardTitle() {
    const boss = bossArray[globalBossIndex]
    let HTMLContent = ''
    if (boss) {
        HTMLContent += boardTitleCell(boss.id, `<div class='container' style='gap:8px'>${getImage(boss, 36)}${boss.name}</div>`)
    }
    document.getElementById('boardTitle').innerHTML = boardTitleWrapper(HTMLContent)
    if (globalBossIndex != -1) {
        show('closeBoardTitle')
    } else {
        hide('closeBoardTitle')
    }
}