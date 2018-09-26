import React from 'react';
import RemoveButton from '../remove-button';


class Articles extends React.Component {

    style = {

    }


    render() {
        return (
            <div className="savedSection">
                <h3>Saved Articles:</h3>
                <ul>
                    <li>Saved Article</li>
                    <RemoveButton/>
                </ul>
            </div>
        )
    }
}


export default Articles;