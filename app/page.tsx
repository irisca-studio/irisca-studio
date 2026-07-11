export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-black border-b border-red-600">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Irisca Studio Logo"
            className="w-12 h-12 object-contain"
          />

          <h2 className="text-2xl font-bold text-red-600">
            Irisca Studio
          </h2>
        </div>


        <div className="flex gap-6 text-gray-300">

          <a href="#" className="hover:text-red-600">
            Home
          </a>

          <a href="#gallery" className="hover:text-red-600">
            Gallery
          </a>

          <a href="#about" className="hover:text-red-600">
            About
          </a>

          <a
            href="https://discord.com/users/1519366936041885757"
            target="_blank"
            className="hover:text-red-600"
          >
            Discord
          </a>

          <a
            href="https://irisca_hub.artstation.com"
            target="_blank"
            className="hover:text-red-600"
          >
            ArtStation
          </a>

          <a
            href="https://bsky.app/profile/iriscacatto.bsky.social"
            target="_blank"
            className="hover:text-red-600"
          >
            Bluesky
          </a>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <img
          src="/logo.png"
          alt="Irisca Studio Logo"
          className="w-32 h-32 object-contain mb-6"
        />

        <h1 className="text-6xl font-bold text-red-600">
          Irisca Studio
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Digital Artist creating anime characters,
          illustrations, wallpapers and creative artworks.
        </p>


        <div className="mt-8 flex gap-4">

          <a
            href="#gallery"
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
          >
            View Artwork
          </a>


          <a
            href="#contact"
            className="rounded-lg border border-red-600 px-6 py-3 font-semibold hover:bg-red-600"
          >
            Contact Me
          </a>

        </div>

      </section>



      {/* About Section */}
      <section id="about" className="px-6 py-20">

        <h2 className="text-4xl font-bold text-red-600">
          About Me
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl">
          I create anime characters, digital illustrations,
          wallpapers and creative artwork.
        </p>

      </section>



      {/* Gallery Section */}
      <section id="gallery" className="px-6 py-20">

        <h2 className="text-4xl font-bold text-red-600">
          Gallery
        </h2>

        <p className="mt-4 text-gray-400">
          My latest artworks will be displayed here.
        </p>

      </section>


    </main>
  );
}