import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LetterForm({ mailboxes, addLetter }) {
  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.mailboxId) {
      alert('Please select a mailbox for this letter');
      return;
    }
    
    addLetter(formData);
    const targetMailbox = formData.mailboxId;
    setFormData({ mailboxId: '', recipient: '', message: '' });
    navigate(`/mailboxes/${targetMailbox}`);
  };

  if (mailboxes.length === 0) {
    return (
      <main>
        <h1>New Letter</h1>
        <p>No mailboxes available. Please create a mailbox first before sending letters.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
          <option value="">Choose a mailbox...</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          placeholder="Recipient name"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default LetterForm;