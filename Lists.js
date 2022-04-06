class NameList extends React.Component{
    render () {
        var listItems = this.props.names.map (
            (name) => <li>{name.toUpperCase()}</li>

        );
        return (
            <ul classNmae = "names">{listItems}</ul>
        );

        }
    }
    const names = ['Esther', 'Lily', 'Candace', 'Edward', 'Sidney'];

    ReactDOM.Render(<NameList names={names} />,
    document.getElementById('react-lists'));
    