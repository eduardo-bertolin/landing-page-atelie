interface GridAvaliacoesProps {
    stars: string;
    comment: string;
    name: string;
    photo: string;
}

export default function GridAvaliacoes({ stars, comment, photo, name }: GridAvaliacoesProps) {
    return (
        <div className="group w-auto h-auto flex flex-col justify-start p-7 gap-4">
            <img src={stars} alt={stars} />
            <h1 className="font-cormorant italic text-terra text-3xl">{comment}</h1>
            <p className="font-jost text-(--color-cru-translucent) leading-6 text-base">{comment}</p>
        </div>
    )
}