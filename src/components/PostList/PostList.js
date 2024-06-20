import PostListitem from "../PostListitem/PostListitem";
import "./PostList.css";

const PostList = ({ posts, onDeleted, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <PostListitem
          {...item}
          onDeleted={() => {
            onDeleted(item.id);
          }}
          onToggleImportant={() => {
            onToggleImportant(item.id);
          }}
          onToggleLiked={() => {
            onToggleLiked(item.id);
          }}
        />
      </li>
    );
  });
  return (
    <>
      <ul className="app-list list-group">{elements}</ul>
    </>
  );
};

export default PostList;
