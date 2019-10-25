export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db2ecb4673d05741e434ad4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-x5ncr3vh',
                  apiId: '83e9038a-b49e-4e6c-9f48-fa2d880f1603'
                },
                {
                  buildHookId: '5db2ecb4673d05741e434ad5',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-5puq76up',
                  apiId: '92b092ef-7b6d-4930-8054-7edfd4c33a3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/budparr/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-5puq76up.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
