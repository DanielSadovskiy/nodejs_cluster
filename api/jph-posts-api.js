const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const GetPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

module.exports = GetPosts