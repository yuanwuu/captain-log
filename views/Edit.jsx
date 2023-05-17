const React = require('react')

class Edit extends React.Component{
    render() {
        const log = this.props.log
        return(
            <div>
                <form>
                    Title:
                    <input type='text' name='title' defaultValue={log.name}/>
                    Entry:
                    <input type='textarea' name='entry' defaultValue={log.entry}/>
                    Is the ship broken:
                    {
                        log.readyToLog?
                        <input type='checkbox' name='readyToLog' defaultChecked />
                        : <input type='checbox' name='readyToLog' />
                    }
                    <input type='submit' value='Submit Changes' />
                </form>
            </div>
        )
    }
}
module.exports = Edit