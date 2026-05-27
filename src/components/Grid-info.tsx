interface GridInfoProps {
    icon: string;
    title: string;
    description: string;
}

export default function GridInfo({ icon, title, description }: GridInfoProps) {
    return (
        <div className="group border border-(--color-dourado) rounded-xs w-auto h-auto flex flex-col justify-start p-7 gap-4 transition-all duration-500 hover:bg-terra/40 hover:border-(--color-dourado)">
            <img src={icon} alt={title} className="w-10 h-10 transition-transform duration-300 group-hover:-translate-x-4" />
            <h3 className="font-serif text-white text-3xl">{title}</h3>
            <p className="font-jost text-(--color-cru-translucent) leading-6 text-base">{description}</p>
        </div>

    )
}