function MessageCard({ notification }) {
  return (
    <div className={`notifications-card ${!notification.read && "unread"}`}>
      <img
        className="notifications-card-img"
        src={notification.image}
        alt="profile"
      />
      <div className="notifications-card-content">
        <div className="notifications-card-message">
          <p className="notifications-card-message-text">
            <strong>{notification.name}</strong>
            <span>sent you a private message</span>
          </p>
          {!notification.read && (
            <p className="notifications-card-message-icon">&bull;</p>
          )}
        </div>
        <p className="notifications-card-message-time">
          {notification.timestamp}
        </p>
        <div className="notifications-card-message-private">
          <p>{notification.message}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
