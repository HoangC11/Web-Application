import React, { Component } from 'react';

class BlogScreen extends Component {

    render() {
        console.log('fffffff: ', this.props.match.params)
        return (
            <div>
                <h1> BLOG SCREEENNNNNNNN</h1>
            </div>
        );
    }
}

export default BlogScreen;