import * as React from "react";
import { graphql } from "gatsby";

// Gatsby リンクコンポーネントの呼び出し
import { Link } from "gatsby";



const PostItem = (props) => {
  const {title, link, pubDate } = props.post;
  return (
    <li>
      <a href={link}>
        <small>{pubDate}</small> {title}
      </a>
    </li>
  )
};



// props.dataにquery内に記載したGraphQLの結果が入る
const IndexPage = (props) => {
  return (
    <ul>
      {props.data.allFeedQiita.nodes.map((post) => {
        return <PostItem post={post} key={post.link} />
      })}

      {/* aboutページへのリンク */}
      {/* <Link to="/about">Link to about</Link> */}

      {/* GraphQL データの表示 */}
      {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}

    </ul>
  );
};

// qiitaのデータを表示
export const query = graphql`
  query MyQuery {
    allFeedQiita {
      nodes {
        title
        link
        pubDate
      }
    }
  }
`;

export default IndexPage;