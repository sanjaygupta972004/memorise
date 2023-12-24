import  Analytics from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-600">We are the World Best IT Company</p>
              <h1 className="text-4xl font-bold mb-4">Welcome to Paul Technical</h1>
              <p className="text-base text-gray-700 mb-6">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Paupa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="space-x-4">
                <a href="/contact" className="btn btn-primary">connect now</a>
                <a href="/services" className="btn btn-secondary">learn more</a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/images/home.png"
                alt="coding together"
                className="w-64 h-auto"
              />
            </div>
          </div>
        </section>
        <Analytics />

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <img
                src="/images/design.png"
                alt="coding together"
                className="w-64 h-auto"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-600">We are here to help you</p>
              <h1 className="text-4xl font-bold mb-4">Get Started Today</h1>
              <p className="text-base text-gray-700 mb-6">
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Thapa Technical can help your business thrive in
                the digital age.
              </p>
              <div className="space-x-4">
                <a href="/contact" className="btn btn-primary">connect now</a>
                <a href="/services" className="btn btn-secondary">learn more</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
