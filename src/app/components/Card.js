import Image from "next/image";

export default function Card({ title, paragraph, imageSrc, imageAlt, hashtags }){
    return(
    <>
    <div className="card-effect max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <div className="flex justify-center py-4">
        <Image
          height={200}
          width={200}
          src={imageSrc}
          alt={imageAlt}
          className="rounded-2xl"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{paragraph}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        {hashtags?.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
    </>
    );
}