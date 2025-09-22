import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MailboxForm({ onCreateMailbox }) {
  // Track what the user is typing in the form
  const [customerInfo, setCustomerInfo] = useState({
    boxOwner: '',
    boxSize: 'Small'
  });
  
  const navigate = useNavigate();

  // Update our form data when someone types or selects something
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo(previousInfo => ({
      ...previousInfo,
      [name]: value
    }));
  };

  // When someone submits the form, create their mailbox
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Create the new mailbox with the customer's info
    onCreateMailbox(customerInfo);
    
    // Clear the form for the next customer
    setCustomerInfo({ boxOwner: '', boxSize: 'Small' });
    
    // Take them to see all the mailboxes
    navigate('/mailboxes');
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={customerInfo.boxOwner}
          onChange={handleInputChange}
          placeholder="Boxholder name"
          required
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={customerInfo.boxSize}
          onChange={handleInputChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default MailboxForm;