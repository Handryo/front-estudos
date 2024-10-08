interface FeedProps{
    title: string;
}
function FeedCard(props: FeedProps) {
    return (
        <div className='
            bg-white
            rounded-lg
            shadow-md
            h-96
            '>
        {/*As classNames são importantes para a definição dos comandos Tailwind, que nada mais são
        do que comandos de CSS resumidos*/}

            {/*No card elaboramos um background branco, com bordas aredondadas,
            sombreado com uma altura de 96*/}

            {/*Como conteúdo, inicia-se com um padding 4, um título h2 que é formatado através do classname,
            por fim, há o paragráfo que também é formatado através da classname
            */}
            
            <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
                <p className="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Odit, quos, cumque qui 
                    illo in consequuntur laborum soluta architecto </p>
            </div>


        </div>
    );
}

export default FeedCard;
