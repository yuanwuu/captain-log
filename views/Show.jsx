const React = require('react')

class Show extends React.Component{
    render(){
        const log = this.props.log
        return(
            <div>
                <a href="/logs">Home</a>
                <h1>{log.title}</h1>
                <p>{log.entry}</p>
                <p>
                {log.shipIsBroken
                    ? `The ship is broken!`
                    : `The ship is not broken.`}
                </p>
            </div>
        )
    }
}




module.exports = Show