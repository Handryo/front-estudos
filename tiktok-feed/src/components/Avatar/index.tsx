interface AvatarProps{
    nickname: string,
    realname: string
}

function Avatar(props: AvatarProps){
    return (
        <div className='
            avatar__container
            flex
            flex-row
            items-center
            w-full
        '>
            <div className='avatar_photo mr-20'>
                <img
                    className='
                    rounded-full
                    hover:scale-x-110
                    hover:scale-y-110
                    animation-delay: 999s;
                    hover: animate-
                    bg-gradient-to-r
                    p-[6px]
                    from-[#6EE7B7] via-[#3B82F6] to-[#933EA]
                    '
                    src="./src/assets/handru.png"
                />
            </div>

            <div className='avatar_texts text-center justify-between'>

                <div className='text_title'>
                    <h1>{props.nickname}</h1>
                </div>

                <div className='text_name mt-3'>
                    <h2>{props.realname}</h2>
                </div>

                <div className='text_follow'>
                    <button className='w-80 mt-5'>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Avatar;