// builder.competing (like promise.race, but rejected if all promise was reject)
// builder.paralell // analog allSettled
// builder.race
// builder.all

// builder.series
// builder.task

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