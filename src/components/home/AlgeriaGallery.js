import Image from "next/image";

const images = [
  { src: "/images/landscapes/algeria-hero.webp", alt: "Algiers panorama – Mediterranean coast", span: "col-span-2 row-span-2" },
  { src: "/images/landscapes/landscape-1.jpg", alt: "Climate sustainability", span: "" },
  { src: "/images/landscapes/landscape-6.jpg", alt: "Green innovation", span: "" },
  { src: "/images/landscapes/landscape-3.jpg", alt: "Industrial transformation", span: "" },
  { src: "/images/landscapes/landscape-5.jpg", alt: "Circular economy", span: "" },
  { src: "/images/landscapes/landscape-4.jpg", alt: "Sustainable business", span: "" },
  { src: "/images/landscapes/landscape-2.jpg", alt: "Environmental health", span: "" },
];

export default function AlgeriaGallery() {
  return (
    <section className="py-16 bg-dark-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
