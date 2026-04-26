import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import topNavData from "../../constants/topNavData"
import logo from "../../assets/skillverification_logo_clean.svg"

function TopNav({ page }: { page: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ── Main navbar ── */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-[#0F1B2D] border-b border-white/10
          transition-shadow duration-300
          ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.5)]" : ""}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="shrink-0">
              <img
                src={logo}
                alt="SkillVerification"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {topNavData.map((item) => {
                const isActive =
                  page.toLowerCase() === item.name.toLowerCase()
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium
                      transition-all duration-150
                      ${
                        isActive
                          ? "bg-[#2952E3] text-white shadow-[0_0_0_1px_rgba(41,82,227,0.4)]"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Login button — desktop */}
              <Link
              to="/contact"
               type="button"
                className="
                  hidden md:inline-flex items-center
                  px-4 py-2 rounded-md text-sm font-semibold
                  bg-[#2952E3] text-white
                  hover:bg-[#1A3FCC] active:bg-[#1230A8]
                  transition-colors duration-150
                  shadow-[0_1px_3px_rgba(0,0,0,0.4)]
                "
              >
                Get Started
              </Link>

              {/* Hamburger — mobile only */}
              <button type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="
                  md:hidden flex flex-col justify-center items-center
                  w-9 h-9 rounded-md
                  text-slate-300 hover:text-white hover:bg-white/10
                  transition-colors duration-150 gap-1.25
                "
              >
                <span
                  className={`
                    block w-5 h-0.5 bg-current rounded-full
                    transition-transform duration-300 origin-center
                    ${menuOpen ? "translate-y-1.75 rotate-45" : ""}
                  `}
                />
                <span
                  className={`
                    block w-5 h-0.5 bg-current rounded-full
                    transition-opacity duration-200
                    ${menuOpen ? "opacity-0" : "opacity-100"}
                  `}
                />
                <span
                  className={`
                    block w-5 h-0.5 bg-current rounded-full
                    transition-transform duration-300 origin-center
                    ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}
                  `}
                />
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
            bg-[#0F1B2D] border-t border-white/10
          `}
        >
          <div className="px-4 pt-3 pb-5 flex flex-col gap-1">
            {topNavData.map((item) => {
              const isActive =
                page.toLowerCase() === item.name.toLowerCase()
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`
                    px-4 py-3 rounded-md text-sm font-medium
                    transition-colors duration-150
                    ${
                      isActive
                        ? "bg-[#2952E3] text-white"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Login — mobile */}
            <Link
              to="/contact"
                type="button"
              onClick={closeMenu}
              className="
                mt-2 px-4 py-3 rounded-md text-sm font-semibold text-center
                bg-[#2952E3] text-white
                hover:bg-[#1A3FCC] active:bg-[#1230A8]
                transition-colors duration-150
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16" />
    </>
  )
}

export default TopNav