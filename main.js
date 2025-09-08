setTitle('SPEEDRUN RESOURCES')
setFooter('2025')
initializeHash('home')
setAudio('cuphead')
document.addEventListener('DOMContentLoaded', () => {
    setTabs(['home', 'bossInfo', 'tutorials', null, 'ballpit'])
        .then(() => {
            showTab(globalTab)
        })
})
function action() {
    document.getElementById('content').innerHTML = ''
    if (['home'].includes(globalTab)) {
        hide('pageTitle')
    } else {
        show('pageTitle')
        setPageTitle(fontAwesomeSet[globalTab][1], fontAwesomeSet[globalTab][0])
    }
    if (globalTab == 'bossInfo') {
        show('bossSelect')
        show('boardTitleDiv')
    } else {
        document.getElementById('bossSelect').innerHTML = ''
        hide('bossSelect')
        hide('boardTitleDiv')
    }
    switch (globalTab) {
        case 'home':
            generateHome()
            break
        case 'bossInfo':
            generateBossInfo()
            break
        case 'tutorials':
            generateTutorials()
            break
        case 'monkeyTool':
            generateMonkeyTool()
            break
        case 'graveyardTool':
            generateGraveyardTool()
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