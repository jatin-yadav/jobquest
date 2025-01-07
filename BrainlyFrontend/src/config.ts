import { DocumentIcon } from "./icons/DocumentIcon";
import { HashTagIcon } from "./icons/HashTagIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { TweeterIcon } from "./icons/TweeterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

export const BACKEND_URL = "http://localhost:8080";

export const contentTypes = [
  { type: "tweet", label: "Tweet", icon: TweeterIcon },
  { type: "youtube", label: "Youtube", icon: YoutubeIcon },
  { type: "documents", label: "Documents", icon: DocumentIcon },
  { type: "link", label: "Link", icon: LinkIcon },
  { type: "hashtag", label: "HashTagIcon", icon: HashTagIcon },
];
