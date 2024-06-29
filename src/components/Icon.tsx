import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function Icon() {
  return (
    <RoughNotation type="highlight" show={true}>
      <a href="/">
        <h1
          className="text-3xl font-black max-w-fit text-white select-none"
          id="logo"
        >
          CodeTricks.xyz
        </h1>
      </a>
    </RoughNotation>
  );
}
