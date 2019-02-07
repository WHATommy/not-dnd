import React, { Component } from 'react';
import Axios from 'axios';
import SelectList from '../common/SelectList'

class CreateCharacterOne extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            races: [],
            backgrounds: [],
            class: '',
            race: '',
            background: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        //Retrieve Background data
        Axios
            .get('http://localhost:5050/api/background/')
            .then(res => {
                const data = res.data.map(data => {
                    return {
                        name: data.name
                    }
                })

                this.setState({ backgrounds: data });
            })
            .catch(err => console.log(err));
        //Retrieve classes data
        Axios
            .get('http://www.dnd5eapi.co/api/classes/')
            .then(res => {
                const data = res.data.results.map(data => {
                    return {
                        name: data.name
                    }
                })
                this.setState({ classes: data });
            })
            .catch(err => console.log(err))
        //Retrieve races data 
        Axios
            .get('http://www.dnd5eapi.co/api/races/')
            .then(res => {
                const data = res.data.results.map(data => {
                    return {
                        name: data.name
                    }
                })
                console.log(data)
                this.setState({ races: data });
            })
            .catch(err => console.log(err));
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const character = {
            class: this.state.class,
            race: this.state.race,
            background: this.state.background
        }
        console.log(character)
        this.props.history.push('/createcharactertwo')
    }

    render() {

        return (
            <div>
                <SelectList
                    type="class"
                    data={this.state.classes}
                    onClick={this.onChange}
                />
                <SelectList
                    type="race"
                    data={this.state.races}
                    onClick={this.onChange}
                />
                <SelectList
                    type="background"
                    data={this.state.backgrounds}
                    onClick={this.onChange}
                />
                <form onSubmit={this.onSubmit}>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default CreateCharacterOne
