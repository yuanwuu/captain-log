const React = require('react');

class Index extends React.Component{
    render() {
        const {logs} = this.props
        return(
            <div>
                <a href='/logs/new'>Create New Log</a>
                <ul>
                    {logs.map((log,i) =>{
                        return(
                            <li key={i}>
                                <h1>
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                </h1>
                                <p>{log.entry}</p>
                                <p>
                                    {log.shipIsBroken
                                    ? `The ship is broken!`
                                    : `The ship is not broken.`}
                                </p>
                                <a href={`/logs/${log._id}/edit`}>Edit a log</a>
                                <a href={`/logs/${log._id}/edit`}>Delete a log entry</a>
                                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                    <input type='submit' value='DELETE' />
                                </form>
                            </li>
                        )
                    })}
                    
                </ul>

            </div>
        )
    }
}

module.exports = Index