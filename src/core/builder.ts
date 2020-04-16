// builder.competing (like promise.race, but rejected if all promise was reject)
// builder.paralell // analog allSettled
// builder.race
// builder.all

// builder.series
// builder.task

/*

const A = builder.task(()=>{
  return new Promise((resolve)=>{
    resolve("ok A");
  });
});

const B = builder.task(()=>{
  return new Promise((resolve)=>{
    resolve("ok A");
  });
});

const C = builder.task(()=>{
  return new Promise((resolve)=>{
    resolve("ok C");
  });
});

const D = builder.task(()=>{
  return new Promise((resolve)=>{
    resolve("ok D");
  });
});

const series = {};

series['A,B'] = builder.series(
  builder.paralel(A, B),
  builder.paralel(B, C),
);

builder.run(
  series['A,B']
  builder.paralell(C, D),
  builder.series(
    builder.paralel(A, B),
    builder.paralel(B, C),
  );
);

*/