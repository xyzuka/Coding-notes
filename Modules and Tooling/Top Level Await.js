//* TOP LEVEL AWAIT
// Top-level await enables developers to use the await keyword outside of async functions. 

console.log(`Start fetching`);
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
console.log('Something');
// * Top level awaits will block the execution of the entire module!

// Example:
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
// Calling a async function, will always return a promise - not the data itself
console.log(lastPost);

// To get the data, we will call the then method to consume the promise - not clean
lastPost.then(last => console.log(last));

// We can use a cleaner method to obtain the data (await method)
const lastPost2 = await getLastPost();
console.log(lastPost2);

//*Note: If a module imports another module with a top level await, then the importing module will wait for the imported module to finish the blocking code
