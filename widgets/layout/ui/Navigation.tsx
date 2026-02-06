const Navigation = () => {
  return (
    <nav className="flex flex-row justify-between border-b-2 border-white p-4 mb-8">
      <div>Jisu.dev</div>
      <ul className="flex flex-row gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div>Export PDF</div>
    </nav>
  );
};

export default Navigation;
