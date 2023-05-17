const React = require('react')

class New extends React.Component{
    render(){
        return(
            <form action='/logs' method='POST' >
                Title:
                <input type='text' name='title' />
                Entry:
                <input type='text' name='entry' />
                Is the ship broken:
                <input type='checkbox' name='shipIsBroken' />
                <input type='submit' value='Create a log' />
            </form>
        )
    }
}

module.exports = New