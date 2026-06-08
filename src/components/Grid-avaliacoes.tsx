import Star from "../assets/star.svg";

interface GridAvaliacoesProps {
    stars: number;
    comment: string;
    name: string;
    profession: string;
    image: string;
}

export default function GridAvaliacoes({ stars, comment, name, profession, image }: GridAvaliacoesProps) {
    return (
        <div className="group w-auto h-auto flex flex-col justify-start p-7 gap-4">
            <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, index) => (
                    <img key={index} src={Star} alt="Estrela" className="w-5 h-5" />
                ))}
            </div>
            <span className="font-cormorant italic text-ebano text-3xl">{comment}</span>
            <div className="flex flex-row justify-start items-center gap-2">
                <img src={image} alt={`Foto de ${name}`} className="h-12 w-12 object-cover rounded-full border-2 border-cru-border" />
                <div className="flex flex-col">
                    <span className="font-jost text-ebano leading-6 text-base font-jost uppercase">{name}</span>
                    <span className="font-jost text-ebano/50 leading-6 text-base">{profession}</span>
                </div>
            </div>
        </div>
    )
}