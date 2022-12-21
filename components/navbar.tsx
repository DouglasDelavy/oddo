export const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-4 text-neutral-400 text-sm">
        <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
      </ul>
    </nav>
  );
};
