export function getTokenFromLocalStorage() {
  return localStorage.getItem("authToken");
}

export function getUserIdFromToken(token) {
  if (token) {
    const tokenPayload = JSON.parse(atob(token.split(".")[1]));
    return tokenPayload.id;
  }
  return null;
}


export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("authToken"); 
};
