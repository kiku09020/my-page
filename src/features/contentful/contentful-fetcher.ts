export default function contentfulFetcher() {
  const endPoint = `https://graphql.contentful.com/content/v1/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE_ID
  }/`;

  const fetcher = (query: string) =>
    fetch(endPoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        }

        console.log(data);
        return data;
      });

  return fetcher;
}
