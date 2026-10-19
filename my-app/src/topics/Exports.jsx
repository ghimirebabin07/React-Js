// Topic 2: Default and Named Exports
function User() {
  return <h2>Hi from the User component!</h2>;
}

export function Profile() {
  return <h2>Hi from profile</h2>;
}

export default User;
export const UserName = "Babin";
