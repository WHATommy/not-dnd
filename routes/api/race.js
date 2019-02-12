const express = require('express');
const router = express.Router();

//Race models
const Race = require('../../models/race');

router.get('/', (req, res) => {
    Race.find()
        .then(race => res.json(race))
        .catch(err => res.status(404).json({ noRace: 'There is nothing here' }));
})

router.post('/', (req, res) => {
    const race = new Race({
        name: req.body.name,
        abilityScoreIncrease: {
            strength: req.body.abilityScoreIncrease.strength,
            dexterity: req.body.abilityScoreIncrease.dexterity,
            constitution: req.body.abilityScoreIncrease.constitution,
            intelligence: req.body.abilityScoreIncrease.intelligence,
            wisdom: req.body.abilityScoreIncrease.wisdom,
            charisma: req.body.abilityScoreIncrease.charisma,
        },
        proficiencySkills: {
            acrobatics: req.body.proficiencySkills.acrobatics,
            animalHandling: req.body.proficiencySkills.animalHandling,
            arcana: req.body.proficiencySkills.arcana,
            athletics: req.body.proficiencySkills.athletics,
            deception: req.body.proficiencySkills.deception,
            history: req.body.proficiencySkills.history,
            insight: req.body.proficiencySkills.insight,
            intimidation: req.body.proficiencySkills.intimidation,
            investigation: req.body.proficiencySkills.investigation,
            medicine: req.body.proficiencySkills.medicine,
            nature: req.body.proficiencySkills.nature,
            perception: req.body.proficiencySkills.perception,
            performance: req.body.proficiencySkills.performance,
            persuasion: req.body.proficiencySkills.persuasion,
            religion: req.body.proficiencySkills.religion,
            slightOfHand: req.body.proficiencySkills.slightOfHand,
            stealth: req.body.proficiencySkills.stealth,
            survival: req.body.proficiencySkills.survival
        },
        speed: req.body.speed,
        language: [
            {
                name: req.body.language[0].name
            },
            {
                name: req.body.language[1].name
            },
            {
                name: req.body.language[2].name
            },
            {
                name: req.body.language[3].name
            },
            {
                name: req.body.language[4].name
            }
        ],
        raceTraits: [
            {
                name: req.body.raceTraits[0].name,
                description: req.body.raceTraits[0].description
            },
            {
                name: req.body.raceTraits[1].name,
                description: req.body.raceTraits[1].description
            },
            {
                name: req.body.raceTraits[2].name,
                description: req.body.raceTraits[2].description
            },
            {
                name: req.body.raceTraits[3].name,
                description: req.body.raceTraits[3].description
            },
            {
                name: req.body.raceTraits[4].name,
                description: req.body.raceTraits[4].description
            },
            {
                name: req.body.raceTraits[5].name,
                description: req.body.raceTraits[5].description
            },
            {
                name: req.body.raceTraits[6].name,
                description: req.body.raceTraits[6].description
            },
            {
                name: req.body.raceTraits[7].name,
                description: req.body.raceTraits[7].description
            },
            {
                name: req.body.raceTraits[8].name,
                description: req.body.raceTraits[8].description
            },
            {
                name: req.body.raceTraits[9].name,
                description: req.body.raceTraits[9].description
            },
        ],
        proficiency: {
            weapons: [
                {
                    name: req.body.proficiency.weapons[0].name
                },
                {
                    name: req.body.proficiency.weapons[1].name
                },
                {
                    name: req.body.proficiency.weapons[2].name
                },
                {
                    name: req.body.proficiency.weapons[3].name
                },
                {
                    name: req.body.proficiency.weapons[4].name
                }
            ],
            oneTypeOfWeapons: [
                {
                    name: req.body.proficiency.oneTypeOfWeapons[0].name
                },
                {
                    name: req.body.proficiency.oneTypeOfWeapons[1].name
                },
                {
                    name: req.body.proficiency.oneTypeOfWeapons[2].name
                },
                {
                    name: req.body.proficiency.oneTypeOfWeapons[3].name
                },
                {
                    name: req.body.proficiency.oneTypeOfWeapons[4].name
                }
            ],
            armors: [
                {
                    name: req.body.proficiency.armors[0].name
                },
                {
                    name: req.body.proficiency.armors[1].name
                },
                {
                    name: req.body.proficiency.armors[2].name
                },
                {
                    name: req.body.proficiency.armors[3].name
                },
                {
                    name: req.body.proficiency.armors[4].name
                }
            ],
            oneTypeOfArmors: [
                {
                    name: req.body.proficiency.oneTypeOfArmors[0].name
                },
                {
                    name: req.body.proficiency.oneTypeOfArmors[1].name
                },
                {
                    name: req.body.proficiency.oneTypeOfArmors[2].name
                },
                {
                    name: req.body.proficiency.oneTypeOfArmors[3].name
                },
                {
                    name: req.body.proficiency.oneTypeOfArmors[4].name
                }
            ],
            tools: [
                {
                    name: req.body.proficiency.tools[0].name
                },
                {
                    name: req.body.proficiency.tools[1].name
                },
                {
                    name: req.body.proficiency.tools[2].name
                },
                {
                    name: req.body.proficiency.tools[3].name
                },
                {
                    name: req.body.proficiency.tools[4].name
                }
            ],
            oneTypeOfTools: [
                {
                    name: req.body.proficiency.oneTypeOfTools[0].name
                },
                {
                    name: req.body.proficiency.oneTypeOfTools[1].name
                },
                {
                    name: req.body.proficiency.oneTypeOfTools[2].name
                },
                {
                    name: req.body.proficiency.oneTypeOfTools[3].name
                },
                {
                    name: req.body.proficiency.oneTypeOfTools[4].name
                }
            ],
            languages: [
                {
                    name: req.body.proficiency.languages[0].name
                },
                {
                    name: req.body.proficiency.languages[1].name
                },
                {
                    name: req.body.proficiency.languages[2].name
                },
                {
                    name: req.body.proficiency.languages[3].name
                },
                {
                    name: req.body.proficiency.languages[4].name
                }
            ],
            oneTypeOfLanguages: [
                {
                    name: "Common"
                },
                {
                    name: "Dwarvish"
                },
                {
                    name: "Elvish"
                },
                {
                    name: "Giant"
                },
                {
                    name: "Gnomish"
                },
                {
                    name: "Goblin"
                },
                {
                    name: "Halfling"
                },
                {
                    name: "Orc"
                },
                {
                    name: "Abyssal"
                },
                {
                    name: "Celestial"
                },
                {
                    name: "Draconic"
                },
                {
                    name: "Deep Speech"
                },
                {
                    name: "Infernal"
                },
                {
                    name: "Primordial"
                },
                {
                    name: "Sylvan"
                },
                {
                    name: "Undercommon"
                },
                {
                    name: "Druidic"
                }
            ]
        },
        subClass: [
            {
                name: req.body.subClass[0].name,
                abilityScoreIncrease: {
                    strength: req.body.subClass[0].abilityScoreIncrease.strength,
                    dexterity: req.body.subClass[0].abilityScoreIncrease.dexterity,
                    constitution: req.body.subClass[0].abilityScoreIncrease.constitution,
                    intelligence: req.body.subClass[0].abilityScoreIncrease.intelligence,
                    wisdom: req.body.subClass[0].abilityScoreIncrease.wisdom,
                    charisma: req.body.subClass[0].abilityScoreIncrease.charisma
                },
                proficiency: {
                    weapons: [
                        {
                            name: req.body.subClass[0].proficiency.weapons[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.weapons[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.weapons[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.weapons[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.weapons[4].name
                        }
                    ],
                    oneTypeOfWeapons: [
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfWeapons[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfWeapons[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfWeapons[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfWeapons[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfWeapons[4].name
                        }
                    ],
                    armors: [
                        {
                            name: req.body.subClass[0].proficiency.armors[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.armors[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.armors[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.armors[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.armors[4].name
                        }
                    ],
                    oneTypeOfArmors: [
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfArmors[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfArmors[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfArmors[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfArmors[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfArmors[4].name
                        }
                    ],
                    tools: [
                        {
                            name: req.body.subClass[0].proficiency.tools[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.tools[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.tools[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.tools[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.tools[4].name
                        }
                    ],
                    oneTypeOfTools: [
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfTools[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfTools[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfTools[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfTools[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.oneTypeOfTools[4].name
                        }
                    ],
                    languages: [
                        {
                            name: req.body.subClass[0].proficiency.languages[0].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.languages[1].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.languages[2].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.languages[3].name
                        },
                        {
                            name: req.body.subClass[0].proficiency.languages[4].name
                        }
                    ],
                    oneTypeOfLanguages: [
                        {
                            name: "Common"
                        },
                        {
                            name: "Dwarvish"
                        },
                        {
                            name: "Elvish"
                        },
                        {
                            name: "Giant"
                        },
                        {
                            name: "Gnomish"
                        },
                        {
                            name: "Goblin"
                        },
                        {
                            name: "Halfling"
                        },
                        {
                            name: "Orc"
                        },
                        {
                            name: "Abyssal"
                        },
                        {
                            name: "Celestial"
                        },
                        {
                            name: "Draconic"
                        },
                        {
                            name: "Deep Speech"
                        },
                        {
                            name: "Infernal"
                        },
                        {
                            name: "Primordial"
                        },
                        {
                            name: "Sylvan"
                        },
                        {
                            name: "Undercommon"
                        },
                        {
                            name: "Druidic"
                        }
                    ]
                },
                speed: req.body.subClass.speed,
                subraceTraits: [
                    {
                        name: req.body.subClass[0].subraceTraits[0].name,
                        description: req.body.subClass[0].subraceTraits[0].description,
                    },
                    {
                        name: req.body.subClass[0].subraceTraits[1].name,
                        description: req.body.subClass[0].subraceTraits[1].description,
                    },
                    {
                        name: req.body.subClass[0].subraceTraits[2].name,
                        description: req.body.subClass[0].subraceTraits[2].description,
                    },
                    {
                        name: req.body.subClass[0].subraceTraits[3].name,
                        description: req.body.subClass[0].subraceTraits[3].description,
                    },
                    {
                        name: req.body.subClass[0].subraceTraits[4].name,
                        description: req.body.subClass[0].subraceTraits[4].description,
                    }
                ]
            },
            {
                name: req.body.subClass[1].name,
                abilityScoreIncrease: {
                    strength: req.body.subClass[1].abilityScoreIncrease.strength,
                    dexterity: req.body.subClass[1].abilityScoreIncrease.dexterity,
                    constitution: req.body.subClass[1].abilityScoreIncrease.constitution,
                    intelligence: req.body.subClass[1].abilityScoreIncrease.intelligence,
                    wisdom: req.body.subClass[1].abilityScoreIncrease.wisdom,
                    charisma: req.body.subClass[1].abilityScoreIncrease.charisma
                },
                proficiency: {
                    weapons: [
                        {
                            name: req.body.subClass[1].proficiency.weapons[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.weapons[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.weapons[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.weapons[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.weapons[4].name
                        }
                    ],
                    oneTypeOfWeapons: [
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfWeapons[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfWeapons[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfWeapons[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfWeapons[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfWeapons[4].name
                        }
                    ],
                    armors: [
                        {
                            name: req.body.subClass[1].proficiency.armors[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.armors[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.armors[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.armors[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.armors[4].name
                        }
                    ],
                    oneTypeOfArmors: [
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfArmors[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfArmors[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfArmors[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfArmors[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfArmors[4].name
                        }
                    ],
                    tools: [
                        {
                            name: req.body.subClass[1].proficiency.tools[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.tools[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.tools[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.tools[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.tools[4].name
                        }
                    ],
                    oneTypeOfTools: [
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfTools[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfTools[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfTools[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfTools[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.oneTypeOfTools[4].name
                        }
                    ],
                    languages: [
                        {
                            name: req.body.subClass[1].proficiency.languages[0].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.languages[1].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.languages[2].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.languages[3].name
                        },
                        {
                            name: req.body.subClass[1].proficiency.languages[4].name
                        }
                    ],
                    oneTypeOfLanguages: [
                        {
                            name: "Common"
                        },
                        {
                            name: "Dwarvish"
                        },
                        {
                            name: "Elvish"
                        },
                        {
                            name: "Giant"
                        },
                        {
                            name: "Gnomish"
                        },
                        {
                            name: "Goblin"
                        },
                        {
                            name: "Halfling"
                        },
                        {
                            name: "Orc"
                        },
                        {
                            name: "Abyssal"
                        },
                        {
                            name: "Celestial"
                        },
                        {
                            name: "Draconic"
                        },
                        {
                            name: "Deep Speech"
                        },
                        {
                            name: "Infernal"
                        },
                        {
                            name: "Primordial"
                        },
                        {
                            name: "Sylvan"
                        },
                        {
                            name: "Undercommon"
                        },
                        {
                            name: "Druidic"
                        }
                    ]
                },
                speed: req.body.subClass.speed,
                subraceTraits: [
                    {
                        name: req.body.subClass[1].subraceTraits[0].name,
                        description: req.body.subClass[1].subraceTraits[0].description,
                    },
                    {
                        name: req.body.subClass[1].subraceTraits[1].name,
                        description: req.body.subClass[1].subraceTraits[1].description,
                    },
                    {
                        name: req.body.subClass[1].subraceTraits[2].name,
                        description: req.body.subClass[1].subraceTraits[2].description,
                    },
                    {
                        name: req.body.subClass[1].subraceTraits[3].name,
                        description: req.body.subClass[1].subraceTraits[3].description,
                    },
                    {
                        name: req.body.subClass[1].subraceTraits[4].name,
                        description: req.body.subClass[1].subraceTraits[4].description,
                    }
                ]
            },
            {
                name: req.body.subClass[2].name,
                abilityScoreIncrease: {
                    strength: req.body.subClass[2].abilityScoreIncrease.strength,
                    dexterity: req.body.subClass[2].abilityScoreIncrease.dexterity,
                    constitution: req.body.subClass[2].abilityScoreIncrease.constitution,
                    intelligence: req.body.subClass[2].abilityScoreIncrease.intelligence,
                    wisdom: req.body.subClass[2].abilityScoreIncrease.wisdom,
                    charisma: req.body.subClass[2].abilityScoreIncrease.charisma
                },
                proficiency: {
                    weapons: [
                        {
                            name: req.body.subClass[2].proficiency.weapons[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.weapons[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.weapons[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.weapons[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.weapons[4].name
                        }
                    ],
                    oneTypeOfWeapons: [
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfWeapons[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfWeapons[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfWeapons[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfWeapons[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfWeapons[4].name
                        }
                    ],
                    armors: [
                        {
                            name: req.body.subClass[2].proficiency.armors[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.armors[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.armors[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.armors[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.armors[4].name
                        }
                    ],
                    oneTypeOfArmors: [
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfArmors[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfArmors[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfArmors[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfArmors[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfArmors[4].name
                        }
                    ],
                    tools: [
                        {
                            name: req.body.subClass[2].proficiency.tools[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.tools[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.tools[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.tools[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.tools[4].name
                        }
                    ],
                    oneTypeOfTools: [
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfTools[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfTools[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfTools[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfTools[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.oneTypeOfTools[4].name
                        }
                    ],
                    languages: [
                        {
                            name: req.body.subClass[2].proficiency.languages[0].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.languages[1].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.languages[2].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.languages[3].name
                        },
                        {
                            name: req.body.subClass[2].proficiency.languages[4].name
                        }
                    ],
                    oneTypeOfLanguages: [
                        {
                            name: "Common"
                        },
                        {
                            name: "Dwarvish"
                        },
                        {
                            name: "Elvish"
                        },
                        {
                            name: "Giant"
                        },
                        {
                            name: "Gnomish"
                        },
                        {
                            name: "Goblin"
                        },
                        {
                            name: "Halfling"
                        },
                        {
                            name: "Orc"
                        },
                        {
                            name: "Abyssal"
                        },
                        {
                            name: "Celestial"
                        },
                        {
                            name: "Draconic"
                        },
                        {
                            name: "Deep Speech"
                        },
                        {
                            name: "Infernal"
                        },
                        {
                            name: "Primordial"
                        },
                        {
                            name: "Sylvan"
                        },
                        {
                            name: "Undercommon"
                        },
                        {
                            name: "Druidic"
                        }
                    ]
                },
                speed: req.body.subClass.speed,
                subraceTraits: [
                    {
                        name: req.body.subClass[2].subraceTraits[0].name,
                        description: req.body.subClass[2].subraceTraits[0].description,
                    },
                    {
                        name: req.body.subClass[2].subraceTraits[1].name,
                        description: req.body.subClass[2].subraceTraits[1].description,
                    },
                    {
                        name: req.body.subClass[2].subraceTraits[2].name,
                        description: req.body.subClass[2].subraceTraits[2].description,
                    },
                    {
                        name: req.body.subClass[2].subraceTraits[3].name,
                        description: req.body.subClass[2].subraceTraits[3].description,
                    },
                    {
                        name: req.body.subClass[2].subraceTraits[4].name,
                        description: req.body.subClass[2].subraceTraits[4].description,
                    }
                ]
            }
        ]
    })
    race.save()
        .then(race => res.json(race))
        .catch(err => console.log(err));
})

module.exports = router;