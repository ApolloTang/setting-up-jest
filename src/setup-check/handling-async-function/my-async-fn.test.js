import myAsyncFunction from  './my-async-fn.js';

test('test myAsyncFunction', done => {
  myAsyncFunction().then((data)=>{
    expect(data).toBe('myAsyncFunction');
    done();
  });
});
