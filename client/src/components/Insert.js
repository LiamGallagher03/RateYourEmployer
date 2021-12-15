function Insert() {
    return (
        <div>
            <form>
                <label for="est">Establishment:</label><br></br>
                <input type="text" id="est" name="est"></input><br></br>
                <label for="loc">Location:</label><br></br>
                <input type="text" id="loc" name="loc"></input><br></br>
                <label for="pref">Prefered?</label><br></br>
                <input type="radio" id="pref" name="pref"></input><br></br>
                <label for="review">Review:</label><br></br>
                <input type="text" id="review" name="review"></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Insert
