import corvi from 'corvi';

(async function ():Promise<null> {
  const a: string = await corvi.client({
    method: 'get',
  });
  console.log(a);

  return null;
})();

