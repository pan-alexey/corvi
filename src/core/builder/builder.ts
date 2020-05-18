// builder.task(function, {timeout, callback})

// builder.competing([..], {timeout, callback}) (like promise.race, but rejected if all promise was reject)
// builder.paralell([..], {timeout, callback}) // analog allSettled
// builder.race([..], {timeout, callback})
// builder.all([..], {timeout, callback})
// builder.failover([..], {timeout, callback})
// builder.series([..], {timeout, callback})
// builder.collect([..], {timeout, callback}) // Паралельно запускает таски, но вызывет callback в установленном порядке


// builder.run([], immutable=false); if immutable = trye, state will clone every
// default state = [[a],[b],[c [d], e]]
// index => current task index map for state (Example for [d] return [2,0])

/*

const A = builder.task((state, index)=>{
  return new Promise((resolve)=>{
    resolve("ok A");
  });
});

const B = builder.task((state)=>{
  return new Promise((resolve)=>{
    resolve("ok A");
  });
});

const C = builder.task((state)=>{
  return new Promise((resolve)=>{
    resolve("ok C");
  });
});

const D = builder.task((state)=>{
  return new Promise((resolve)=>{
    resolve("ok D");
  });
});

const series = {};

series['A,B'] = builder.series([
  builder.paralel([A, B]),
  builder.paralel(B, C]),
]);

builder.run([
  series['A,B']
  builder.paralell(C, D),
  builder.series(
    builder.paralel(A, B),
    builder.paralel(B, C),
  )
], immutable);

*/