export const devLog: typeof console.log =
  process.env.NODE_ENV !== "production"
    ? console.log.bind(console)
    : () => {};
