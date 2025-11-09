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
        HTMLContent += `</div></div>`
    }
    function shotDetails(shot, index) {
        const shotObject = shotData[shot]
        let HTMLContent = ''
        HTMLContent += `
        <div class='container ${getRowColor(index + 1)}' style='padding:10px;width:700px;margin:0 auto'>
            <div style='width:80px'>
                <div style='margin-right:10px'>${shotObject.dps}</div>
                <div style='color:gray;font-size:80%'>DPS</div>
            </div>
            <div style='width:350px'>
                <div class='container' style='justify-content:left;gap:10px'>
                    <div style='margin-top:5px'>${cupheadShot(shot, 48)}</div>
                    <div>
                        <div class='font2' style='font-size:150%;margin-top:3px'>${shotObject.name}</div>
                        <div class='font2' style='font-size:100%;margin-top:3px;color:gray'>${shotObject.subtitle}</div>
                    </div>
                </div>
                <div style='font-size:90%;color:gray;margin-top:10px'>${shotObject.description}</div>
            </div>
            <div class='container' style='width:200px;margin:0'>
                <div style='width:200px'>
                    <img src='images/shot/${shot}.png' style='height:35px'>
                    <div>${shotObject.damage}
                        <span style='color:gray;font-size:90%'> per bullet</span>
                        ${shotObject.num ? ' x ' + shotObject.num : ''}
                        <br><span style='color:gray;font-size:90%'>every</span> ${shotObject.rate} <span style='color:gray;font-size:90%'>frames</span>
                    </div>
                </div>
                ${shot == 'charge' ? `
                <div><img src='images/shot/charge2.png' style='height:52px'></img>
                46 <span style='color:gray;font-size:90%'> per bullet</span>
                </div>` : ''}
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
        ex: `8.334 x 3 hits
        <br>25 total`
    },
    spread: {
        name: "SPREAD",
        subtitle: "EX: Eight Way",
        description: "Short range with great damage - if<br>you can keep close to your target.",
        dps: 41.33,
        damage: 1.24,
        num: 5,
        rate: 9,
        ex: `4.3 x 8 ticks
        <br>34.4 total`
    },
    chaser: {
        name: "CHASER",
        subtitle: "EX: Chaos Orbit",
        description: "Long range with below-average<br>damage. No aiming required.",
        dps: 17.1,
        damage: 2.85,
        rate: 10,
        ex: `7 x 4 bullets
        <br>28 total`
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
        ex: `5 x 7 ticks
        <br>35 total`
    },
    crackshot: {
        name: "CRACKSHOT",
        subtitle: "EX: P. Turret",
        description: "Straight shot with good damage. Breaks<br>into weaker aimed projectiles.",
        dps: `30.17 / 19.14`,
        damage: `10.56 / 6.7`,
        rate: 21,
        ex: 3.5
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
        ex: 8
    }
};