function generateBossSelect() {
    let HTMLContent = ''
    HTMLContent += `<table id='bossTabs' class='container' style='margin-bottom:20px'><tr id='bossTabsRow'>`
    let isle = 1
    bossArray.forEach((boss, index) => {
        if (boss.isle !== isle) {
            HTMLContent += `<td style='padding:5px'></td>`
            isle = boss.isle
        }
        HTMLContent += `<td id='${boss.id}Button' class='grow ${boss.id}' style='width:38px' onclick="globalBossIndex=${index};playSound('category_select');action()">${getImage(boss, 38)}</td>`
    })
    HTMLContent += `</tr></table>`
    document.getElementById('bossSelect').innerHTML = HTMLContent
}
function generateBossInfo() {
    if (document.getElementById('bossSelect').children.length == 0) generateBossSelect()
    updateBoardTitle()
    setBossInfo()
    const boss = bossArray[globalBossIndex]
    HTMLContent = ''
    if (boss) {
        const className = 'selected'
        document.querySelectorAll('#bossTabsRow td').forEach(button => {
            button.classList.remove(className)
        })
        const button = document.getElementById(boss.id + 'Button')
        button?.classList.add(className)
        HTMLContent = `<div class='container' style='align-items:flex-start'>`
        HTMLContent += parseHP(boss);
        HTMLContent += parseOddities(boss)
        HTMLContent += `</div>`
    } else {
        HTMLContent += `<div class='container'>Click a boss!</div>`
    }
    document.getElementById('content').innerHTML = HTMLContent
}
function parseOddities(boss) {
    const bossOddities = oddities[boss.id]?.oddities
    const bossTricks = oddities[boss.id]?.tricks
    const bossAdvancedTricks = oddities[boss.id]?.advancedTricks
    let HTMLContent = `<div>`
    if (bossOddities) {
        HTMLContent += `
                <div>
                    <div>${fontAwesomeText('book', 'Oddities')}</div>
                    ${bossInfoSection(bossOddities)}
                </div>`
    }
    if (bossTricks) {
        HTMLContent += `
                <div>
                    <div>${fontAwesomeText('gamepad', 'Tricks')}</div>
                    ${bossInfoSection(bossTricks)}
                </div>`
    }
    if (bossAdvancedTricks) {
        HTMLContent += `
                <div>
                    <div>${fontAwesomeText('graduation-cap', 'Advanced Tricks')}</div>
                    ${bossInfoSection(bossAdvancedTricks)}
                </div>`
    }
    HTMLContent += `</div>`
    return HTMLContent
    function bossInfoSection(section) {
        let HTMLContent = `<div class='background1 border' style='padding:10px'>`
        section?.forEach((part, index) => {
            HTMLContent += `
            <div class='container' style='gap:20px;margin-bottom:30px'>
                <div class='font2' style='font-size:170%'>${index + 1}.</div>
                ${part[0]}
                <div style='width:500px'>${part[1]}</div>
            </div>`
        })
        HTMLContent += `</div>`
        return HTMLContent
    }
}
function parseHP(boss) {
    let HTMLContent = ''
    const bossHP = hp[boss.id]
    if (bossHP) {
        HTMLContent += `<div style='margin-top:70px;margin-right:5px'>`;
        difficulties.forEach((difficulty, index) => {
            if (!(index == 0 && !bossHP[0].hp[0])) {
                HTMLContent += `<div class='button ${index == globalDifficulty ? 'selected' : difficulty.toLowerCase()}' style='width:80px' onclick="globalDifficulty=${index};playSound('move');action()">${difficulty}</div>`
            } else if (globalDifficulty == 0) {
                globalDifficulty = 1
            }
        })
        HTMLContent += `</div>`
        bossHP.totalHP = 0
        bossHP.forEach(phase => {
            phase.phaseHP = 0
            if (phase.hp[globalDifficulty]?.hp) {
                phase.hp.forEach(subPhase => {
                    bossHP.totalHP += subPhase.hp[globalDifficulty]
                    phase.phaseHP += subPhase.hp[globalDifficulty]
                })
            } else {
                bossHP.totalHP += phase.hp[globalDifficulty]
                phase.phaseHP = phase.hp[globalDifficulty]
            }
        })
        HTMLContent += `<div style='margin-right:50px'><div>${fontAwesomeText('heart', 'HP')}</div>`;
        HTMLContent += `<table id='bossCard' class='background1' style='border:3px solid var(--banner);border-radius:5px'>`
        const difficulty = difficulties[globalDifficulty]
        HTMLContent += `<tr><td colspan=2 class='${difficulty.toLowerCase()}' style='text-align:center;padding:5px'>${difficulty.toUpperCase()}</td></tr>`
        bossHP.forEach((phase, index) => {
            if (phase.phaseHP) {
                HTMLContent += `
            <tr>
                <td colspan=2 style='width:150px'>
                ${bossPhaseHeader(boss, phase.id, phase.name)}
                </td>
            </tr>`
                HTMLContent += `<tr class='background2' style='font-size:80%'>`
                let sum = 0
                bossHP.forEach((phase, index2) => {
                    if (index <= index2) sum += phase.phaseHP
                })
                HTMLContent += `<td>${sum} / <span style='font-size:70%'>${bossHP.totalHP}</span></td>`
                HTMLContent += `<td style='text-align:right;font-size:110%'>${phase.phaseHP} HP</td>`
                HTMLContent += `</tr>`
                HTMLContent += `<tr><td colspan=2>
            <div class='container'>`
                for (let i = bossHP.length - 1; i >= 0; i--) {
                    const phase2 = bossHP[i]
                    if (phase2.phaseHP) {
                        let color = 'salmon'
                        if (index == i) color = 'lightpink'
                        if (i < index) color = 'var(--background1)'
                        HTMLContent += `<div style='height:16px;width:${phase2.phaseHP / bossHP.totalHP * 100}%;border-right:2px solid var(--background1);background-color:${color}'></div>`
                    }
                }
                HTMLContent += `</div>
            </td></tr>`
                if (phase.hp[globalDifficulty]?.hp) {
                    phase.hp.forEach((subPhase, subindex) => {
                        HTMLContent += `
                            <tr class='${getRowColor(subindex)}'>
                                <td style='font-size:80%'>${subPhase.name}</td>
                                <td>${subPhase.hp[globalDifficulty] || '-'}</td>
                            </tr>`
                    })
                }
            }
        })
        HTMLContent += `</table>`
        HTMLContent += `</div>`
    }
    return HTMLContent
}
function bossPhaseHeader(boss, phaseID, phaseName) {
    return `
        <div class='container ${boss.id}' style='gap:8px;padding:1px'>
            <div class='container' style='width:38px;margin:0'>${getImage(boss, 38, phaseID)}</div>
            ${phaseName}
        </div>`
}
function phase(phaseText, phase, extra) {
    const boss = bossArray[globalBossIndex]
    const versionSet = {
        '1.0': { className: 'legacy' },
        '1.1': { className: 'onePointOne' },
        '1.2': { className: 'nmg' },
        '1.2+': { className: 'nmg' },
        '1.3': { className: 'dlcbase' },
        'Simple': { className: 'simple' },
        'Regular': { className: 'regular' },
        'Expert': { className: 'expert' },
        'Major Glitch': { className: 'nmg' }
    }
    let HTMLContent = ''
    if (boss) {
        HTMLContent += `<div>`
        HTMLContent += `
        <div class='container'>
        <table class='border'>
            <tr>
                <td class='container ${boss.id}' style='gap:8px;padding:0 4px'>
                    ${bossPhaseHeader(boss, phase, phaseText)}
                </td>
            </tr>
        </table>
        </div>`
        if (extra) {
            HTMLContent += `<div class='container' style='gap:5px;padding-top:3px'>`
            extra.forEach(elem => {
                const version = versionSet[elem]
                if (version) {
                    HTMLContent += `<div class='${version.className}' style='border-radius:5px;padding:1px 3px'>${elem}</div>`
                } else if (elem == 'whetstone' || elem == 'astralcookie') {
                    HTMLContent += `<img src='https://myekul.github.io/shared-assets/cuphead/images/inventory/charm/${elem}.png' style='height:21px'>`
                } else if (elem.includes('super')) {
                    HTMLContent += `<img src='https://myekul.github.io/shared-assets/cuphead/images/inventory/super/${elem}.png' style='height:21px'>`
                } else {
                    HTMLContent += cupheadShot(elem, 21)
                }
            })
            HTMLContent += `</div>`
        }
        HTMLContent += `</div>`
    }
    return HTMLContent
}
function hitbox() {
    return dim('This is best observed with a hitbox mod.')
}
function cards() {
    return dim('You can use this opportunity to generate cards.')
}
function dim(text) {
    return `<span style='color:gray'>&nbsp;${text}</span>`
}
function nmg(text) {
    return `<span style='color:salmon'>${text}</span>`
}
function impractical() {
    return dim('This is impractical for a speedrun.')
}
function phase2KO(regular) {
    return [phase('Phase 2', 2, [regular ? 'Regular' : '', 'charge', 'super3', 'whetstone']),
    myekulColor('Phase 2 K.O.') + `: With Giant Ghost and Whetstone,
                it's possible to end the fight in Phase 2, skipping the lengthy Phase 3 transition.`
    ]
}