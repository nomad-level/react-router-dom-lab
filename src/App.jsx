import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize
    };
    
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (formData) => {
    const newLetter = {
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient,
      message: formData.message
    };
    
    setLetters([...letters, newLetter]);
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
