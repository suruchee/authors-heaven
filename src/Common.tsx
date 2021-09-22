export function UserInfo() {
  let user = localStorage.getItem("user-info");
  if (user) {
    return JSON.parse(user);
  } else {
    return { displayName: "hello", photoURL: "hello" };
  }
}

