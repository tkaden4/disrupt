import Transformer from "../components/Transformer";

const isWhiteSpace = text => text.trim() == "";

export const mock = text =>
  Array.from(text)
    .map((e, i) => (i % 2 == 0 && !isWhiteSpace(e) ? e.toUpperCase() : e))
    .join("");

export default mock;
