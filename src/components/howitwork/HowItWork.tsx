import howItWorkData from "../../constants/howItWorkData"
import HowItWorkCard from "../cards/HowItWorkCard"

function HowItWork() {
  return (
    <section className="flex flex-col gap-3 items-center justify-center py-5">
      <div className="w-full px-6 sm:px-8 ">
        <h2 className="text-2xl sm:text-3xl mx-auto font-bold text-center text-gray-800 dark:text-white">
          How It Work
        </h2>
         <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mt-2 text-center">
          SkillVerify is a platform that allows users to verify their skills and
          showcase them to potential employers. Users can create a profile,
          add their skills, and connect with employers who are looking for
          specific skills. Employers can also search for candidates based on
          their verified skills and contact them directly through the platform.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full bg-white dark:bg-[#111]  px-6 sm:px-8 md:flex-row items-center justify-center rounded-lg shadow-md">
       {howItWorkData.map((item) => (
        <HowItWorkCard key={item.id} title={item.title} description={item.description} icon={item.icon}/>
       ))}
      </div>
    </section>
  )
}

export default HowItWork