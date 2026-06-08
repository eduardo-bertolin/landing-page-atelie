import GridAvaliacoes from "./Grid-avaliacoes";

export default function Avaliacoes() {
    return (
        <div className="container flex flex-col xl:flex-row h-auto my-10 gap-1 w-full">
            <div className="h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"A Tati que costurou meu traje, ficou perfeito!"`} name="Daredevil" profession="Vigilante" image="https://images.bauerhosting.com/empire/2026/01/daredevil-born-again-s2-1.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" />
            </div>

            <div className="h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"Tati, Suas peças são sempre de qualidade, super fofas e delicadas."`} name="Idosa genérica" profession="Cliente" image="https://divertidosos.com.br/novidades/wp-content/uploads/2017/01/idosa.jpg" />
            </div>

            <div className="h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"Send me a DM, we're going to do a collab."`} name="Kanye West" profession="Cantor" image="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds" />
            </div>
        </div>
    )
}