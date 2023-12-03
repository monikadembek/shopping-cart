// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export default fetcher;

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
