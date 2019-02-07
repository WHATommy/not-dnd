const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const race = {
        constitution: req.constitution,
        speed: req.speed,
        language: req.language,
        raceTraits: [
            {
                name: req.raceTraits.name,
                description: req.raceTraits.description
            }
        ],
        proficiency: [
            {
                weapons: [
                    { name: req.proficiency.weapons.name }
                ],
                armors: [
                    { name: req.proficiency.armor.name }
                ],
                tools: [
                    { name: req.proficiency.tools.name }
                ],
                languages: [
                    { name: req.proficiency.languages.name }
                ],
            }
        ],
        subClass: [
            { name: req.subClass.name, },
            
        ]
    }
})