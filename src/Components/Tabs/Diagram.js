import React, {useState, useEffect} from 'react'
import Event from '../../Event';
import Search from '../../Search';

function Diagram() {

    const {search} = window.location;
const query = new URLSearchParams(search).get('s');

const [evants, setEvants] = useState([{id: 20, eventName: 'h', day: '12/31/2022', registree: '2'}])

useEffect(() => {
    fetch('/events')
        .then(data => data.json())
        .then(data => {
            setEvants(data.events)
        })
},[])

const filterEvants = (evants, query) => {
    if (!query) {return evants}

    return evants.filter((evant) => {
        const eventName = evant.eventName.toLowerCase()
        return eventName.includes(query.toLowerCase())       
    })
}

const [searchQuery, setSearchQuery] = useState(query || '')
const filteredevents = filterEvants(evants, searchQuery)

    return (
        <div>
            <Search 
                searchQuery = {searchQuery}
                setSearchQuery = {setSearchQuery}
            />
            
            <table id = "eventTable">
            <tr>
                    <th id="eventName">Event Name</th>
                    <th id="eventDay">Day</th>
                    <th id="eventRegistree">Registree</th>
                </tr>
                <tr>
                {filteredevents.map((evant) =>
                <Event
                    id = {evant.id}
                    eventName = {evant.eventName}
                    day = {evant.day}
                    registree = {evant.registree}
                />)}
                </tr>
            </table>
        </div>
    )
}

export default Diagram
