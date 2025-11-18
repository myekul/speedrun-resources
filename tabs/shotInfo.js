function generateShotInfo() {
    let HTMLContent = ''
    const row1 = ['peashooter', 'spread', 'chaser', 'lobber', 'charge']
    const row2 = ['roundabout', 'crackshot', 'converge', 'twistup']
    // HTMLContent += shotRow(row1)
    // HTMLContent += shotRow(row2)
    // function shotRow(shots) {
    //     let HTMLContent = ''
    //     HTMLContent += `<div class='container' style='gap:10px'>`;
    //     shots.forEach(shot => {
    //         HTMLContent += `<div class='grow ${shot == globalShot ? 'grayedOut' : ''}' onclick="selectShot('${shot}')">${cupheadShot(shot, 42)}</div>`
    //     })
    //     HTMLContent += `</div>`
    //     return HTMLContent
    // }
    // HTMLContent += `<div class='button banner' style='margin:0 auto;margin-bottom:20px;width:50px' onclick="selectShot()">All</div>`
    if (globalShot) {
        HTMLContent += `<div class='container'><div class='border'>${shotDetails(globalShot)}</div></div>`
    } else {
        HTMLContent += `<div class='container'><div class='border'>`;
        [...row1, ...row2].forEach((shot, index) => {
            HTMLContent += shotDetails(shot, index)
        })
        HTMLContent += `</div></div>
        <div class='container textBlock dim' style='font-size:80%;margin-top:20px'>
        *Crackshot EX:
        <br>-The last (5th) bullet will hit for double damage, for a total of 21 damage.
        <br>-Parrying the turret will launch it to a target for 12 damage.
        <br>-If an enemy collides with the turret, it will deal 14 damage.
        </div>`
    }
    function shotDetails(shot, index) {
        const shotObject = shotData[shot]
        let HTMLContent = ''
        HTMLContent += `
        <div class='container ${getRowColor(index + 1)}' style='padding:10px;width:900px;margin:0 auto'>
            <div style='width:80px'>
                <div style='font-size:110%;margin-right:10px'>${shotObject.dps}</div>
                <div class='dim' style='font-size:80%'>DPS</div>
            </div>
            <div style='width:330px'>
                <div class='container' style='justify-content:left;gap:10px'>
                    <div style='margin-top:5px'>${cupheadShot(shot, 48)}</div>
                    <div>
                        <div class='font2' style='font-size:150%;margin-top:3px'>${shotObject.name}</div>
                        <div class='font2 dim' style='font-size:100%;margin-top:3px'>${shotObject.subtitle}</div>
                    </div>
                </div>
                <div class='dim' style='font-size:90%;margin-top:10px'>${shotObject.description}</div>
            </div>
            <div class='container' style='width:200px;margin:0'>
                <div style='width:200px'>
                    <img src='images/shot/${shot}.png' style='height:35px'>
                    <div>${shotObject.damage}
                        <span class='dim' style='font-size:80%'> per bullet</span>
                        ${shotObject.num ? ' x ' + shotObject.num : ''}
                        <br><span class='dim' style='font-size:80%'>every</span> ${shotObject.rate} <span class='dim' style='font-size:80%'>frames</span>
                    </div>
                </div>
                ${shot == 'charge' ? `
                <div><img src='images/shot/charge2.png' style='height:52px'></img>
                46 <span class='dim' style='font-size:80%'> per bullet</span>
                </div>` : ''}
            </div>
            <div style='width:100px'>
                <div class='container' style='margin-bottom:10px'>
                <img src='images/shot/ex/${shot}.png' style='height:${['charge', 'converge'].includes(shot) ? 80 : 44}px'></img>
                </div>
                <div class='container'>
                    <div style='font-size:80%'>${shotObject.exnum ? shotObject.ex : ''}
                        ${shotObject.exnum ? ' x ' + shotObject.exnum : ''}
                        ${shotObject.exnum ? `<span class="dim"> ${shotObject.exticks ? 'ticks' : 'bullets'}</span>` : ''}
                        <br>
                    </div>
                </div>
            </div>
            <div style='width:50px;margin-left:25px'>
                <div style='font-size:110%'>${shotObject.extotal ? shotObject.extotal : shotObject.ex}</div>
                <div class='dim' style='font-size:80%'>EX</div>
            </div>
        </div>`
        return HTMLContent
    }
    document.getElementById('content').innerHTML = HTMLContent
}
function selectShot(shot) {
    globalShot = shot
    playSound('move')
    action()
}
const shotData = {
    peashooter: {
        name: "PEASHOOTER",
        subtitle: "EX: Mega Blast",
        description: "Standard issue weapon. Long range<br>with average damage.",
        dps: 30,
        damage: 4,
        rate: 8,
        ex: 8.334,
        exnum: 3,
        exticks: true,
        extotal: 25
    },
    spread: {
        name: "SPREAD",
        subtitle: "EX: Eight Way",
        description: "Short range with great damage - if<br>you can keep close to your target.",
        dps: 41.33,
        damage: 1.24,
        num: 5,
        rate: 9,
        ex: 4.3,
        exnum: 8,
        extotal: 34.4
    },
    chaser: {
        name: "CHASER",
        subtitle: "EX: Chaos Orbit",
        description: "Long range with below-average<br>damage. No aiming required.",
        dps: 17.1,
        damage: 2.85,
        rate: 10,
        ex: 7,
        exnum: 4,
        extotal: 28
    },
    lobber: {
        name: "LOBBER",
        subtitle: "EX: Kablooey",
        description: "Medium range and good damage with<br>a slower rate of fire.",
        dps: 33.14,
        damage: 11.6,
        rate: 21,
        ex: 28
    },
    charge: {
        name: "CHARGE",
        subtitle: "EX: Radial Barrage",
        description: "Hold attack to increase damage. No<br>rapid fire, so precision is key.",
        dps: `22.5 / 35.84`,
        damage: 6,
        rate: 16,
        damage2: 46,
        rate2: 61,
        ex: 26
    },
    roundabout: {
        name: "ROUNDABOUT",
        subtitle: "EX: Jumbo Rebound",
        description: "Great coverage with average damage.<br>Aim backward for maximum range.",
        dps: 31.875,
        damage: 8.5,
        rate: 16,
        ex: 5,
        exnum: 7,
        exticks: true,
        extotal: 35
    },
    crackshot: {
        name: "CRACKSHOT",
        subtitle: "EX: P. Turret",
        description: "Straight shot with good damage. Breaks<br>into weaker aimed projectiles.",
        dps: `30.17 / 19.14`,
        damage: `10.56 / 6.7`,
        rate: 21,
        ex: 3.5,
        exnum: '5*',
        extotal: '21*'
    },
    converge: {
        name: "CONVERGE",
        subtitle: "EX: Electro-Bolt",
        description: "Full-screen piercing 3-way shot. Hold<br>lock button to narrow spread.",
        dps: 32.04,
        damage: 2.67,
        num: 3,
        rate: 15,
        ex: 21
    },
    twistup: {
        name: "TWIST-UP",
        subtitle: "EX: Cyclone Spiral",
        description: "Rapid-fire shot with arced pathway and<br>average damage.",
        dps: 32.26,
        damage: 2.33,
        num: 3,
        rate: 13,
        ex: 8,
        exnum: 5,
        exticks: true,
        extotal: 40
    }
};