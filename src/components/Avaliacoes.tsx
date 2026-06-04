import GridAvaliacoes from "./Grid-avaliacoes";

export default function Avaliacoes() {
    return (
        <div className="container flex flex-col xl:flex-row h-auto my-10 gap-1 w-full">
            <div className="bg-red-500 h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"TESTE TESTE TESTE KANYE WEST"`} name="Eduardo Bertolin" profession="Cliente" />
            </div>

            <div className="bg-blue-500 h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"TESTE TESTE TESTE KANYE WEST"`} name="Eduardo Bertolin" profession="Cliente" />
            </div>

            <div className="bg-green-500 h-60 w-full xl:w-1/3">
                <GridAvaliacoes stars={5} comment={`"TESTE TESTE TESTE KANYE WEST"`} name="Eduardo Bertolin" profession="Cliente" />
            </div>
        </div>
    )
}