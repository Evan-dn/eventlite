import React from 'react'
import ReactDOM from 'react-dom'

const EventLite = props => (
    <div>
        <h1>Eventlite</h1>
        {props.events.map(function(e){
            return(
                <div>
                    <h2>Title : {e.title}</h2>
                    <p>Location : {e.location}</p>
                    <p>Date : {e.datetime}</p>
                </div>
            )
        })}
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