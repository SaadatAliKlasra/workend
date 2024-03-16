
import { auth } from "@clerk/nextjs";
import NavMenu from "./navmenu";


export default function Nav() {
  const { userId } = auth()
  return (

    <NavMenu userLoggedIn={userId !== null} />

  );
}
