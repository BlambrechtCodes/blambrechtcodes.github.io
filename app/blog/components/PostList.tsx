"use client";

import type { Blog as PostType } from "@/.contentlayer/generated";
import Post from "./Post";
import React, { useRef, useState } from "react";

function getRelativeCoordinates(
  event: React.MouseEvent<HTMLUListElement>,
  referenceElement: any
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.clientTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: PostListProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 240,
    y: 0,
  });
  const listRef = useRef(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    setMousePosition(getRelativeCoordinates(e, listRef.current));
  };

  return (
    <div className="w-full">
      {posts.length === 0 && <p className="text-secondary">No posts found</p>}
      <ul
        ref={listRef}
        onMouseMove={(e) => handleMouseMove(e)}
        className="flex flex-col gap-4 w-full"
      >
        {posts.map((post) => (
          <li
            key={post.slug}
            className="group w-full py-3 transition-opacity first:pt-0 last:pb-0"
          >
            <Post post={post} mousePosition={mousePosition} />
          </li>
        ))}
      </ul>
    </div>
  );
}