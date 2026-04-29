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
          Skills signature is a cutting-edge platform designed to revolutionize the way individuals verify and showcase their skills. Our mission is to empower professionals by providing a secure and efficient way to validate their expertise, connect with employers, and take control of their career growth.
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