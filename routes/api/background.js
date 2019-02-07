const express = require('express');
const router = express.Router();

//Background models
const Background = require('../../models/background');

router.get('/', (req, res) => {
    Background.find()
        .then(background => res.json(background))
        .catch(err => res.status(404).json({ noBackground: 'There is nothing here' }))
})

router.post('/', (req, res) => {
    const backgrounds = new Background(
        {
            name: req.name,
            skillProficiencies: [
                {
                    skill: req.skill
                }
            ],
            toolProficiencies: [
                {
                    tools: [
                        { tool: req.tools.tool }
                    ],
                    oneTypeTools: [
                        { tool: req.oneTypeTools.tool }
                    ]
                }
            ],
            languages: req.languages,
            equipment: [
                {
                    items:
                        [
                            {
                                item: req.items.item,
                                quantity: req.items.quantity,
                                weight: req.items.weight
                            }
                        ],
                    oneTypeItems:
                        [
                            {
                                item: req.oneTypeItems.item,
                                quantity: req.oneTypeItems.quantity,
                                weight: req.oneTypeItems.weight
                            }
                        ]
                }
            ],
            currency: {
                cp: req.cp,
                sp: req.sp,
                ep: req.ep,
                gp: req.gp,
                pp: req.pp,
            },
            feature: req.feature
        }
    )

    backgrounds.save().then(background => res.json(background))
        .catch(err => console.log(err))
})

module.exports = router;