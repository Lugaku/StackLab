import Link from "next/link"

export default function Navigation() {
  const linkStyle = "text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 px-3 py-1.5 rounded-lg transition-all font-medium"
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center">
        
        {/* 1. ЛОГО */}
        <div className="flex-shrink-0 mr-12 font-bold text-zinc-100 tracking-tight">
          STACK<span className="text-zinc-500">LAB</span>
        </div>

        {/* 2. ПОИСК */}
        <div className="flex-1">
          <div className="relative max-w-2xl group">
            <input 
              placeholder="Search technologies..." 
              type="text" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-zinc-600 transition-all"
            />
            <div className="absolute right-3 top-2 text-[10px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-700">
              ⌘ K
            </div>
          </div>
        </div>

        {/* 3. НАВИГАЦИЯ  */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Link href="/home" className={linkStyle}>
              Home
            </Link>
            <Link href="/dashboard" className={linkStyle}>
              Dashboard
            </Link>
          </div>

          <div className="h-6 w-[1px] bg-zinc-800"></div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-300 cursor-pointer hover:border-zinc-500 transition-all">
              JD
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}