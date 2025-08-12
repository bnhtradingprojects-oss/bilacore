export default function Picture() {
  return (
    <section className="min-h-screen  font-sans pt-16">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Picture Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example images, replace with actual image paths */}
            <img src="/images/pic1.jpg" alt="Picture 1" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic2.png" alt="Picture 2" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic3.jpg" alt="Picture 3" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic4.jpg" alt="Picture 4" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic5.jpg" alt="Picture 5" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic6.jpg" alt="Picture 6" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic7.jpg" alt="Picture 7" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/pic8.jpg" alt="Picture 8" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
    </section>
  );
}