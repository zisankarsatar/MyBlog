export const getPosts = () => {
  return [
    {
      title: "Lorem Ipsum",
      slug: "lorem-ipsum",
      details: require("./posts/lorem.md").default,
      date: "5 Aralık 2019"
    },
    {
      title: "Lorem Ipsum-2",
      slug: "lorem-ipsum2",
      details: require("./posts/lorem2.md").default,
      date: "16 Aralık 2019"
    },
    {
      title: "Lorem Ipsum-3",
      slug: "lorem-ipsum3",
      details: require("./posts/lorem3.md").default,
      date: "29 Aralık 2019"
    },
    {
      title: "Lorem Ipsum-4",
      slug: "lorem-ipsum4",
      details: require("./posts/lorem4.md").default,
      date: "9 Ocak 2020"
    }
  ];
};