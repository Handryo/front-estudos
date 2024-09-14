import FeedCard from "../FeedCard";

function FeedGrid() {
    return (
        <div className="
        grid
        grid-cols-3
        gap-4">

        {/*Após definir um grid (grade) que comporta três colunas e um espaçamento com o gap,
           usamos o pasta de componentes: "FeedCard" para a criação dos Cards*/}

            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>

            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>
            
            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>

            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>
            <FeedCard title="Foto Casa"/>
        </div>
    );
}

export default FeedGrid;