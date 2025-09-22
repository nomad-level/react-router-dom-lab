import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <main>
      <h1>Mailbox List</h1>
      <div>
        {mailboxes.length === 0 ? (
          <p>No mailboxes have been created yet. Create your first one!</p>
        ) : (
          mailboxes.map((individualMailbox) => (
            <Link
              key={individualMailbox._id}
              to={`/mailboxes/${individualMailbox._id}`}
              className="mail-box"
            >
              <p>Mailbox {individualMailbox._id}</p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}

export default MailboxList;