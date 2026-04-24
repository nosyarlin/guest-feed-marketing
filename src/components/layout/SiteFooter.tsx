export function SiteFooter() {
  return (
    <footer
      id="features"
      className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#e2d6c8] px-2 py-6 md:mt-8 md:gap-5 md:px-6 md:py-10"
    >
      <p className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#9d6b5b]">
        GuestFeed
      </p>
      <div className="flex gap-4">
        <a
          href="#waitlist"
          className="text-sm uppercase tracking-[0.08em] text-[#5c4f44] hover:text-[#9d6b5b]"
        >
          Privacy Policy
        </a>
        <a
          href="#waitlist"
          className="text-sm uppercase tracking-[0.08em] text-[#5c4f44] hover:text-[#9d6b5b]"
        >
          Terms
        </a>
        <a
          href="#waitlist"
          className="text-sm uppercase tracking-[0.08em] text-[#5c4f44] hover:text-[#9d6b5b]"
        >
          Contact
        </a>
      </div>
      <p className="text-base text-[#5c4f44]">
        Telegram-powered wedding guest books in Singapore
      </p>
    </footer>
  )
}
