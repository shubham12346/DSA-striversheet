/**
 * Problem Statement

Given a function 'fn' and a time t in milliseconds. You need
to return a debounced version of that function.

Concept

First, let's try to understand what debounce means. In
technical terms, Debouncing is a programming technique that
helps to improve the performance of web applications by
limiting the frequency of function calls. (think of this as
something like a rate limiter)

In general, Debouncing is a way of delaying the execution of a
function until a certain amount of time has passed since the
last time it was called. This can be useful for scenarios where
we want to avoid unnecessary or repeated function calls that
might be expensive or time-consuming.

Example

Imagine we have a search box that shows suggestions as the
user types. If we call a function to fetch suggestions on every
keystroke, we might end up making too many requests to the
server, which can slow down the application and waste
 */

const debounceFunction = (fn, t) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};

// simulate an api call

const fetchSuggestions = (query) => {
  console.log("fetch query ", query);
};

const debounceFetch = debounceFunction(fetchSuggestions, 3000);

debounceFetch("Re");
debounceFetch("Rea");
debounceFetch("Reac");
debounceFetch("React");

const fetchAsyncFunction = (fn, t) => {
  let timer;
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(async () => {
        try {
          const res = await fn.apply();
          resolve(res);
        } catch (err) {
          reject(err);
        }
      }, t);
    });
  };
};

async function fetchSetTimeout(str) {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("setTimeout done", str);
    }, 100)
  );
}

const debounceFetchTimeout = fetchAsyncFunction(fetchSetTimeout, 1000);
debounceFetchTimeout("1");
debounceFetchTimeout("12");
debounceFetchTimeout("123");
debounceFetchTimeout("12345");
debounceFetchTimeout("123456ṇ");
