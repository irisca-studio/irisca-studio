export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 border-b border-red-900 bg-black/60 backdrop-blur-xl">

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


        <div className="hidden md:flex gap-6 text-gray-300">

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
      <section
                className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

  {/* Red Glow Background */}
  <div className="absolute h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[180px]" />

  <img
    src="/logo.png"
    alt="Irisca Studio Logo"
    className="relative z-10 mb-8 w-36 transition-transform duration-500 hover:scale-110"
  />

  <h1 className="relative z-10 animate-pulse text-4xl font-extrabold text-red-600 sm:text-5xl md:text-8xl">
    Irisca Studio
  </h1>

  <p className="relative z-10 mt-6 max-w-3xl px-4 text-base leading-7 text-gray-300 md:text-lg">
    Professional Anime Artist creating high-quality character illustrations,
    wallpapers, VTuber art, fan art and original artwork with a cinematic style.
  </p>

  <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-5">

    <a
      href="#gallery"
      className="rounded-xl bg-red-600 px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:bg-red-700"
    >
      View Gallery
    </a>

    <a
      href="#about"
      className="rounded-xl border border-red-600 px-8 py-4 font-bold transition-all duration-300 hover:bg-red-600"
    >
      About Me
    </a>

  </div>

</section>
{/* About Section */}
<section id="about" className="px-6 py-20">

  <div className="mx-auto max-w-4xl rounded-3xl border border-red-900 bg-white/5 p-10 backdrop-blur-xl">

    <h2 className="text-center text-5xl font-extrabold text-red-600">
      About The Artist
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-300">
      I'm an anime and digital artist creating character illustrations,
      wallpapers, VTuber art, and original artwork. I focus on detailed
      designs, expressive characters, and cinematic visuals to bring
      creative ideas to life.
    </p>

  </div>

</section>

      {/* Gallery Section */}

<section id="gallery" className="px-6 py-20">

  <h2 className="text-center text-5xl font-extrabold text-red-600">
  About The Artist
</h2>

  <p className="mt-3 text-center text-gray-400">
    A collection of my latest artworks and illustrations.
  </p>

  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

    <img
      src="/k1.jpg"
      alt="Artwork 1"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k2.jpg"
      alt="Artwork 2"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k3.mp4.webp"
      alt="Artwork 3"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k4.webp"
      alt="Artwork 4"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k5.jpg"
      alt="Artwork 5"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k6.jpg.png"
      alt="Artwork 6"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k7.jpg"
      alt="Artwork 7"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k8.png"
      alt="Artwork 8"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k9.jpg"
      alt="Artwork 9"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

    <img
      src="/k10.jpg"
      alt="Artwork 10"
      className="rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
    />

   </div>

</section>

    </main>
  );
}