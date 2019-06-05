import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails
                author="Ndumiso"
                timeAgo="Today at 4:45PM"
                profilePic={faker.image.avatar()}
                blogPost="Today we are doing a very great job"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails
                author="Goodman"
                timeAgo="Today at 10:45PM"
                profilePic={faker.image.avatar()}
                blogPost="iReally love this way of codding"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails
                author="focus"
                timeAgo="yesterday at 4:45PM"
                profilePic={faker.image.avatar()}
                blogPost="we will enjoy the rest of our coding if it all looks this simple"
                />
            </ApprovalCard>
            
            
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));