const express = require('express');
const router = express.Router();
const passport = require('passport');

const Character = require('../../models/character');
const User = require('../../models/user');

const validateCharacterInput = require('../../validation/character');

// GET all characters
router.get('/', (req, res) => {
    Character.find()
        .sort({ date: -1 })
        .then(characters => res.json(characters))
        .catch(err => res.status(404).json({ noCharacters: 'There is nothing here' })
        );
});

// GET character by ID
router.get('/:id', (req, res) => {
    Character.findById(req.params.id)
        .then(character => res.json(character))
        .catch(err => res.status(404).json({ noCharacter: 'No charcter found with that ID' })
        );
});

// POST(CREATE) character
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCharacterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newCharacter = new Character({
        user: req.user.id,
        avatar: req.body.avatar,
        name: req.body.name,
        gender: req.body.gender,
        alignment: req.body.alignment,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        xp: req.body.xp,
        eyes: req.body.eyes,
        skin: req.body.skin,
        backStory: req.body.backStory,
        apperance: req.body.apperance,
        personalityTraits: req.body.personalityTraits,
        ideals: req.body.ideals,
        bonds: req.body.bonds,
        flaws: req.body.flaws,
        armor: req.body.armor,
        shield: req.body.shield,
        weapons: req.body.weapons,
        tools: req.body.tools,
        currency: req.body.currency,
        treasure: req.body.treasure,
        magicItem: req.body.magicItem,
        equipment: req.body.equipment,
        race: req.body.race,
        class: req.body.class,
        maximumHitPoints: req.body.maximumHitPoints,
        currentHitPoints: req.body.currentHitPoints,
        temporaryHitPoints: req.body.temporaryHitPoints,
        armorClass: req.body.armorClass,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        intelligence: req.body.intelligence,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
        proficiencyBonus: req.body.proficiencyBonus,
        levelOneSpell: req.body.levelOneSpell,
        levelTwoSpell: req.body.levelTwoSpell,
        levelThreeSpell: req.body.levelThreeSpell,
        levelFourSpell: req.body.levelFourSpell,
        levelFiveSpell: req.body.levelFiveSpell,
        levelSixSpell: req.body.levelSixSpell,
        levelSevenSpell: req.body.levelSevenSpell,
        levelEightSpell: req.body.levelEightSpell,
        levelNineSpell: req.body.levelNineSpell
    });

    newCharacter.save().then(character => res.json(character))
});

// PUT(UPDATE) character
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCharacterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const updateCharacter = new Character({
        user: req.user.id,
        avatar: req.body.avatar,
        name: req.body.name,
        gender: req.body.gender,
        alignment: req.body.alignment,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        xp: req.body.xp,
        eyes: req.body.eyes,
        skin: req.body.skin,
        backStory: req.body.backStory,
        apperance: req.body.apperance,
        personalityTraits: req.body.personalityTraits,
        ideals: req.body.ideals,
        bonds: req.body.bonds,
        flaws: req.body.flaws,
        armor: req.body.armor,
        shield: req.body.shield,
        weapons: req.body.weapons,
        tools: req.body.tools,
        currency: req.body.currency,
        treasure: req.body.treasure,
        magicItem: req.body.magicItem,
        equipment: req.body.equipment,
        race: req.body.race,
        class: req.body.class,
        maximumHitPoints: req.body.maximumHitPoints,
        currentHitPoints: req.body.currentHitPoints,
        temporaryHitPoints: req.body.temporaryHitPoints,
        armorClass: req.body.armorClass,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        intelligence: req.body.intelligence,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
        proficiencyBonus: req.body.proficiencyBonus,
        levelOneSpell: req.body.levelOneSpell,
        levelTwoSpell: req.body.levelTwoSpell,
        levelThreeSpell: req.body.levelThreeSpell,
        levelFourSpell: req.body.levelFourSpell,
        levelFiveSpell: req.body.levelFiveSpell,
        levelSixSpell: req.body.levelSixSpell,
        levelSevenSpell: req.body.levelSevenSpell,
        levelEightSpell: req.body.levelEightSpell,
        levelNineSpell: req.body.levelNineSpell
    });
    Character.findByIdAndUpdate(req.params.id, updateCharacter, { useFindAndModify: false })
        .then(res.status(200).json(updateCharacter))
        .catch(err => console.log(err));
});

//DELETE character
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
        Character.findById(req.params.id)
            .then(character => {
                if (character.user.toString() !== req.user.id) {
                    return res.status(401).json({ notauthorized: 'User not authorized' });
                }

                character.remove().then(() => res.json({ success: true }));
            })
            .catch(err => res.status(404).json({ characternotfound: 'No character found' }));
    })
})



module.exports = router;