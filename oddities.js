let oddities
function setBossInfo() {
    oddities = {
        therootpack: {
            oddities: [
                [phase('Phase 1'),
                    `Phase 1 doesn't take any damage until the potato opens its mouth.`
                ],
                [phase('Phase 2', 2),
                    `The first projectile that lands on the onion will not deal any damage.`
                ]
            ],
            tricks: [
                [phase('Phase 1', '', ['lobber']),
                    `Top runners will go to the left and prepare an up+right Lobber to play around Oddity #1.`
                ],
                [phase('Phase 2', 2, ['lobber', 'spread']),
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
                    `After the fight has crossed the Phase 1/2 damage threshold, you can shoot in the Oddity #1 spot to hit both frogs for double damage.`
                ],
                [phase('Phase 3', 3),
                    `After the fight has crossed the Phase 2/3 damage threshold, you cannot deal additional overdamage.
                Your next opportunity to deal damage is when the slot machine opens up.`
                ]
            ],
            tricks: [
                [phase('Phase 2', 2, ['1.0', '1.1', 'lobber']),
                    `Taking advantage of Oddity #2, you can shoot downward Lobber EXs to deal quadruple damage.`
                ],
                [phase('Phase 3', 3, ['lobber']),
                    `After parrying the slot machine arm, the slots will spin and then flash like "1-2-3, 1-2-3, 1-2-3".
                At the third 1 in that sequence, that's the visual cue to shoot your Lobber EX.`
                ],
                [phase('Phase 3', 3, ['lobber']),
                    `If you parry the slot machine arm and start holding shoot during the parry lag, and you pair this with Trick #2, your Lobber timing will be perfect for a same-weapon Kaleva swap EX when the slot machine opens up.`
                ]
            ],
            advancedTricks: [
                [phase('Phase 3', 3, ['1.0', '1.1', 'lobber']),
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
                [phase('Phase 2', 2, ['1.1', 'lobber']),
                myekulColor('Goopy Quads') + `: If you shoot up+down Lobber EXs with precise timing during the Oddity #1 sprite swap,
                you can hit splash damage on both hitboxes and land the EXs for 4x damage each.
                ${dim('This has a 6-frame window.')}`
                ],
                [phase('Phase 2', 2, ['1.1', 'lobber']),
                myekulColor('Triple Triple') + `: If you damage boost on small Goopy after grabbing parries, you will be perfectly aligned for a triple on small Goopy.
                    Then, when Goopy grows, you will be in a perfect position for another triple on big Goopy.
                    <br><br>Combine this with Goopy Quads and you can land a 4x (upward EX) and a 6x (down+diagonal EX) during the sprite swap.`
                ]
            ]
        },
        hildaberg: {
            oddities: [
                [phase('Pre-Final Phase'),
                `Hilda stops taking damage when she puts her hands on her head during the final phase transition.
                    ${cards()}`
                ],
                [phase('Final Phase', 6),
                    `Hilda begins taking damage again when she is fully transitioned into the moon.`
                ],
                [phase('Final Phase', 6),
                    `EXs fired in a certain position can get stuck inside of a UFO and deal a bunch of extra ticks of damage to Hilda.`
                ]
            ]
        },
        cagneycarnation: {
            oddities: [
                [phase('Final Phase', 2, ['1.1', 'lobber']),
                    `If you hug the right side of the screen and shoot down+left Lobber EXs, you can hit a triple spot.`
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
                [phase('Waffle', 'waffle', ['1.1', 'lobber']),
                `Taking advantage of the waffle's double hitbox, you can shoot a Lobber EX when the minion comes out and have it hit for 4x damage,
                    causing the waffle to die extremely quickly. ${nmg('On 1.2+, the EX will hit for 2x')}.`
                ]
            ]
        },
        wallywarbles: {
            oddities: [
                [phase('Phase 1', '', ['1.0', '1.1']),
                    `Wally does not start taking damage until he finishes his intro animation.`
                ],
                [phase('Phase 3', 3),
                    `You can pause buffer immediately after Phase 3 ends to instantly trigger the Phase 4 transition.`
                ],
                [phase('Phase 3', 3, ['1.2+']),
                    `After Phase 3 ends, the stored hitbox position of Phase 2 spawns in for one frame, and it can hit you by surprise.`
                ],
                [phase('Phase 4', 4, ['1.2+']),
                `Wally's stomach hitbox extends higher than you'd expect. ${hitbox()}`
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
                `When the puppet dies, its hitbox becomes misaligned. ${hitbox()}`
                ],
            ],
            advancedTricks: [
                [phase('Phase 2', 2),
                    `In addition to the overdamage in Oddity #1,
                    you can also shoot one more bullet at the same time as your bomb to get even more overdamage.`
                ],
            ]
        },
        beppitheclown: {
            oddities: [
                [phase('Phase 1/2', 2, ['Major Glitch']),
                myekulColor('Beppi Skip') + `: If you deal a ton of overdamage in Phase 1, you can bypass the Phase 2/3 damage threshold and cause the fight to get locked in Phase 2.
                You can end the fight in this glitched state.`
                ],
                [phase('Phase 1', '', ['1.0', '1.1']),
                `Beppi has a lingering hitbox when he gets ejected from the bumper car. ${hitbox()}`
                ],
                [phase('Phase 1', '', ['charge']),
                    `You can hit the ducks at a certain angle with a Charge shot to generate twice as many cards.`
                ],
                [phase('Phase 1/2', 3, ['1.0', 'roundabout', 'lobber']),
                    `Beppi's Phase 3 hitbox is stored offscreen to the left of the stage.
                    You can hit it by shooting Roundabout while hugging the left side of the screen.
                    You can also shoot Lobber EXs up+left to hit a triple spot.`
                ],
                [phase('Phase 1/2/3/4', 4, ['peashooter', 'converge']),
                    `For the entire fight, Beppi's final phase hitbox is stored offscreen far below the center of the stage.
                    You can shoot downward Peashooter EXs and Converge EXs to reach the hitbox.`
                ],
            ]
        },
        grimmatchstick: {
            oddities: [
                [phase('Phase 1/2', '', ['1.0']),
                    `When Grim retreats to the right at the end of Phase 1, his hitbox lingers off screen.`
                ],
                [phase('Phase 2/3', 2),
                `Grim has a wonky misaligned hitbox during the Phase 2/3 transition. ${hitbox()}`
                ],
            ]
        },
        rumorhoneybottoms: {
            oddities: [
                [phase('Phase 1', 1),
                    `The final blow on the police bee will carry onto Phase 2 as overdamage.`
                ],
                [phase('Phase 1', 1),
                    `It's possible to grab every parry from a police bee bomb without taking damage.`
                ],
                [phase('Phase 2', '', ['Regular', 'Expert']),
                    `Rumor's Phase 2 attack pattern will always follow a cycle: middle, orbs, triangles, middle, orbs, triangles, etc.`
                ],
                [phase('Phase 2'),
                    `Rumor's middle attack has a lingering offscreen hitbox for a brief moment after it retreats to the top of the screen.`
                ],
                // [phase('Phase 2'),
                //     `Rumor's orbs/triangles hitbox does not extend above the ceiling at all.
                //     This means you will miss bullets if you're standing too far up.`
                // ],
                [phase('Phase 2', '', ['1.0', '1.1', 'lobber']),
                    `Shooting Lobbers at an orb will generate cards.`
                ],
                [phase('Phase 2', '', ['1.0', '1.1']),
                    `You can spam parries inside of an orb. This will tank RTA time, but could be useful for IGT ILs.`
                ],
                [phase('Phase 2/3', '', ['1.3', 'charge']),
                    `A ceiling added in version 1.3 prevents you from shooting Charge shots at the top of the screen.
                    This includes shooting downward from above the ceiling.`
                ],
                [phase('Phase 1/2/3', 3, ['peashooter', 'converge']),
                    `Similar to Beppi, Rumor's final phase hitbox is stored offscreen far below the center of the stage.
                    In every phase, you can shoot downward Peashooter EXs and Converge EXs to reach the hitbox.`
                ]
            ],
            tricks: [
                [phase('Phase 2', '', ['1.3', 'Simple', 'whetstone']),
                    `Taking advantage of Oddity #7,
                    you can spam Whetstone hits at the top of the screen by holding down and spamming jump while on a platform near Rumor's hitbox.`
                ],
            ]
        },
        drkahlsrobot: {
            oddities: [
                [phase('Phase 1'),
                `You can aim a bomb between the chest and hatch to deal damage to both parts.
                    ${dim(`Note that indirect splash damage does not deal as much damage as a direct hit.`)}`
                ],
                [phase('Phase 1', '', ['Major Glitch', '1.0']),
                    `A major skip exists on the Legacy 1.0 version.
                If you land a bomb EX on the heart when in a specific damage range, you can end the fight INSTANTLY in Phase 1.`
                ],
                [phase('Phase 3', 3, ['1.1', '1.2', '1.3']),
                `The gem parries spawn in a predictable pattern.
                    Memorizing the parry locations can be highly advantageous.
                    ${myekulColor(`NOTE: A laggy game can mess up the parry locations.`)}
                    <br>It is recommended that you restart your game regularly to prevent this.`
                ],
            ],
            advancedTricks: [
                [phase('Phase 1'),
                myekulColor('TAS EX') + `: You can land a precise plane EX to get it stuck between the chest and hatch,
                dealing massive damage. ${myekulColor('This is not a consistent RTA strat')}.`
                ],
            ]
        },
        sallystageplay: {
            oddities: [
                [phase('Phase 1', '', ['1.2+', 'Major Glitch']),
                myekulColor('Sally Skip') + `: By activating the secret phase and then
                    pushing Sally past the Phase 1/2 threshold before the husband returns to the middle of the screen,
                    it's possible to glitch out the fight and skip Phase 2 entirely.`
                ],
                [phase('Phase 1'),
                `Sally stops taking damage when she crosses the Phase 1/2 damage threshold. ${cards()}`
                ],
                [phase('Phase 2', 2),
                    `Sally does not start taking damage until she returns to her idle animation after pointing at you.`
                ],
                [phase('Phase 2', 2),
                    `Sally's umbrella is an additional hitbox that you can hit for double damage.`
                ],
                [phase('Phase 2/3', 2),
                    `If Sally dies closer to the top of the screen, the fight will transition into Phase 3 quicker.`
                ],
                [phase('Phase 1/2/3', 3, ['1.0', 'roundabout', 'charge']),
                    `Sally's Phase 3 hitbox is stored offscreen, directly above where it normally appears.
                    You can reach it with well-timed Roundabout bullets or Charge shots.`
                ],
                [phase('Secret Phase', 3, ['1.2+']),
                    `You can hit both Sally and her husband for double damage.`
                ]
            ],
            tricks: [
                [phase('Phase 2/3', 3, ['charge']),
                    `When Sally dies in Phase 2, watch her ankles.
                    Right before they leave the screen is the earliest moment you can shoot an upward Charge shot at the Phase 3 hitbox.`
                ],
            ]
        },
        wernerwerman: {
            oddities: [
                [phase('Phase 1', '', ['charge']),
                    `The pink springs will eat Charge shots and nullify damage.`
                ],
                [phase('Phase 1/2'),
                    `A sprite swap occurs during the Phase 1/2 transition.`
                ],
                [phase('Phase 2/3', 2, ['1.0', '1.1', 'lobber']),
                `When Phase 2 ends, you can hug the ${myekulColor('left side')} of his platform and shoot down+right Lobber EXs to deal 4x damage on every EX.`
                ],
                [phase('Phase 2/3', 3),
                    `When the cat appears on the screen during the Phase 2/3 transition,
                    there is a brief moment where both hitboxes are overlapping.`
                ],
            ],
            tricks: [
                [phase('Phase 1/2', '', ['1.0', '1.1', 'lobber']),
                `Taking advantage of the Oddity #2 sprite swap, you can position yourself in a triple spot to land a 6x Lobber EX with precise timing.
                    ${dim('This has a 6-frame window, and it works on both sides.')}`
                ],
            ]
        },
        captainbrineybeard: {
            oddities: [
                [phase('First Gun Attack'),
                    `If Brineybeard does a 2-2 gun pattern,
                    the delay between shots will be longer than a 1-3 or a 3-1.`
                ],
                [phase('Shark'),
                `You can shoot the shark to make it leave the screen faster.
                    ${dim('42% faster on Simple, 30% on Regular, 18% on Expert.')}`
                ],
                [phase('Squid'),
                    `You can shoot the squid to kill it and commence the next attack.`
                ],
                [phase('Pre-Final Phase'),
                `The final blow to Brineybeard will carry over to the final phase as overdamage.
                    After the final blow, you cannot deal damage until the ship stops screaming.
                    ${cards()}`
                ]
            ],
            tricks: [
                [phase('Final Phase', 2),
                    `You can duck under the laser and dash to avoid the barrel.`
                ],
            ]
        },
        calamaria: {
            oddities: [
                [phase('Phase 2', 2),
                    `Before Cala does her stone gaze, if you perform a Luigi swap plane EX and then stop holding the shoot button,
                    you will keep shooting while frozen.`
                ],
                [phase('Phase 2', 2, ['1.0']),
                    `In Phase 2, if you stay close, you won't be frozen by the stone gaze.`
                ],
                [phase('Phase 3', 2),
                    `In Phase 3, if you stay close, you won't be frozen by the stone gaze.`
                ],
            ]
        },
        phantomexpress: {
            oddities: [
                [phase('Phase 1', 1),
                    `Phase 1 has a lingering hurtbox after it dies, but you cannot generate cards from it.`
                ],
                [phase('Phase 2', 2),
                `Phase 2 has a lingering hurtbox after it dies, which you ${myekulColor('can')} generate cards on.`
                ],
                [phase('Phase 3', 3),
                    `Both twins have separate hitboxes, meaning you can deal double damage with a variety of methods.`
                ],
            ],
            tricks: [
                [phase('Phase 3/4', '', ['lobber']),
                myekulColor('Ghost Wrangling') + `: If you keep a Phase 3 ghost on screen,
                    you can lure it to a position where you can kill it, grab the parry,
                    and then create a 3-Lobber trap as opposed to a 1-Lobber trap.`
                ],
            ]
        },
        kingdice: {
            oddities: [
                [phase('2, 3, 4, 5, 6', '', ['whetstone']),
                    `On these fights, if you parry the boss after the knockout, you can generate cards until the screen starts fading out.`
                ],
                [phase('1. Tipsy Troop', 1, ['charge']),
                    `If you hold up+right, walk up to the boss, and then lock and release your Charge shot when it's ready,
                    you'll position yourself in a spot where you can shoot double damage Charge shots on the first two glasses.`
                ],
                [phase('1. Tipsy Troop', 1, ['converge']),
                    `Converge will annihilate this fight. Lock and shoot to end alcoholism.`
                ],
                [phase('3. Mr. Wheezy', 3),
                    `On Regular mode, if you stand in a certain spot on the left side, the incoming flames will never hit you.`
                ],
                [phase('5. Hopus Pocus', 5, ['spread']),
                    `The hat will block Spread bullets, but everything else will go through it.`
                ],
                [phase('5. Hopus Pocus', 5),
                    `If you grab a parry after the knockout (but before the fadeout), you will get an extra card for the next fight,
                    and you can also shoot the boss's hitbox to generate cards.`
                ],
                [phase('9. Mr. Chimes', 9),
                    `The card game is not entirely random.
                    Try myekul's <a href='https://myekul.github.io/monkey-tool' class='clickable' style='color:#63b5a9'>Monkey Tool</a>
                    to learn more.`
                ],
                [phase('9. Mr. Chimes', 9, ['1.0']),
                    `You can skip the memory game by parrying two mismatched cards in a specific frame window.`
                ],
            ],
            tricks: [
                [phase('5. Hopus Pocus', 5, ['lobber']),
                    `At the start of the fight, hold up+right, then jump and then start shooting soon after.
                    Your first Lobber will hit the boss.`
                ],
            ]
        },
        thedevil: {
            oddities: [
                [phase('Phase 1', '', ['1.0']),
                    `You can duck under the clap attack.`
                ],
                [phase('Phase 1', '', ['1.1', '1.2', '1.3']),
                    `You can duck under the dragon attack.`
                ],
                [phase('Phase 1', '', ['1.0', '1.1', 'lobber']),
                `Certain parts of the ground have overlapping floor tiles.
                    This means you can hit 4x or even 5x Lobber EXs on the dragon and spider attacks.
                    ${nmg('On 1.2+, they will hit for 2x or 3x')}.`
                ],
                [phase('Phase 1/2', 2, ['charge']),
                    `While falling down the hole, you can shoot two downward Charge shots at an offscreen hitbox.`
                ],
                [phase('Phase 1/2', 2),
                    `If you pause buffer at a certain point while falling down the hole,
                    you will be able to skip the Phase 2 scared animation and regain control of your character after using an EX.`
                ],
            ]
        },
        glumstonethegiant: {
            oddities: [
                [phase('Phase 1'),
                    `If you stand on the very right edge of the rightmost platform,
                    you can avoid the gnome's hammer attack while standing on the platform.`
                ],
                [phase('Phase 1', '', ['charge']),
                    `Charge EXs will not hit Glumstone's cauldron hitbox if you do them too high up.`
                ],
                [phase('Phase 2', 2),
                    `The phase 3 transition will not begin until Glumstone finishes his animation in the background.
                    This means that, if Glumstone starts laughing at the end of Phase 2, you will lose around 1.5s.`
                ],
                [phase('Phase 2', 2),
                    `Glumstone will laugh when you get hit.
                    With Oddity #3 in mind, try to time your damage boosts so you don't get a slow laugh transition.`
                ],
            ]
        }
    }
}