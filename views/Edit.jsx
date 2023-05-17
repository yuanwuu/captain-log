const React = require('react')

class Edit extends React.Component{
    render() {
        const log = this.props.log
        return(
            <div>
                <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                    Title:
                    <input type='text' name='title' 
                    defaultValue={log.name}
                    />
                    Entry:
                    <input type='textarea' name='entry' 
                    defaultValue={log.entry}
                    />
                    Is the ship broken:
                    {
                        log.shipIsBroken?
                        <input type='checkbox' name='shipIsBroken' defaultChecked />
                        : <input type='checbox' name='shipIsBroken' />
                    }
                    <input type='submit' value='Submit Changes' />
                </form>
            </div>
        )
    }
}
module.exports = Edit