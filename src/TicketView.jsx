import { useState } from 'react';
import PropTypes from 'prop-types';

const TicketView = ({ ticket }) => {
  const [ticketStatus, setTicketStatus] = useState(ticket.status);

  const handleStatusChange = (e) => {
    setTicketStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    // Add logic to update the status, e.g., API call
    console.log(`Status updated to: ${ticketStatus}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 xl:p-10 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div className="flex justify-between mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Ticket Details</span>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">User ID:</span>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.userId}</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Mobile Number:</span>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.mobileNumber}</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Priority Level:</span>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.priorityLevel}</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Location:</span>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.location}</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Issue Type:</span>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.issueType}</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Submitted:</span>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.submittedAt}</span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Description:</span>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl">{ticket.description}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
            <span className="text-sm md:text-md lg:text-lg xl:text-xl font-bold">Status:</span>
            <select className="form-select bg-gray-200 text-black" value={ticketStatus} onChange={handleStatusChange}>
              <option className="bg-gray-200 text-gray-700" value="" disabled hidden selected>
                Status...
              </option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-4 lg:py-6 xl:py-8 px-4 md:px-6 lg:px-8 xl:px-10 rounded"
            onClick={handleUpdateStatus}
          >
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

TicketView.propTypes = {
  ticket: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    priorityLevel: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issueType: PropTypes.string.isRequired,
    submittedAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketView;
