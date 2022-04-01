import * as React from "react";

// Gatsby リンクコンポーネントの呼び出し
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <p>hello Gatsby</p>

      {/* aboutページへのリンク */}
      <Link to="/about">Link to about</Link>

    </div>
  )
}

export default IndexPage;