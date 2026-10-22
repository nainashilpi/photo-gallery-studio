import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-amber-50/60">
      <header className="bg-gradient-to-br from-rose-900 via-rose-800 to-red-900 px-4 py-12 text-center text-white shadow-md">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
          Celebrate every moment
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
          PhotoGallery Studio
        </h1>
        <div className="mx-auto mt-4 h-px w-24 bg-amber-300/70"></div>
        <p className="mt-4 text-sm text-rose-100">
          Browse, search and save your favourite shots
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-12">
        <Gallery />
      </main>
    </div>
  );
}

export default App;