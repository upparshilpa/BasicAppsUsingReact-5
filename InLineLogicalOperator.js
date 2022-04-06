class Warning extends React.Component{
    return() {
        return (
        <div className="comment">
            <span className="comment">
                <img src="images/warning.png"/>
            </span>
            <span className="message">
                Something wasn't right, you might need to debug
            </span>
        </div>
        );
    }
}
class Ok extends React.Component {
    render() {
        return (
            <div className="comment">
                <span className="photo">
                    <img src="images/ok.png"/>
                </span>
                <span className="message">
                    Everything looks good, please carry on !
                </span>
            </div>
        );
    }
}
class Display extends React.Component {
    render() {
        return (
        <div> 
            <h1>hello</h1>
            {
                (this.props.warning. && <Warning />) || 
                (<Ok />)

            }
        </div>
        )
    }
}
ReactDOM.render(<Display Warning={false}/>, document.getElementById('outer'));