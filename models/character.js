const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    //Author
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    //Character description(non-stats)
    avatar: {
        type: String,
        required: false
    },
    name: {
        type: String,
        require: false
    },
    gender: {
        type: String,
        required: false
    },
    alignment: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    xp: {
        type: Number,
        required: false
    },
    eyes: {
        type: String,
        required: false
    },
    skin: {
        type: String,
        required: false
    },
    backStory: {
        type: String,
        required: false
    },
    apperance: {
        type: String,
        required: false
    },
    personalityTraits: {
        type: String,
        required: false
    },
    ideals: {
        type: String,
        required: false
    },
    bonds: {
        type: String,
        required: false
    },
    flaws: {
        type: String,
        required: false
    },
    //Equipments
    armor: {
        type: String,
        required: false
    },
    shield: {
        type: String,
        required: false
    },
    weapons: {
        type: String,
        required: false
    },
    tools: {
        type: String,
        required: false
    },
    currency: {
        type: String,
        required: false
    },
    treasure: {
        type: String,
        required: false
    },
    magicItem: {
        type: String,
        required: false
    },
    equipment: {
        type: String,
        required: false
    },
    //Character description(stats)
    race: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    //Stats
    maximumHitPoints: {
        type: Number,
        required: true
    },
    currentHitPoints: {
        type: Number,
        required: false
    },
    temporaryHitPoints: {
        type: Number,
        required: false
    },
    armorClass: {
        type: Number,
        required: false
    },
    strength: {
        type: Number,
        required: true
    },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    proficiencyBonus: {
        type: Number,
        require: false
    },
    //Spells
    levelOneSpell: {
        type: Number,
        require: false
    },
    levelTwoSpell: {
        type: Number,
        require: false
    },
    levelThreeSpell: {
        type: Number,
        require: false
    },
    levelFourSpell: {
        type: Number,
        require: false
    },
    levelFiveSpell: {
        type: Number,
        require: false
    },
    levelSixSpell: {
        type: Number,
        require: false
    },
    levelSevenSpell: {
        type: Number,
        require: false
    },
    levelEightSpell: {
        type: Number,
        require: false
    },
    levelNineSpell: {
        type: Number,
        require: false
    }
})

module.exports = Character = mongoose.model('characters', CharacterSchema)