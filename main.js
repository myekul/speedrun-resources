setTitle('SPEEDRUN RESOURCES')
setFooter('2025')
initializeHash('home')
setCupheadProjects()
const fontAwesomeSet = {
    home: ['Home', 'home'],
    bossInfo: ['Boss Info', 'drivers-license-o'],
    ballpit: ['Ballpit', 'smile-o']
}
document.addEventListener('DOMContentLoaded', () => {
    setTabs(['home', 'bossInfo', null, 'ballpit'])
        .then(() => {
            showTab(globalTab)
        })
})
function action() {
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
function generateHome() {
    setHTML('html/home.html', 'content')
        .then(() => {
            document.querySelectorAll('#content a').forEach(elem => {
                elem.classList.add('grow')
                elem.classList.add('container')
                elem.style.gap = '10px'
            })
            setResources()
            document.getElementById('resourcesTitle').innerHTML = fontAwesomeText('graduation-cap', 'Getting Started')
        })
}
function generateBossInfo() {
    let HTMLContent = ''
    bosses.sort((a, b) => a.order - b.order)
    const bossArray = bosses.slice(6, 25).concat(bosses.slice(0, 6))
    HTMLContent += `<table id='bossTabs' class='container'><tr>`
    let isle = 1
    bossArray.forEach(boss => {
        if (boss.isle !== isle) {
            HTMLContent += `<td style='padding:5px'></td>`
            isle = boss.isle
        }
        HTMLContent += `<td id='${boss.id}Button' class='grow ${boss.id}'>${getImage(boss, 38)}</td>`
    })
    HTMLContent += `</tr></table>`
    document.getElementById('content').innerHTML = HTMLContent
}
function generateBallpit() {
    let HTMLContent = ballpitRefresh()
    HTMLContent += `<div id='ballpit'>`
    bosses.forEach(boss => {
        HTMLContent += `<div class='ball'>${getImage(boss)}</div>`
    })
    HTMLContent += `</div>`
    document.getElementById('content').innerHTML = HTMLContent
    ballpitEngine()
}
function getImage(boss, size = 100) {
    return `<img src='https://myekul.github.io/shared-assets/cuphead/images/${boss.id}.png' style='height:${size}px'>`
}