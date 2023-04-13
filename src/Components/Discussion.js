import userimg from "../Image/agora-userimg.png";
import "../index.css";

export const Discussion = ({ discussion }) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        {discussion.url === "agora-userimg.png" ? (
          <img src={userimg} alt={`avatar of ${discussion.author}`} />
        ) : (
          <img
            className="discussion__avatar--image"
            src={discussion.avatarUrl}
            alt={`avatar of ${discussion.author}`}
          />
        )}
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={discussion.url}>{discussion.title}</a>
        </h2>
        <div className="discussion__information">{`${
          discussion.author
        } / ${new Date(discussion.createdAt).toLocaleString()}`}</div>
      </div>
      <div className="discussion__answered">
        <p className="discussion__isAnswered">
          {discussion.answer !== "❎" ? "✅" : "❎"}
        </p>
      </div>
    </li>
  );
};
