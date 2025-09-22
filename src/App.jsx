import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';

function App() {
  // Store all the mailboxes we have at the post office
  const [mailboxes, setMailboxes] = useState([]);
  
  // Store all the letters that have been sent
  const [letters, setLetters] = useState([]);

  // When someone wants to rent a new mailbox
  const addBox = (formData) => {
    const boxNumber = mailboxes.length + 1;
    
    const mailbox = {
      _id: boxNumber,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize
    };
    
    setMailboxes(currentMailboxes => [...currentMailboxes, mailbox]);
  };

  // When someone wants to send a letter
  const addLetter = (formData) => {
    const letter = {
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient,
      message: formData.message
    };
    
    setLetters(currentLetters => [...currentLetters, letter]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          } 
        />
        
        <Route 
          path="/mailboxes" 
          element={<MailboxList mailboxes={mailboxes} />} 
        />
        
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm addBox={addBox} />} 
        />
        
        <Route 
          path="/new-letter" 
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} 
        />
        
        <Route 
          path="/mailboxes/:mailboxId" 
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
