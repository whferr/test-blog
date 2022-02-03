export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61fba040f0eadb71353f35a2",
                  title: "Sanity Studio",
                  name: "test-blog-studio-dosyhvzk",
                  apiId: "1bad8b98-7017-49f7-929d-ee7cad6ce73e",
                },
                {
                  buildHookId: "61fba040d19cfa634e382618",
                  title: "Blog Website",
                  name: "test-blog-web-c2wuvqbt",
                  apiId: "f3bac342-4a38-4c08-8759-53e589352052",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/whferr/test-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://test-blog-web-c2wuvqbt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
