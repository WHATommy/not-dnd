import React, { Component } from 'react'

class CreateCharacter extends Component {
    constructor() {
        super();
        this.state = {
            class: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const character = {
            class: this.state.class
        }
        console.log(character);
    }

    render() {
        const classOption = [
            { label: 'Select Class', value: '' },
            { label: 'Barbarian', value: 'Barbarian' },
            { label: 'Bard', value: 'Bard' },
            { label: 'Cleric', value: 'Cleric' },
            { label: 'Druid', value: 'Druid' },
            { label: 'Fighter', value: 'Fighter' },
            { label: 'Monk', value: 'Monk' },
            { label: 'Paladin', value: 'Paladin' },
            { label: 'Ranger', value: 'Ranger' },
            { label: 'Rogue', value: 'Rogue' },
            { label: 'Sorcerer', value: 'Sorcerer' },
            { label: 'Warlock', value: 'Warlock' },
            { label: 'Wizard', value: 'Wizard' },
        ]

        return (
            <div>

            </div>
        )
    }
}

export default CreateCharacter
