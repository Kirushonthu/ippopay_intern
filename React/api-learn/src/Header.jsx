function Header() {
    return (
        <div>
            <header className="flex justify-between bg-blue-800 p-4 ">
                <h1 className="text-4xl font-bold text-white">Axios api</h1>
                <nav>
                    <ul className="flex gap-10 m-2 text-white ">
                        <a href="#"> <li>Home</li></a>
                        <a href="#"> <li>About</li></a>
                        <a href="#"> <li>Services</li></a>
                        <a href="#"> <li>Contact</li></a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header