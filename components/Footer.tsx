export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Alim Maknojia
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Built with Next.js
            </p>
            <span className="text-xs font-mono text-muted-foreground/60">
              v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
