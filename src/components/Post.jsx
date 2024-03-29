import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  title,
  summary,
  author,
  cover,
  content,
  createdAt,
  _id
}) {
  return (
    <>
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={`https://mern-blog-back-33ik.onrender.com/${cover}`} alt="" />
          </Link>
        </div>
        <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(createdAt)}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </>
  );
}
