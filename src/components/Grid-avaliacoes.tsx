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
            <div className="flex items-center gap-3">
                {photo && <img src={photo} alt={name} className="w-10 h-10 rounded-full object-cover" />}
                <p className="font-jost text-(--color-cru-translucent) leading-6 text-base">{name}</p>
            </div>
        </div>
    )
}