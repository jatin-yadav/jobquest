import { TwitterTweetEmbed } from "react-twitter-embed";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { BACKEND_URL, brainContentTypes } from "../config";
import axios from "axios";

interface CardProps {
    link: string;
    title: string;
    type: 'youtube' | 'tweet';
    contentId?: string
}

const Card: React.FC<CardProps> = ({ title, link, type, contentId }) => {
    const icon = brainContentTypes.filter((item) => (item.type === type))[0].icon;

    const deleteContent = async () => {
        try {
            const res = await axios.delete(`${BACKEND_URL}/api/v1/content/delete`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }, data: { contentId }
            })
            alert(`${res?.data?.message}`)
        } catch (error) {
            alert(`${error}`)
        }
    }

    return (
        <div className="p-4 rounded-md bg-white shadow-md border border-gray-200 flex flex-col items-center">
            <div className="w-full flex justify-between">
                <div className="flex justify-center items-start gap-1"> {icon()} <span className="font-semibold capitalize">{title}</span></div>
                <div className="flex justify-center items-center gap-2">
                    <a href={link} target="_blank" className="text-gray-500 hover:text-gray-700">
                        <ShareIcon />
                    </a>
                    <button onClick={() => { deleteContent() }} className="text-gray-500 hover:text-gray-700">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
            <div className="py-4 w-full">
                {type === "youtube" && <iframe className="rounded-md w-full" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "tweet" && <TwitterTweetEmbed tweetId={link} />}
            </div>
        </div>
    );
};

export default Card;