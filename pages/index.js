import * as React from "react";

const codeExample = `(async () => {
  try {
    const response = await fetch('/api/commit_message');
    const text = await response.text();
    console.log(text);
  } catch (err) {
    console.error(err.message);
  }
})();`;

const IndexPage = () => (
  <div>
    <h1>Hello World.</h1>
    <p>Poll for a commit message using something like the following code:</p>
    <pre>
      <code>{codeExample}</code>
    </pre>
  </div>
);

export default IndexPage;
