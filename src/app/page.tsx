export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen gap-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Kjølebil-spesialisten
      </h1>
      <p className="prose">🚚❄️ Komplett leverandør av kjøle- og frysebiler.</p>
      <a
        href="/kontakt"
        className="bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow"
      >
        Kontakt oss
      </a>
    </main>
  );
}
