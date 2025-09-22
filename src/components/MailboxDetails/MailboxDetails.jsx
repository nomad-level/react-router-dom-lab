import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes }) {
  // Get the mailbox ID from the URL
  const { mailboxId } = useParams();
  
  // Find the specific mailbox they're looking for
  const requestedMailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  // If we can't find that mailbox, let them know
  if (!requestedMailbox) {
    return (
      <main>
        <h1>Mailbox Not Found!</h1>
        <p>Sorry, we couldn't find a mailbox with that number.</p>
      </main>
    );
  }

  // Show the mailbox details
  return (
    <main>
      <h1>Mailbox {requestedMailbox._id}</h1>
      <section>
        <h2>Details</h2>
        <p><strong>Boxholder:</strong> {requestedMailbox.boxOwner}</p>
        <p><strong>Box Size:</strong> {requestedMailbox.boxSize}</p>
      </section>
    </main>
  );
}

export default MailboxDetails;