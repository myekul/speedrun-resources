let oddities
function setBossInfo() {
    oddities = {
        therootpack: {
            oddities: [
                [phase('Phase 1'),
                    `Phase 1 doesn't take any damage until the "WALLOP!" text disappears.`
                ],
                [phase('Phase 2', 2),
                    `The first projectile that lands on Phase 2 will not deal any damage.`
                ]
            ],
            tricks: [
                [phase('Phase 1'),
                    `Top runners will go to the left and prepare an up+right Lobber to play around Oddity #1.`
                ],
                [phase('Phase 2', 2),
                    `After the Phase 2 Lobber trap, top runners will move left and aim up+right with Spread so only a singular bullet will be eaten by Oddity #2.`
                ]
            ]
        },
        ribbyandcroaks: {
            oddities: [
                [phase('Phase 1'),
                `If you crouch and shoot in a specific spot in front of Ribby, you can hit both frogs to generate extra cards.
            ${myekulColor('This will NOT deal double damage')} until Phase 2.`
                ],
                [phase('Phase 2', 2),
                    `After the fight has crossed the Phase 2 damage threshold, you can shoot in the Oddity #1 spot to hit both frogs for double damage.`
                ],
                [phase('Phase 3', 3),
                    `After the fight has crossed the Phase 3 damage threshold, you cannot deal additional overdamage.
                Your next opportunity to deal damage is when the slot machine opens up.`
                ]
            ],
            tricks: [
                [phase('Phase 2', 2, ['1.0', '1.1']),
                    `Taking advantage of Oddity #2, you can shoot downward Lobber EXs to deal quadruple damage.`
                ],
                [phase('Phase 3', 3),
                    `After parrying the slot machine arm, the slots will spin and then flash like "1-2-3, 1-2-3, 1-2-3".
                At the third 1 in that sequence, that's the visual cue to shoot your Lobber EX.`
                ],
                [phase('Phase 3', 3),
                    `If you parry the slot machine arm and start holding shoot during the parry lag, and you pair this with Trick #2, your Lobber timing will be perfect for a same-weapon Kaleva swap EX when the slot machine opens up.`
                ]
            ],
            advancedTricks: [
                [phase('Phase 3', 3, ['1.0', '1.1']),
                    `It's possible to hit 4x or even 5x Lobber EXs when the EX collides with the ground and a tiger platform on the same frame.`
                ],
                [phase('Phase 3', 3),
                    `You can do a frame-perfect pause buffer at the end of a slot machine attack to continue attacking the machine after you're supposed to.`
                ],
            ]
        },
        goopylegrande: {
            oddities: [
                [phase('Phase 2', 2),
                    `A sprite swap occurs during the Phase 1/2 transition.`
                ],
                [phase('Phase 3', 3),
                    `As the gravestone is falling during the Phase 2/3 transition, both Goopy and the gravestone have active hitboxes for a brief moment.`
                ]
            ],
            tricks: [
                [phase('Phase 2', 2, ['1.1']),
                myekulColor('Goopy Quads') + `: If you shoot up+down Lobber EXs with precise timing during the Oddity #1 sprite swap, you can hit splash damage on both hitboxes and land the EXs for 4x damage each.
                    This has a 6-frame window.`
                ],
                [phase('Phase 2', 2, ['1.1']),
                myekulColor('Triple Triple') + `: If you damage boost on small Goopy after grabbing parries, you will be perfectly aligned for a triple on small Goopy.
                    Then, when Goopy grows, you will be in a perfect position for another triple on big Goopy.
                    <br><br>Combine this with Goopy Quads and you can land a 4x (upward EX) and a 6x (down+diagonal EX) during the sprite swap.`
                ]
            ]
        },
        hildaberg: {
            oddities: [
                [phase('Final Phase', 6),
                    `EXs fired in a certain position can get stuck inside of a UFO and deal a bunch of extra ticks of damage to Hilda.`
                ]
            ]
        },
        baronessvonbonbon: {
            oddities: [
                [phase('Waffle', 'waffle'),
                    `The waffle has an inner hitbox and an outer hitbox.
                    You can deal double damage by aiming in the middle.`
                ],
                [phase('Gumball', 'gumball'),
                    `The gumball machine has a head hitbox and a body hitbox.
                    You can deal double damage by aiming in the middle.`
                ],
                [phase('Candy Corn', 'candycorn'),
                    `When the candy corn dies closer to the top of the screen, the next minion will appear faster.`
                ],
                [phase('Final Phase'),
                    `You cannot damage Baroness when her gun is out, but you can generate cards.`
                ],
                [phase('Final Phase'),
                    `Sometimes, Baroness's Phase 3 gun attack will interfere with the final phase transition, causing a glitched hitbox.`
                ]
            ],
            tricks: [
                [phase('Waffle', 'waffle', ['1.1']),
                    `Taking advantage of the waffle's double hitbox, you can shoot a Lobber EX when the minion comes out and have it hit for 4x damage,
                    causing the waffle to die extremely quickly.`
                ]
            ]
        },
        wallywarbles: {
            oddities: [
                [phase('Phase 1'),
                    `Wally does not start taking damage until he finishes his intro animation.`
                ],
                [phase('Phase 3', 3),
                    `You can pause buffer immediately after Phase 3 ends to instantly trigger the Phase 4 transition.`
                ],
                [phase('Phase 3', 3, ['1.2+']),
                    `After Phase 3 ends, the stored hitbox position of Phase 2 spawns in for one frame, and it can hit you by surprise.`
                ]
            ]
        },
        djimmithegreat: {
            oddities: [
                [phase('Phase 2', 2),
                    `You can get overdamage on the pillars by shooting 5 bullets plus a bomb.`
                ],
                [phase('Phase 1/2/3', 3, ['1.0']),
                    `You can hit an offscreen hitbox by sitting in the bottom left and shooting bombs.
                    Doing enough overdamage will cause the fight to get locked in Phase 3.`
                ],
                [phase('Phase 4', 4),
                    `If you hug the left side of the screen while the turban is flying toward you, you can lock the turban in place.`
                ],
                [phase('Phase 4', 4),
                    `You can fly vertically through the puppet's gun arm without taking damage.`
                ],
                [phase('Phase 4', 4, ['1.2+']),
                    `When the puppet dies, its hitbox becomes misaligned. This is best observed with a hitbox mod.`
                ],
            ]
        },
        beppitheclown: {
            oddities: [
                [phase('Phase 1/2', 2),
                myekulColor('Beppi Skip') + `: If you deal a ton of overdamage in Phase 1, you can bypass the Phase 2 damage threshold and cause the fight to get locked in Phase 2.
                You can end the fight in this glitched state.`
                ],
                [phase('Phase 1', '', ['1.0', '1.1']),
                    `Beppi has a lingering hitbox when he gets ejected from the bumper car.`
                ],
                [phase('Phase 1/2', 3, ['1.0']),
                    `Beppi's Phase 3 hitbox is stored offscreen to the left of the stage.`
                ],
                [phase('Phase 1/2/3/4', 4),
                    `For the entire fight, Beppi's Phase 4 hitbox is stored offscreen far below the center of the stage.
                    You can shoot downward Peashooter EXs and Converge EXs to reach the hitbox.`
                ],
            ]
        },
        grimmatchstick: {
            oddities: [
                [phase('Phase 3', 3),
                    `Grim has a wonky misaligned hitbox during the Phase 2/3 transition.`
                ],
                [phase('Phase 1/2','', ['1.0']),
                    `When Grim goes to the right at the end of Phase 1, his hitbox lingers off screen.`
                ]
            ]
        }
    }
}
function phase(phaseText, phase, versions) {
    const boss = bossArray[globalBossIndex]
    const versionSet = {
        '1.0': { className: 'legacy' },
        '1.1': { className: 'onePointOne' },
        '1.2': { className: 'nmg' },
        '1.2+': { className: 'nmg' },
        '1.3': { className: 'dlcbase' }
    }
    let HTMLContent = ''
    if (boss) {
        HTMLContent += `<div>`
        HTMLContent += `
        <table style='border:3px solid var(--banner);border-radius:5px'>
            <tr>
                <td class='container' style='gap:6px;padding:0 4px'>${getImage(boss, 42, phase)}${phaseText}</td>
            </tr>
        </table>`
        if (versions) {
            HTMLContent += `<div class='container' style='gap:5px;padding-top:3px'>`
            versions.forEach(version => {
                HTMLContent += `<div class='${versionSet[version].className}' style='border-radius:5px;padding:2px'>${version}</div>`
            })
            HTMLContent += `</div>`
        }

        HTMLContent += `</div>`
    }
    return HTMLContent
}