import Image from "next/image";

export const ImageComponent = ({photo}) => {
  return (<div className="group relative w-full overflow-hidden mb-2 lg:mb-4">
    <div className="absolute opacity-[0.3] z-[1] inset-0 group-hover:bg-black rounded-lg transition"></div>
    <Image className="rounded-lg" layout="responsive" src={`http://localhost:1337${photo.attributes.file.data.attributes.formats.medium.url}`} height={photo.attributes.file.data.attributes.formats.medium.height} width={photo.attributes.file.data.attributes.formats.medium.width} alt={photo.attributes.description}></Image>
  </div>);
};
