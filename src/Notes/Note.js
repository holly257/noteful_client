import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import PropTypes from 'prop-types';

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
        event.preventDefault()
        const noteId = this.props.id

        fetch(`http://localhost:9090/notes/${noteId}`, {
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
            this.context.deleteNote(noteId)
        })
        .catch(error => {
            console.error({error})
            this.setState(() => { throw error; });
        })
    }

    render() {
        const modified = formatDate(new Date(this.props.modified));
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

Note.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Note;