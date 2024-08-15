export const Menu = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        <a href="/" className="text-black hover:text-gray-700 font-semibold">
          Home
        </a>
        <a href="/about" className="text-black hover:text-gray-700 font-semibold">
          O Projekcie
        </a>
      </div>
    </nav>
  )
}