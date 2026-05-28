import GridAvaliacoes from "./Grid-avaliacoes";

export default function Avaliacoes() {
    return (
        <div className="container flex flex-col xl:flex-row h-auto gap-1 w-full">
            <div className="bg-red-500 h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"piru enorme muito grande pra caralho"`} photo="" name="Eduardo Bertolin" profession="Cliente" />

            </div>
        </div>
    )
}