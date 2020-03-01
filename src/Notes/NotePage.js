import React from 'react';
import Note from './Note';
import AppContext from '../../AppContext';


class NotePage extends React.Component{
    render(){
        return(
            <div className='main'>
                <Note modified={this.props.modified} id={this.props.id } name={this.props.name} />
                <p>{this.props.content}</p>
            </div>
        );
    }
    
}

export default NotePage;
