import React from 'react';

class LoadError extends React.Component{
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
                    <p>Please try refreshing the page.</p>
                </>
                
            );
        }
        return this.props.children;
    }
}

export default LoadError;