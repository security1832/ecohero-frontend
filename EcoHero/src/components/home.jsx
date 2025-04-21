function Home() {
  return (
    <section id="home" className="bg-green-100 py-20 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <img
          src="/ecohero-logo.png"
          alt="EcoHero Sustainability Logo"
          className="mx-auto mb-4 w-32"
        />
        <h1 className="text-4xl font-bold mb-4 text-green-800">
          Welcome to EcoHero
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Join the sustainability movement for a greener planet with eco-friendly actions.
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