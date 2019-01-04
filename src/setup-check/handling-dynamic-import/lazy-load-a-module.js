import('./module-to-lazy-load').then((m)=>{
  console.log('content of lazy module test 1:', m);
});

;(async function() {
  console.log('...loading lazy module');
  const lazyContent = await import('./module-to-lazy-load');
  console.log('content of lazy module test 2: ', lazyContent);
})();

