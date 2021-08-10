export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6112522f1bf4860d31e6db4b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hdsd9a7h',
                  apiId: 'a013e320-a0e4-47e5-98b5-250d073ff344'
                },
                {
                  buildHookId: '6112522fb57514fd48456bda',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-m9k7wxkf',
                  apiId: '79d8f557-d5ad-4f50-a98d-8893a417544a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/creativeaffinity/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-m9k7wxkf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
