import React from 'react';

class FormSubmitError extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error){
        console.error(error);
        return { hasError: true };
    }

    render(){
        if (this.state.hasError){
            return(
                <>
                    <h2>Sorry, something seems to have gone wrong.</h2>
                    <p>Please try again.</p>
                </>
                
            );
        }
        return this.props.children;
    }
}

export default FormSubmitError;