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
    HTMLContent += `<table id='bossTabs' class='container' style='margin-bottom:20px'><tr>`
    let isle = 1
    bossArray.forEach((boss, index) => {
        if (boss.isle !== isle) {
            HTMLContent += `<td style='padding:5px'></td>`
            isle = boss.isle
        }
        HTMLContent += `<td id='${boss.id}Button' class='grow ${boss.id}' onclick="globalBossIndex=${index};action()">${getImage(boss, 38)}</td>`
    })
    HTMLContent += `</tr></table>`
    document.getElementById('bossSelect').innerHTML = HTMLContent
    updateBoardTitle()
    setBossInfo()
    const boss = bossArray[globalBossIndex]
    HTMLContent = ''
    if (boss) {
        HTMLContent = `<div class='container' style='gap:50px'>`
        // HTMLContent += `
        // <table id='bossCard' class='background1' style='border:3px solid var(--banner);border-radius:5px'>
        //     <tr>
        //         <td class='${boss.id}' rowspan=5>${getImage(boss)}</td>
        //         <td class='${boss.id}'>${boss.name}</td>
        //     </tr>
        //     <tr><td>HP</td></tr>
        // </table>`
        HTMLContent += `
            <div>
                <div>
                    <div>${fontAwesomeText('book', 'Oddities')}</div>
                    ${bossInfoSection(oddities[boss.id]?.oddities)}
                </div>
                <div>
                    <div>${fontAwesomeText('gamepad', 'Tricks')}</div>
                    ${bossInfoSection(oddities[boss.id]?.tricks)}
                </div>
                <div>
                    <div>${fontAwesomeText('graduation-cap', 'Advanced Tricks')}</div>
                    ${bossInfoSection(oddities[boss.id]?.advancedTricks)}
                </div>
            </div>`
        HTMLContent += `</div>`
    } else {
        HTMLContent += `<div class='container'>Click a boss! Isles 1 and 2 are mostly done.</div>`
    }
    document.getElementById('content').innerHTML = HTMLContent
    function bossInfoSection(section) {
        let HTMLContent = ''
        section?.forEach((part, index) => {
            HTMLContent += `<div class='container' style='gap:20px;margin-bottom:30px'>
        <div class='font2' style='font-size:170%'>${index + 1}.</div>
        ${part[0]}
        <div style='max-width:500px'>${part[1]}</div>
        </div>`
        })
        return HTMLContent || `<div class='container'>-</div>`
    }
}
function generateBallpit() {
    document.getElementById('content').innerHTML = `<div id='ballpit'></div>`
    let HTMLContent = ''
    bossArray.forEach(boss => {
        HTMLContent += `<div class='ball'>${getImage(boss)}</div>`
    })
    setBallpit(HTMLContent)
}