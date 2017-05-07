/* global instantsearch */

app({
  appId: 'ORNAT0JRKW',
  apiKey: 'd352ff56b3ed9f60a1640f528602f63d',
  indexName: 'User',
});

function app(opts) {
  const search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true,
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search for People',
      // cssClasses: {
      //   input: 'input'
      // }
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      cssClasses:
      { 
        root: 'columns is-multiline',
        item: 'column is-3'
      }
      ,
      templates: { 
        item: getTemplate('hit'),
        empty: getTemplate('no-results'),
      }
      
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats',
    })
  );

  // search.addWidget(
  //   instantsearch.widgets.sortBySelector({
  //     container: '#sort-by',
  //     autoHideContainer: true,
  //     indices: [{
  //       name: opts.indexName, label: 'Most relevant',
  //     }, {
  //       name: `${opts.indexName}_price_asc`, label: 'Lowest price',
  //     }, {
  //       name: `${opts.indexName}_price_desc`, label: 'Highest price',
  //     }],
  //   })
  // );

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input',
    })
  );

  // search.addWidget(
  //   instantsearch.widgets.refinementList({
  //     container: '#category',
  //     attributeName: 'categories',
  //     sortBy: ['isRefined', 'count:desc', 'name:asc'],
  //     limit: 10,
  //     operator: 'or',
  //     templates: {
  //       header: getHeader('Category'),
  //     },
  //   })
  // );

  // search.addWidget(
  //   instantsearch.widgets.refinementList({
  //     container: '#brand',
  //     attributeName: 'brand',
  //     sortBy: ['isRefined', 'count:desc', 'name:asc'],
  //     limit: 10,
  //     operator: 'or',
  //     searchForFacetValues: {
  //       placeholder: 'Search for brands',
  //       templates: {
  //         noResults: '<div class="sffv_no-results">No matching brands.</div>',
  //       },
  //     },
  //     templates: {
  //       header: getHeader('Brand'),
  //     },
  //   })
  // );

  // search.addWidget(
  //   instantsearch.widgets.rangeSlider({
  //     container: '#price',
  //     attributeName: 'price',
  //     templates: {
  //       header: getHeader('Price'),
  //     },
  //   })
  // );

  // search.addWidget(
  //   instantsearch.widgets.refinementList({
  //     container: '#type',
  //     attributeName: 'type',
  //     sortBy: ['isRefined', 'count:desc', 'name:asc'],
  //     limit: 10,
  //     operator: 'and',
  //     templates: {
  //       header: getHeader('Type'),
  //     },
  //   })
  // );

  search.start();
}

function getTemplate(templateName) {
  return document.querySelector(`#${templateName}-template`).innerHTML;
}

function getHeader(title) {
  return `<h5>${title}</h5>`;
}
