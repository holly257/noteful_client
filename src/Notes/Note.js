import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

class Note extends React.Component {
    static defaultProps = {
        onDeleteNote: () => {},
    }
    static contextType = AppContext;

    handleClickDelete = event => {
        event.preventDefault
        fetch(apiEndpoint, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(() => {

        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        const modified = formatDate(new Date(this.props.modified));
        console.log(modified)
        return (
        <li className="note">
            <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
            <div>
            <p>Last modified: {modified}</p>

            <button onClick={this.handleClickDelete}>Delete Note</button>
            </div>
        </li>
        );
    }
}

export default Note;