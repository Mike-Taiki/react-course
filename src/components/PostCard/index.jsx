import P from 'prop-types';
import './styles.css';

export const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title} />
    <div key={post.id} className="post-content">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
    cover: P.string,
  }).isRequired,
};
