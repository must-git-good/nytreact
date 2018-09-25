import React from 'react';
import SaveButton from '../save-button';

class ResultsCard extends React.Component {

    style = {

    }


    render() {
        return (

            <div>
                <h3>Results:</h3>
                <ul>
                    <li>
                        Result One  <SaveButton />
                    </li>
                    <li>
                        Result Two <SaveButton />
                    </li>
                    <li>
                        Result Three  <SaveButton />
                    </li>
                    <li>
                        Result Four <SaveButton />
                    </li>
                    <li>
                        Result Five   <SaveButton />
                    </li>
                </ul>
            </div>
        )
    }
}


export default ResultsCard;