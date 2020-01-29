import React from 'react'
import ReactDOM from 'react-dom'
import EventsList from './eventslist'

const EventLite = props => (
    <div>
        <h1>Eventlite</h1>
        <EventsList events={props.events}/>
    </div>
)

document.addEventListener('DOMContentLoaded', () => {
    const node = document.querySelector("#events_data")
    const data = JSON.parse(node.getAttribute('data'))
    ReactDOM.render(
        <EventLite events={data}/>,
        document.body.appendChild(document.createElement('div')),
    )
})