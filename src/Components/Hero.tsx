export default function HeroComp() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center px-6 py-12">
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg mb-6">
          Discover amazing content and connect with others. Join us on our
          journey!
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
      <div className="lg:w-1/2 mb-8 lg:mb-0"></div>
    </section>
  );
}
