export const checkEnvironment = () => {
    let base_url =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.API_BASE_URL; // https://v2ds.netlify.app

    return base_url || '';
};
export const api = (input: string, init?: RequestInit | undefined) => {
    return fetch(checkEnvironment()?.concat(input), init)
}
