function Event({id, eventName, day, registree}) {
    return (
        <div>
            <table id= "eventTable">
               <tr>
                   <td id="eventName">{eventName}</td>
                   <td id="eventDay">{day}</td>
                   <td id="eventRegistree">{registree}</td>
               </tr>
              </table>
        </div>
    )
}

export default Event