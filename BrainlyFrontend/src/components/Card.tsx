import { TwitterTweetEmbed } from "react-twitter-embed";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    link: string;
    title: string;
    type: 'youtube' | 'tweet';
}

const Card: React.FC<CardProps> = ({ title, link, type }) => {
    return (
        <div className="p-4 rounded-md bg-white shadow-md border border-gray-200 flex flex-col items-center">
            <div className="w-full flex justify-between">
                <div className="flex justify-center items-center gap-1"><ShareIcon /> {title}</div>
                <div className="flex justify-center items-center gap-2">
                    <a href={link} target="_blank" className="text-gray-500 hover:text-gray-700">
                        <ShareIcon />
                    </a>
                    <DeleteIcon /></div>
            </div>
            <div className="py-4 w-full">
                {type === "youtube" && <iframe className="rounded-md w-full" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                
                {type === "tweet" && <TwitterTweetEmbed tweetId={link} />}
            </div>
        </div>
    );
};

export default Card;