import HowItWorksIcons from "../icon/HowItWorksIcons"

function HowItWorkCard({title,description,icon}:{title:string,description:string,icon:string}) {
  return (
    <div className="w-full max-w-2xl border rounded-2xl shadow-2xl border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111]  p-6 sm:p-8">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 mb-4">
             <HowItWorksIcons icon={icon} />
        </div>
       
      <h2 className="text-lg sm:text-xl mx-auto font-bold text-center text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
        {description}
      </p>
      
    </div>
  )
}

export default HowItWorkCard