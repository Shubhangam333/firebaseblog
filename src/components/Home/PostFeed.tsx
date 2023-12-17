import PostFeedWrapper from "../../assets/wrappers/PostFeedWrapper";
import CategoryContainer from "./CategoryContainer";
import LeftContainer from "./LeftContainer";
import RigthtContainer from "./RigthtContainer";

const PostFeed = () => {
  return (
    <>
      <CategoryContainer />
      <PostFeedWrapper>
        <LeftContainer />
        <RigthtContainer />
      </PostFeedWrapper>
    </>
  );
};

export default PostFeed;
