import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        <li>
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </li>
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
