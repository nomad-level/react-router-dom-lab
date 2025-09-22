import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = letters.filter((letter) => (
    letter.mailboxId === Number(mailboxId)
  ));

  if (!selectedBox) {
    return (
      <main>
        <h1>Mailbox Not Found!</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Mailbox {selectedBox._id}</h1>
      <section>
        <h2>Details</h2>
        <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
        <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
      </section>
      
      <section>
        <h2>Letters</h2>
        {selectedLetters.length === 0 ? (
          <p>No letters have been delivered to this mailbox yet.</p>
        ) : (
          selectedLetters.map((letter, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc' }}>
              <p><strong>Dear {letter.recipient},</strong></p>
              <p>{letter.message}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default MailboxDetails;