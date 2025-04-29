//このファイルは構成要素
export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm <span className="text-blue-400">YourName</span></h1>
        <p className="text-xl md:text-2xl mb-6">Coding the Future, One Line at a Time.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Hen00af" target="_blank" className="hover:underline text-blue-400">GitHub</a>
          <a href="m@email.com" className="hover:underline text-blue-400">Email</a>
        </div>
      </section>
    );
  }
  