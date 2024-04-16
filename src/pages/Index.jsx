import { FaLeaf, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <header className="bg-green-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Garden of Weeden</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-green-200">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-200">
                Contact
              </a>
            </li>
            <li>
              <FaShoppingCart className="text-2xl" />
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section className="mb-12 relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <FaLeaf className="text-green-500 opacity-50 text-[30rem] animate-pulse" />
          </div>
          <div className="relative text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to the Garden of Weeden</h2>
            <p className="text-xl">Discover paradise in our selection of premium cannabis</p>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded">
            <img src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMHBsYW50JTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxMzI2MDgyNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cannabis Plant" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Premium Flower</h3>
            <p>Indulge in our top-shelf, aromatic cannabis flower strains</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGVkaWJsZXMlMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzEzMjYwODI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cannabis Edibles" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Infused Edibles</h3>
            <p>Enjoy delicious edibles crafted with precision and care</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGNvbmNlbnRyYXRlcyUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTMyNjA4MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cannabis Concentrates" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Potent Concentrates</h3>
            <p>Experience the power of our high-quality cannabis concentrates</p>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white text-center py-4">&copy; 2023 Garden of Weeden. All rights reserved.</footer>
    </div>
  );
};

export default Index;
