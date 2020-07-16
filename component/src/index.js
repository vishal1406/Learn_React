import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return(
        <div className="ui container comments">
          <ApprovalCard>
          <CommentDetail author="Sam" 
          timeAgo="Today at 8:45PM"
          comments="Hi there" 
          images={faker.image.avatar()}/>
          </ApprovalCard>
          <ApprovalCard>
          <CommentDetail author="Vishal" 
          timeAgo="Today at 6:45PM" 
          comments="Hello bro" 
          images={faker.image.avatar()}/>
          </ApprovalCard>
          <ApprovalCard>
          <CommentDetail author="Bittu" 
          timeAgo="Yesterday at 9:45PM" 
          comments="Anyone help please!" 
          images={faker.image.avatar()}/>
          </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));