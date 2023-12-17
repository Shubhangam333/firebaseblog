import { Link } from "react-router-dom";
import PostCardWrapper from "../../assets/wrappers/PostCardWrapper";

const PostCard = ({ post }) => {
  return (
    <PostCardWrapper>
      <div className="image-container">
        <img src={post.images[0]} alt="" />
      </div>
      <div className="post-content">
        <h2 className="title">{post.title}</h2>
        <p className="description">{post.description.slice(0, 250)}</p>
        <div className="tag-container">
          {post.tags.map((tag) => (
            <Link to={`/${tag}`}>{tag}</Link>
          ))}
        </div>
      </div>
    </PostCardWrapper>
  );
};

export default PostCard;
