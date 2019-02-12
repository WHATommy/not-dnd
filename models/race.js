const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
    name: {
        type: String
    },
    abilityScoreIncrease: {
        strength: {
            type: Number
        },
        dexterity: {
            type: Number
        },
        constitution: {
            type: Number
        },
        intelligence: {
            type: Number
        },
        wisdom: {
            type: Number
        },
        charisma: {
            type: Number
        }
    },
    proficiencySkills: {
        acrobatics: {
            type: Boolean
        },
        animalHandling: {
            type: Boolean
        },
        arcana: {
            type: Boolean
        },
        athletics: {
            type: Boolean
        },
        deception: {
            type: Boolean
        },
        history: {
            type: Boolean
        },
        insight: {
            type: Boolean
        },
        intimidation: {
            type: Boolean
        },
        investigation: {
            type: Boolean
        },
        medicine: {
            type: Boolean
        },
        nature: {
            type: Boolean
        },
        perception: {
            type: Boolean
        },
        performance: {
            type: Boolean
        },
        persuasion: {
            type: Boolean
        },
        religion: {
            type: Boolean
        },
        slightOfHand: {
            type: Boolean
        },
        stealth: {
            type: Boolean
        },
        survival: {
            type: Boolean
        }
    },
    speed: {
        type: Number
    },
    language: [
        {
            name: {
                type: String
            }
        },
        {
            name: {
                type: String
            }
        },
        {
            name: {
                type: String
            }
        },
        {
            name: {
                type: String
            }
        },
        {
            name: {
                type: String
            }
        }
    ],
    raceTraits: [
        {
            name: {
                type: String
            },
            description: {
                type: String
            }
        },
        {
            name: {
                type: String
            },
            description: {
                type: String
            }
        },
        {
            name: {
                type: String
            },
            description: {
                type: String
            }
        },
        {
            name: {
                type: String
            },
            description: {
                type: String
            }
        },
        {
            name: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    proficiency: {
        weapons: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        oneTypeOfWeapons: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        armors: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        oneTypeOfArmors: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        tools: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        oneTypeOfTools: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        languages: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ],
        oneTypeOfLanguages: [
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            },
            {
                name: {
                    type: String
                }
            }
        ]
    },
    subClass: [
        {
            name: {
                type: String
            },
            abilityScoreIncrease: {
                strength: {
                    type: Number
                },
                dexterity: {
                    type: Number
                },
                constitution: {
                    type: Number
                },
                intelligence: {
                    type: Number
                },
                wisdom: {
                    type: Number
                },
                charisma: {
                    type: Number
                }
            },
            proficiency: {
                weapons: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfWeapons: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                armors: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfArmors: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                tools: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfTools: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                languages: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfLanguages: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ]
            },
            speed: {
                type: Number
            },
            subraceTraits: [
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                }
            ]
        },
        {
            name: {
                type: String
            },
            abilityScoreIncrease: {
                strength: {
                    type: Number
                },
                dexterity: {
                    type: Number
                },
                constitution: {
                    type: Number
                },
                intelligence: {
                    type: Number
                },
                wisdom: {
                    type: Number
                },
                charisma: {
                    type: Number
                }
            },
            proficiency: {
                weapons: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfWeapons: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                armors: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfArmors: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                tools: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfTools: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                languages: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfLanguages: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ]
            },
            speed: {
                type: Number
            },
            subraceTraits: [
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                }
            ]
        },
        {
            name: {
                type: String
            },
            abilityScoreIncrease: {
                strength: {
                    type: Number
                },
                dexterity: {
                    type: Number
                },
                constitution: {
                    type: Number
                },
                intelligence: {
                    type: Number
                },
                wisdom: {
                    type: Number
                },
                charisma: {
                    type: Number
                }
            },
            proficiency: {
                weapons: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfWeapons: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                armors: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfArmors: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                tools: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfTools: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                languages: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ],
                oneTypeOfLanguages: [
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    },
                    {
                        name: {
                            type: String
                        }
                    }
                ]
            },
            speed: {
                type: Number
            },
            subraceTraits: [
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                },
                {
                    name: {
                        type: String
                    },
                    description: {
                        type: String
                    }
                }
            ]
        }
    ]
})

module.exports = Race = mongoose.model('races', RaceSchema);