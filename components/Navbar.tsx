import Link from "next/link";
export default function NavBar({}) {
  //   const { user, username } = {};
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={"https://i.pravatar.cc/300"} />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li>
            <Link href={`/${username}`}>
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
