// src/App.jsx
// import React from 'react';
import TicketView from './TicketView';

const App = () => {
  const ticket = {
    userId: '12345',
    mobileNumber: '9876543210',
    priorityLevel: 'High',
    location: 'New York',
    issueType: 'Technical',
    submittedAt: '2023-03-01 12:00:00',
    description: 'This is a sample description',
    status: 'pending',
    priority: 'High',
  };

  return (
    <div>
      <TicketView ticket={ticket} />
    </div>
  );
};

export default App;