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
                myekulColor('"Lobbah"') + `: After the Phase 2 Lobber trap,
                    top runners will move left and aim up+right with Spread so only a singular bullet will be eaten by Oddity #2.`
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
                [phase('Phase 1'),
                    `During Goopy's Phase 1 lunge attack, his hitbox disappears for a brief moment,
                    causing bullets to sometimes miss.`
                ],
                [phase('Phase 2', 2),
                    `A sprite swap occurs during the Phase 1/2 transition.`
                ],
                [phase('Phase 3', 3),
                    `As the gravestone is falling during the Phase 2/3 transition, both Goopy and the gravestone have active hitboxes for a brief moment.`
                ]
            ],
            tricks: [
                [phase('Phase 2', 2, ['1.1', 'lobber']),
                myekulColor('Goopy Quads') + `: If you shoot up+down Lobber EXs with precise timing during the Oddity #2 sprite swap,
                you can hit splash damage on both hitboxes and land the EXs for 4x damage each.`
                + dim('This has a 6-frame window.')
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
                `Hilda stops taking damage when she puts her hands on her head during the final phase transition.` + cards()
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
                `If you hug the right side of the screen and shoot down+left Lobber EXs, you can hit a triple spot. `
                + dim('Note that these EXs will miss if Cagney is shooting a projectile.')
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
                    `Sometimes, Baroness's Phase 3 gun attack will interfere with the final phase transition, causing a glitched hitbox.
                    Your damage will be partially blocked in this state.`
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
                `Wally's stomach hitbox extends higher than you'd expect.` + hitbox()
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
                    Doing enough overdamage will cause the fight to get locked in Phase 3.
                    You can end the fight in this glitched state.`
                ],
                [phase('Phase 4', 4),
                    `If you hug the left side of the screen while the turban is flying toward you, you can lock the turban in place.`
                ],
                [phase('Phase 4', 4),
                    `You can fly vertically through the puppet's gun arm without taking damage.`
                ],
                [phase('Phase 4', 4, ['1.2+']),
                `When the puppet dies, its hitbox becomes misaligned.` + hitbox()
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
                `Beppi has a lingering hitbox when he gets ejected from the bumper car.` + hitbox()
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
            ],
            tricks: [
                [phase('Phase 2/3', 2, ['charge']),
                `At the end of Phase 2, look at the bottom of the balloon.
                    When the balloon string leaves the screen, that's the earliest moment you can shoot an upward Charge shot to hit the Phase 3 hitbox.`
                + dim('Note that there is a 50/50 chance you will get the right RNG.')
                ],
            ]
        },
        grimmatchstick: {
            oddities: [
                [phase('Phase 1', '', ['Regular']),
                    `Phase 1 has sub-phases. Grim's tail attack signifies the start of the next sub-phase.
                    <br>-In sub-phase 1, he can either shoot 2 or 3 sets of lasers.
                    After that, if he's still in sub-phase 1, he will shoot 3 or 4 slow meteors.
                    <br>-In sub-phase 2, he can either shoot 1 or 2 sets of lasers, OR he can shoot 2 fast meteors.`
                ],
                [phase('Phase 1/2', '', ['1.0']),
                    `When Grim retreats to the right at the end of Phase 1, his hitbox lingers off screen.`
                ],
                [phase('Phase 1/2/3', 2),
                myekulColor('Grim Glitch') + `: If you cross the Phase 2/3 damage threshold in Phase 1,
                Phase 2 will never end. You can end the fight in this glitched state.`
                ],
                [phase('Phase 2/3', 2),
                `Grim has a wonky misaligned hitbox during the Phase 2/3 transition.` + hitbox()
                ],
            ],
            tricks: [
                [phase('Phase 1'),
                    `Prolonging Phase 1 is ideal since you can get better DPS for a longer period of time.
                    With Oddity #1 in mind, you can anticipate certain patterns and manipulate a longer phase.
                    <br>-For example, if you get 2 lasers first, you should intentionally hold back to get 3 or 4 meteors.`
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
                `You can aim a bomb between the chest and hatch to deal damage to both parts.`
                + dim(`Note that indirect splash damage does not deal as much damage as a direct hit.`)
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
                [phase('Phase 3', 3),
                    `Phase 3 has two separate hitboxes for the robot and Dr. Kahl himself.
                    If you aim in a specific spot with specific timing,
                    your bombs can deal 1.5x damage by directly hitting one hitbox and then letting the other hitbox move into the lingering splash damage.`
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
                `Sally stops taking damage when she crosses the Phase 1/2 damage threshold (when the cupids rise above the stage).` + cards()
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
                `Taking advantage of the Oddity #2 sprite swap, you can position yourself in a triple spot to land a 6x Lobber EX with precise timing.`
                + dim('This has a 6-frame window, and it works on both sides.')
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
                `You can shoot the shark to make it leave the screen faster.`
                + dim('42% faster on Simple, 30% on Regular, 18% on Expert.')
                ],
                [phase('Squid'),
                    `You can shoot the squid to kill it and begin the next attack.`
                ],
                [phase('Pre-Final Phase'),
                `The final blow to Brineybeard will carry over to the final phase as overdamage.
                    After the final blow, you cannot deal damage until the ship stops screaming.`+ cards()
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
                    `You can duck under the dragon attack as it retreats.`
                ],
                [phase('Phase 1', '', ['1.0', '1.1', 'lobber']),
                `Certain parts of the ground have overlapping floor tiles.
                    This means you can hit 4x or even 5x Lobber EXs on the dragon and spider attacks.
                    ${nmg('On 1.2+, they will hit for 2x or 3x')}.`
                ],
                [phase('Phase 1', '', ['1.0', 'lobber', 'roundabout']),
                `The dragon hitbox is stored offscreen to the left of the stage.
                You can take advantage of this during the Phase 1/2 transition.
                    If you hug the left side of the screen, you can damage the hitbox.
                    <br>-If you get ${myekulColor('right dragon')}, aim up+left. You can shoot the offscreen hitbox with Roundabout and Lobber as well as their EXs.
                    <br>-If you get ${myekulColor('left or no dragon')}, aim straight left. You can ${myekulColor('ONLY')} shoot it with Roundabout and Roundabout EXs.`
                ],
                [phase('Phase 1/2', 2),
                    `While falling down the hole, you can hit one of the offscreen eyes in Phase 2 if you aim in a specific spot.`
                ],
                [phase('Phase 1/2', 2),
                    `If you pause buffer at a certain point while falling down the hole,
                    you can skip the Phase 2 intro animation and regain control of your character after using an EX.`
                ],
                [phase('Phase 1/2/3', 2),
                myekulColor("Devil Freeze") + `: If you push the Devil's HP past the Phase 2/3 damage threshold immediately after the pause buffer,
                you can glitch out the fight, causing the screen to stop scrolling.`
                ],
                [phase('Phase 2/3/4', 2, ['converge', 'super1', 'super3']),
                    `The eyes in Phase 2/3/4 have separate hitboxes. You can hit both with a Converge EX for double damage.
                    You can also use Cup/Mug's Super Art I or Ms. Chalice's Super Art III.`
                ],
                [phase('Phase 3/4', 2, ['lobber', 'charge']),
                `In Phase 3, the eyes start looking left and right.
                    With good timing, you can hit both with a Lobber EX or Charge EX for double damage.
                    ${myekulColor('You cannot land double Lobber EXs when the Devil is closing his eyes to spawn bats')}.
                    You can also hit double EXs at any point during Phase 4.`
                ],
            ],
            tricks: [
                [phase('Phase 1/2', 2, ['charge']),
                    `Taking advantage of Oddity #5,
                    while falling down the hole, you can shoot two downward Charge shots at one of the eye hitboxes.`
                ],
            ],
            advancedTricks: [
                [phase('Phase 1', '', ['1.0', 'lobber', 'roundabout']),
                myekulColor("Devil's Kiss") + `: Taking advantage of various exploits mentioned above,
                it's possible to end the fight in Phase 1.`
                ]
            ]
        },
        glumstonethegiant: {
            oddities: [
                [phase('Phase 1'),
                    `If you stand on the very right edge of the rightmost platform,
                    you can avoid the gnome's hammer attack while standing on the platform.`
                ],
                [phase('Phase 1'),
                    `The platforms fall when you reach certain HP thresholds.`
                ],
                [phase('Phase 1', '', ['charge']),
                    `Due to the slanted nature of the hitbox, Charge EXs will not hit Glumstone's cauldron attack hitbox if you do them too high up.`
                ],
                [phase('Phase 1', '', ['charge', 'super3', 'whetstone']),
                myekulColor('Glumstone Softlock') + `: If you cross the Phase 2/3 damage threshold in Phase 1,
                    the fight will not progress to Phase 2, resulting in a softlock.`+ impractical()
                ],
                [phase('Phase 1/2/3', 2, ['charge', 'super3', 'whetstone']),
                myekulColor('Glumstone Glitch') + `: If you cross the Phase 2/3 damage threshold at the start of Phase 2,
                    the fight will get locked in Phase 2. You can end the fight in this glitched state.`
                ],
                [phase('Phase 1/2', 2),
                    `The duration of Phase 1 will determine the speed at which the puppets appear at the start of Phase 2.`
                ],
                [phase('Phase 2', 2),
                    `Glumstone's arm will block bullets. For this reason, do not aim horizontally.
                    Try standing close to the puppet and aiming straight up.`
                ],
                [phase('Phase 2', 2, ['super1', 'super3']),
                    `Both puppets have separate hitboxes but share the same health pool.
                    You can take advantage of this by using Cup/Mug's Super Art I in a precise spot, or by using Ms. Chalice's Super Art III.`
                ],
                [phase('Phase 2', 2),
                    `The Phase 2/3 transition will not begin until Glumstone finishes his animation in the background.
                    This means that, if Glumstone starts laughing at the end of Phase 2, you will lose around 1.5s.`
                ],
                [phase('Phase 2', 2),
                    `Glumstone will laugh when you get hit.
                    With Oddity #9 in mind, try to time your damage boosts so you don't get a slow laugh transition.`
                ],
                [phase('Phase 3', 3, ['astralcookie']),
                myekulColor('Jumproll') + `: As Ms. Chalice, if you EX and dash at the very start of Phase 3,
                you will enter a glitched state where you will be rolling in the air indefinitely.
                You will be unable to shoot until you swap your weapon. Getting hit will eject you back to the ground.`
                ],
            ],
            tricks: [
                [phase('Phase 1', '', ['charge', 'spread']),
                    `The Charge/Spread opener for this fight is extremely simple.
                    Hold shoot and up+right, walk to the edge of the rightmost platform, and then lock and swap to Spread to release your Charge shot.`
                ],
                [phase('Phase 1', '', ['charge', 'spread']),
                    `After performing Trick #1, you can anticipate whether he does cauldron or geese.
                    If his idle animation lasts too long for him to begin a cauldron attack, switch to Charge.
                    Then, switch back to Spread when your Charge shot is ready.
                    Make sure to do this while holding shoot, lock, and up+right.`
                ],
                [phase('Phase 3', 3, ['charge']),
                    `React to the screen transition.
                    Before you enter Glumstone's mouth for the transition, aim down+right with a prepared Charge shot.
                    The moment Phase 3 becomes visible, release your Charge shot.`
                ],
            ]
        },
        mortimerfreeze: {
            oddities: [
                [phase('Phase 1'),
                    `The whale will eat your bullets.`
                ],
                [phase('Phase 1/2'),
                `When the snowman appears on the screen during the Phase 1/2 transition,
                    there is a brief period where you can deal double damage on two overlapping hitboxes.`+ hitbox()
                ],
                [phase('Phase 2/3', 2),
                    `When the platforms spawn in for the Phase 2/3 transition,
                    the screen will not start scrolling if you jump on the bottommost platform too early.
                    Wait for the 2nd platform to fully appear before jumping onto the bottom platform.`
                ],
                [phase('Phase 3', 3),
                    `You can determine the spawn direction of the snowflake by looking at its intro animation in the background.`
                ],
            ],
            advancedTricks: [
                phase2KO(true)
            ]
        },
        thehowlingaces: {
            oddities: [
                [phase('Phase 1/2/3', 1),
                    `Keeping the plane platform in the middle of the screen will prevent it from losing control during phase transitions.`
                ],
                [phase('Phase 1/3', 1, ['Simple']),
                    `On Simple mode only, all overdamage dealt to Phase 1 will contribute to the total HP pool.`
                ],
                [phase('Phase 1/3', 1, ['Regular', 'Expert']),
                `The final blow to Phase 1 will carry onto Phase 3 as overdamage.
                Subsequent shots will not deal any damage.` + cards()
                ],
                [phase('Phase 3'),
                    `You can determine exactly where the 2nd and 3rd sets of lasers will be based on the 1st set.`
                ],
                [phase('Phase 3'),
                    `You can duck under the pink laser if you hug a wall and crouch.`
                ],
                [phase('Phase 3'),
                    `When the screen rotates, the boss's hitbox does not become active until the rotation finishes.`
                ],
            ],
            tricks: [
                [phase('Phase 1/2/3', 1),
                    `The game gives you very fine control over the plane platform.
                    Doing short hops on the wings can prevent the plane from flying too far in one direction.
                    Use this to your advantage.`
                ],
            ],
            advancedTricks: [
                [phase('Phase 1', 1, ['Simple', 'charge', 'super3', 'whetstone']),
                myekulColor('Phase 1 K.O.') + `: By prolonging Phase 1 and triggering the transition at the cusp of an attack,
                you can end the fight in Phase 1 by dealing massive overdamage.`
                ],
            ]
        },
        estherwinchester: {
            oddities: [
                [phase('Phase 3', 3),
                    `If you stay close to Esther's Phase 3 hitbox, her projectiles cannot hit you.`
                ],
            ]
        },
        moonshinemob: {
            oddities: [
                [phase('Phase 1/2', 2),
                `At the very start of the fight, you can walk over to the dancing bug in the bottom right and attack her.
                    This will deal damage exclusively to the Phase 2 health pool.`+ impractical()
                ],
                [phase('Phase 1'),
                    `The final blow to Phase 1 will carry onto Phase 2 as overdamage.
                    Note that attempting to deal the final blow while the spider is partially off screen will prevent overdamage.`
                ],
                [phase('Phase 1/3', '', ['lobber']),
                    `The ground has overlapping floor tiles, meaning you can land 2x Lobber EXs in certain locations.`
                ],
                [phase('Phase 2/3', 2),
                `After Phase 2 ends, the dancing bug will fall onto the ground.
                    During this period, you can shoot her overdamage into the next phase.
                    She will stop taking damage after she gets up and starts running toward the gramophone.`+ cards()
                ],
                [phase('Phase 3', 4),
                    `If you kill the snail with Giant Ghost at the start of Phase 3, it will skip the 3-second anteater freeze.`
                ],
            ],
            advancedTricks: [
                [phase('Phase 3', 3, ['lobber']),
                myekulColor('Lunar Eclipse') + `: Taking advantage of Oddity #3,
                you can instantly end the fight if you do up+down Lobber EXs on the anteater's trunk at the bottom left/right corner of the screen.`
                + dim('This has a 1/3 success rate due to RNG.')
                ],
                phase2KO()
            ]
        },
        chefsaltbaker: {
            oddities: [
                [phase('Phase 1'),
                myekulColor('Lingering Hitbox') + `: At the end of Phase 1, a small rectangular hitbox appears for 21 frames.
                The hitbox disappears when Saltbaker slams the table.
                If you deal a sufficient amount of damage to this hitbox in this timeframe,
                you'll be able to launch 1 or 2 ${myekulColor('cursed shakers')} in Phase 2.
                    Understanding this overdamage property is perhaps the single most important part of landing
                    ${myekulColor('Saltimate')} and ${myekulColor('Chargimate')}.`
                ],
                [phase('Phase 2', 2),
                    `When the pepper shakers spawn in at the start of Phase 2, they have a very brief period of invincibility.
                    When this period of invincibility ends, they become vulnerable but cannot be launched.
                    When Saltbaker stops laughing at the start of Phase 2, that's when you can start launching the shakers.`
                ],
                [phase('Phase 2', 2),
                myekulColor('Cursed Shaker') + `: If a pepper shaker respawns the moment Phase 2 ends,
                it can become a ${myekulColor('cursed shaker')}.
                    If you've dealt enough damage to the Phase 1 lingering hitbox,
                    you may be able to launch one of these cursed shakers during the Phase 2/3 transition,
                    dealing an additional 47 overdamage to Phase 3.
                    This is the main way to perform the essential overdamage for the ${myekulColor('Saltimate Jutsu')}.`
                ],
                [phase('Phase 2', 2),
                myekulColor('Cursed Shaker (cont.)') + `: If you fail to deal sufficient damage to the Phase 1 lingering hitbox,
                you will not be able to launch a cursed shaker.
                However, you can still generate cards on the cursed shaker's hitbox.`
                ],
                [phase('Phase 2', 2),
                `Another way to launch extra shakers is to finish Phase 2 by killing multiple shakers at the same time.
                Note that you still need sufficient Phase 1 lingering hitbox overdamage.
                    This is the most common way to perform the ${myekulColor('Chargimate Jutsu')}.`
                ],
                [phase('Phase 2/3', 3),
                    `The spawn location of the Phase 3 sawblade(s) is determined by your x position during the Phase 2/3 transition.`
                ],
                [phase('Phase 3', 3),
                myekulColor('Widebox') + `: As you're falling at the start of Phase 3,
                Saltbaker's Phase 3 hitbox will appear for exactly ${myekulColor('one frame')} above the middle of the screen.
                After the one frame has elapsed, it will immediately disappear.
                You can deal damage to this 1-frame hitbox with precise aim and timing.`
                ],
                [phase('Phase 3', 3, ['charge']),
                myekulColor('Half-Chargimate') + `: If your Phase 1 Chargimate damage value was slightly off,
                you can still trigger an early Phase 4 transition by hitting the Widebox.
                This will cause the transition to begin before the Phase 3 salt monster has even spawned.`
                ],
                [phase('Phase 3', 3, ['lobber']),
                    `The ground in Phase 3 has overlapping floor tiles, meaning you can land 2x Lobber EXs in certain locations.
                    The left and right edges of the screen are the easiest places to do it.`
                ],
            ],
            tricks: [
                [phase('Phase 1'),
                    `Prolonging Phase 1 is ideal since you can get better DPS for a longer period of time.
                    Generate 3.6 cards, and then offload EXs during the final attack animation.`
                ],
            ],
            advancedTricks: [
                [phase('Phase 3', 3, ['lobber', 'spread']),
                myekulColor('Saltimate Jutsu') + `: The ubiquitous salt trick; one of the hardest tricks in the game.
                After dealing sufficient damage to the Phase 1 lingering hitbox,
                you'll be able to set up a cursed shaker to send at the end of Phase 2.
                At the start of Phase 3, you can do a massive Lobber trap as you're falling.
                Taking advantage of the overlapping floor tiles in Phase 3,
                you can do up+down Lobber EXs to land two triples as the salt monster falls onto you.
                If executed perfectly, the fight will end right at this moment.
                It can save up to ${myekulColor('10 seconds')} in a speedrun.`
                ],
                [phase('Phase 3', 3, ['charge', 'spread', 'Major Glitch']),
                myekulColor('Chargimate Jutsu') + `: The Charge/Spread counterpart of Saltimate.
                If you deal sufficient damage to the Phase 1 lingering hitbox,
                you will be able to send ${myekulColor('2 cursed shakers')} at the end of Phase 2, in addition to the final blow shaker.
                If you end Phase 1 within a specific damage range (5 HP window),
                you can send three shakers at the end of Phase 2 to skip Phase 3 entirely, causing the fight to get locked in Phase 3.
                You can end the fight in this glitched state.
                It can also save up to ${myekulColor('10 seconds')} in a speedrun.`
                ],
            ]
        }
    }
}