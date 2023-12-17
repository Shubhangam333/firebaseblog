import { useGetAllPosts } from "../../api/post";
import PostCard from "./PostCard";

const LeftContainer = () => {
  const { data, status } = useGetAllPosts();

  console.log(data);
  return (
    <section className="left-container">
      {data &&
        data.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
    </section>
  );
};

export default LeftContainer;
