export function UserInfo() {
  let user = localStorage.getItem("user-info");
  if (user) {
    return JSON.parse(user);
  } else {
    return { displayName: "hello", photoURL: "hello" };
  }
}
export function IsLoggedIn() {
  let user = localStorage.getItem("user-info");
  if (user) {
    return true;
  } else {
    return false;
  }
}
