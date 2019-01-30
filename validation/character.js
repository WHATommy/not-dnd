const Validator = require('validator');
const isEmpty = require('./is-empty');

module.export = function validateCharacterInput(data) {
    let errors = {};

    data.race = !isEmpty(data.race) ? data.race : '';
    data.class = !isEmpty(data.class) ? data.class : '';
    data.maximumHitPoints = !isEmpty(data.maximumHitPoints) ? data.maximumHitPoints : '';
    data.strength = !isEmpty(data.strength) ? data.strength : '';
    data.dexterity = !isEmpty(data.dexterity) ? data.dexterity : '';
    data.constitution = !isEmpty(data.constitution) ? data.constitution : '';
    data.intelligence = !isEmpty(data.intelligence) ? data.intelligence : '';
    data.wisdom = !isEmpty(data.wisdom) ? data.wisdom : '';
    data.charisma = !isEmpty(data.charisma) ? data.charisma : '';

    if (!Validator.isEmpty(data.race)) {
        error.race = 'Race is required';
    }

    if (!Validator.isEmpty(data.class)) {
        error.class = 'Class is required';
    }

    if (!Validator.isInt(data.strength)) {
        error.strength = 'Strength need to be a number';
    }

    if (!Validator.isEmpty(data.strength)) {
        error.strength = 'Strength is required';
    }

    if (!Validator.isInt(data.dexterity)) {
        error.dexterity = 'Dexterity need to be a number';
    }

    if (!Validator.isEmpty(data.dexterity)) {
        error.dexterity = 'Dexterity is required';
    }

    if (!Validator.isInt(data.constitution)) {
        error.constitution = 'Constitution need to be a number';
    }

    if (!Validator.isEmpty(data.constitution)) {
        error.constitution = 'Constitution is required';
    }

    if (!Validator.isInt(data.intelligence)) {
        error.intelligence = 'Intelligence need to be a number';
    }

    if (!Validator.isEmpty(data.intelligence)) {
        error.intelligence = 'Intelligence is required';
    }

    if (!Validator.isInt(data.wisdom)) {
        error.wisdom = 'Wisdom need to be a number';
    }

    if (!Validator.isEmpty(data.wisdom)) {
        error.wisdom = 'Wisdom is required';
    }

    if (!Validator.isInt(data.charisma)) {
        error.charisma = 'Charisma need to be a number';
    }

    if (!Validator.isEmpty(data.charisma)) {
        error.charisma = 'Charisma is required';
    }
}