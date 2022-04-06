class Name extends React.Component {
    render() {
        return (
        <li>{this.props.name.toUppercase()}</li>
    );
    }
}
class NmaeList extends React.Component {
    render () {
        var listItems = object.keys(this.props.names).map(
            (key,index) => <name key={key} name={names[key]} />

        );
        return (
            <ul classNmae = "names">{listItems}</ul>


        );
    }
}

const names = {
    'id1': 'Esther',
    'id2': 'Lily',
    'id3': 'Candace',
    'id4': 'Edward',
    'id5': 'Sidney'
};

ReactDOM.render(<NameList name={names} />,
document.getElementById('react-lists-2'));