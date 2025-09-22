import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  if (mailboxes.length === 0) {
    return (
      <main>
        <h1>Mailbox List</h1>
        <p>No mailboxes have been created yet. Create your first one!</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Mailbox List</h1>
      <div>
        {mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
            className="mail-box"
          >
            <p>Mailbox {mailbox._id}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default MailboxList;