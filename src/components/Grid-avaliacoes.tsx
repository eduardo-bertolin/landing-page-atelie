import Star from "../assets/star.svg";
import User from "../assets/images/user.png";

interface GridAvaliacoesProps {
    stars: number;
    comment: string;
    name: string;
    profession: string;
}

export default function GridAvaliacoes({ stars, comment, name, profession }: GridAvaliacoesProps) {
    return (
        <div className="group w-auto h-auto flex flex-col justify-start p-7 gap-4">
            <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, index) => (
                    <img key={index} src={Star} alt="Estrela" className="w-5 h-5" />
                ))}
            </div>
            <span className="font-cormorant italic text-ebano text-3xl">{comment}</span>
            <div className="flex flex-row justify-start items-center gap-2">
                <img src={User} alt="" className="h-10 w-auto" />
                <div className="flex flex-col">
                    <span className="font-jost text-cru leading-6 text-base font-jost uppercase">{name}</span>
                    <span className="font-jost text-(--color-cru-translucent) leading-6 text-base">{profession}</span>
                </div>
            </div>
        </div>
    )
}