import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-primary">Ki6uiPar1na</span>. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
