interface GridInfoProps {
    icon: string;
    title: string;
    description: string;
}

export default function GridInfo({ icon, title, description }: GridInfoProps) {
    return (
        <div className="group border border-(--color-dourado) rounded-xs w-auto h-auto flex flex-col justify-start py-6 px-6 gap-4 transition-all duration-500 hover:bg-terra/40 hover:border-(--color-dourado)">
            <img src={icon} alt={title} className="w-12 h-12 transition-transform duration-300 group-hover:-translate-x-4" />
            <h4 className="font-serif text-white text-3xl">{title}</h4>
            <p className="font-jost text-(--color-cru-translucent) text-lg">{description}</p>
        </div>

    )
}