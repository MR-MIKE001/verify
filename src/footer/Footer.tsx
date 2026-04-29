import logo from "../assets/skillverification_logo_white_clean.svg"
function Footer() {
  return (
    <div className="bg-slate-800 text-slate-300 pt-8 ">
      <div className="flex items-center justify-around  ">
        <img src={logo} alt="SkillVerify Logo" className="h-15" />
       <p className="text-sm px-2">
        for more information, call us at <a href="tel:+2347086131540" className="text-slate-300 hover:underline">+234 708 613 1540</a><br/> or email us at <a href="mailto:info@skillsignature.com" className="text-slate-300 hover:underline">info@skillsignature.com</a>
        </p>
      </div>
      
        <p className="text-sm py-4 mt-4 text-center bg-slate-900 \">
          &copy; {new Date().getFullYear()} SkillVerify. All rights reserved.
        </p>
    </div>
  )
}

export default Footer