export const checkEnvironment = () => {
  let base_url = !!!process.env.API_BASE_URL
    ? "http://localhost:3000"
    : process.env.API_BASE_URL;
  console.log(process.env.API_BASE_URL);
  return base_url || "http://localhost:3000";
};
export const api = (input: string, init?: RequestInit | undefined) => {
  return fetch(checkEnvironment()?.concat(input), init);
};
