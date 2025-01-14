const baseUrl = "https://dummyjson.com";

export const urls = {
    users: baseUrl + "/users",
    posts: baseUrl + "/posts",
    carts: (id:number) => baseUrl + '/carts/' + id
}