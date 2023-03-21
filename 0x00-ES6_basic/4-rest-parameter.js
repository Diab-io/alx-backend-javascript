export default function returnHowManyArguments(...args) {
  let count = 0;
  args.forEach((element) => { // eslint-disable-line no-unused-vars
    count += 1;
  });

  return count;
}
