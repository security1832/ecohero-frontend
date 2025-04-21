function Home() {
  return (
    <section id="home" className="bg-green-100 py-20 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <img
          src="/ecohero-logo.png"
          alt="EcoHero Logo"
          className="mx-auto mb-4 w-32"
        />
        <h2 className="text-4xl font-bold mb-4 text-green-800">Welcome to EcoHero</h2>
        <p className="text-lg mb-6 text-gray-700">
          Join us in making the planet greener, one step at a time.
        </p>
        <a
          href="#contact"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
}

export default Home;