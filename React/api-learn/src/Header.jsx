function Header() {

  function handleLogout() {
    localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // setIsLoggedIn(false);
    window.location.reload()
  }

  return (
    <header className="flex justify-between bg-blue-800 p-4">
      <h1 className="text-4xl font-bold text-white">Foody</h1>

      <nav>
        <ul className="flex gap-10 m-2 text-white items-center">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>

          <button
            onClick={handleLogout}
            type="button"
            className="bg-white hover:bg-gray-400 text-black text-xl rounded-2xl px-3 py-1 shadow-md transition"
          >
            Log out
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
