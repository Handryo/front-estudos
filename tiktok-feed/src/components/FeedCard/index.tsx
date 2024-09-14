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
