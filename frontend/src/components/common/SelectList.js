import React from 'react'

const SelectList = (props) => {
    const state = props.data.map(res => res.name)
    const buttons = state.map(name => {
        return (
            <button type="submit" name={props.type} value={name} onClick={props.onClick}>{name}</button>
        )
    })
    return (
        <>
            {buttons}
        </>
    )
}

export default SelectList