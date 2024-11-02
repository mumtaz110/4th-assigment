export default function Home(){
  return(
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
           Welcome To My Next.Js Presentation
          </h1>
        </div>
      </section>
      <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Presentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">What is the page.tsx file, and what is the layout.tsx file?</h3>
                <p>using layout.tsx and page.tsx files page.tsx can create a seprate file for each route.</p>
              </div>
              <div className="p-7 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">What is the Link tag, why do we use this tag, and what is its purpose?</h3>
                <p>The link tag defines the relationship between the current document and an external resource.</p>
              </div>
              <div className="p-7 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">What are components, and why do we use them? How can we apply CSS in Next.js?</h3>
                <p>Components are reusable parts of a website, like buttons or headers. We use them to make our code cleaner and to reuse elements easily across pages you can add global CSS files by importing them from pages/_app. tsx.</p>
              </div>
              <div className="p-7 bg-white shadow-md rounded-lg ">
                <h3 className="text-2xl font-bold mb-2">What is Tailwind CSS, and what are the differences between Tailwind CSS and standard CSS?</h3>
                <p>Tailwind CSS is a utility-first CSS framework with predefined classes that can use to build and design web pages Tailwind provides pre defined classes that correspond to specific CSS rules.</p>
              </div>
            </div>
          </div>
        </section>

    </main>
  )
}