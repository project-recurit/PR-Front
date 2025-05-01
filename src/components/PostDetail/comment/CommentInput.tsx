"use client";

import { useState } from "react";

const CommentInput = () => {
  const [text, setText] = useState("");
  console.log(' text => ', text);
  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentInput;
