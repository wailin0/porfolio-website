export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 mask-fade-b"
        aria-hidden
      />

      {/* Aurora blobs */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full
                   bg-violet-glow/30 blur-[120px] animate-aurora-1"
        aria-hidden
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full
                   bg-cyan-glow/20 blur-[140px] animate-aurora-2"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full
                   bg-fuchsia-500/15 blur-[100px] animate-aurora-1"
        aria-hidden
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg"
        aria-hidden
      />
    </div>
  )
}
