// app/page.tsx
import MagneticYoyo from "@/components/MagneticYoyo";
import Link from 'next/link'; // Import Link for internal navigation

export default function HomePage()
{
  return (
    // Overall page container with vertical padding
    <div className="py-16 md:py-24 px-4 overflow-hidden"> {/* Added padding and overflow hidden */}

      {/* Hero Section - Centered Text */}
      <div className="text-center mb-16 md:mb-20">
        {/* Main Heading - Larger and bolder */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 dark:text-blue-400 leading-tight">
          Welcome To XX Tuition Center!
        </h1>
        {/* Sub Heading (Chinese) - Slightly smaller */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-800">
          欢迎来到 XX 补习中心
        </h2>

        {/* Introductory Paragraphs - Max width for readability */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
            We are committed to providing heuristic and high-quality education to all students.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            我们致力于提供高质量的教学，帮助学生达成学业目标。有教无类。
          </p>
          <p className="text-md md:text-lg font-medium text-blue-600 dark:text-blue-300">
            We bring MIT-quality education to you at market prices.
          </p>
        </div>
      </div>

      {/* MagneticYoyo Component Section */}
      {/*
         Option 1: Centered in its own space (Recommended for simplicity)
         Wrap MagneticYoyo and center it. Add margin.
         IMPORTANT: For this to work well, you might need to REMOVE the `absolute` class
         from the <svg> element *inside* the MagneticYoyo component itself.
         Otherwise, it might overlap content unexpectedly or not respect this centering.
      */}
      <div className="my-16 md:my-20 flex justify-center items-center" aria-hidden="true">
        {/* If MagneticYoyo's SVG is NOT absolute, this centers it */}
        <MagneticYoyo />
      </div>
      {/*
         Option 2: Absolute positioning as background (More complex)
         Requires the parent div (e.g., the root div) to have `position: relative;`.
         You'd add classes like `absolute inset-0 z-0 flex justify-center items-center`
         to a wrapper around MagneticYoyo, and ensure text content has a higher z-index (e.g., `relative z-10`).
         This can be tricky to get right visually.
       */}


      {/* Call to Action Buttons Section */}
      <div className="text-center mt-16"> {/* Added margin-top */}
        <div className="inline-flex space-x-6"> {/* Use inline-flex for better alignment and spacing */}
          <Link // Use Next.js Link for internal routing
            href="/programmes"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" // Enhanced styles
          >
            了解我们的课程
          </Link>
          <Link // Use Next.js Link for internal routing
            href="/contact"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105" // Enhanced styles
          >
            联系我们
          </Link>
        </div>
      </div>

      {/* Placeholder for more content */}
      {/*
      <div className="mt-24 text-center">
         <h3 className="text-2xl font-semibold mb-6 dark:text-white">特色介绍</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature Card 1 */}
      {/* <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700"> ... </div> */}
      {/* {/* Feature Card 2 */}
      {/* <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700"> ... </div> */}
      {/* {/* Feature Card 3 */}
      {/* <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700"> ... </div> */}
      {/* </div>
      </div>
      */}
    </div>
  );
}