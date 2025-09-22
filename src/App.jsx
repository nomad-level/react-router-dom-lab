import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

function App() {
  // Keep track of all the mailboxes in our post office
  const [allMailboxes, setAllMailboxes] = useState([]);

  // Function to create a new mailbox and add it to our collection
  const createNewMailbox = (mailboxInfo) => {
    // Generate the next available box number
    const nextBoxNumber = allMailboxes.length + 1;
    
    // Create the new mailbox with all the details
    const freshMailbox = {
      _id: nextBoxNumber,
      boxOwner: mailboxInfo.boxOwner,
      boxSize: mailboxInfo.boxSize
    };
    
    // Add the new mailbox to our existing collection
    setAllMailboxes([...allMailboxes, freshMailbox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Welcome page for our post office */}
        <Route 
          path="/" 
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          } 
        />
        
        {/* Show all available mailboxes */}
        <Route 
          path="/mailboxes" 
          element={<MailboxList mailboxes={allMailboxes} />} 
        />
        
        {/* Form to register a new mailbox */}
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm onCreateMailbox={createNewMailbox} />} 
        />
        
        {/* Details page for a specific mailbox */}
        <Route 
          path="/mailboxes/:mailboxId" 
          element={<MailboxDetails mailboxes={allMailboxes} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
