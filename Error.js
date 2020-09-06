import React from 'react';

class Error extends React.Component{
constructor (props) {
    super(props);
    this.state = {IsErrorHappened: false}
} 

componentDidCatch(error,info) {
    this.setState({IsErrorHappened: true})
}


render () {
    if (this.state.IsErrorHappened) {
        return <div>
        <h1>Oops, something went wrong!</h1>
    </div>
    } else {
        return (this.props.children       
        )
    }

}

}
export default Error;