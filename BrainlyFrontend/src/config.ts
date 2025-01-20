import { DocumentIcon } from "./icons/DocumentIcon";
import { HashTagIcon } from "./icons/HashTagIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { TweeterIcon } from "./icons/TweeterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

export const BACKEND_URL = "http://localhost:8080";

export const brainContentTypes = [
  { type: "tweet", label: "Tweet", icon: TweeterIcon },
  { type: "youtube", label: "Youtube", icon: YoutubeIcon },
  { type: "documents", label: "Documents", icon: DocumentIcon },
  { type: "link", label: "Link", icon: LinkIcon },
  { type: "hashtag", label: "HashTagIcon", icon: HashTagIcon },
];
export const questionContentTypes = [
  { type: "dropdown", label: "Dropdowns", icon: TweeterIcon },
  { type: "multipleChoice", label: "Multiple Choice", icon: YoutubeIcon },
  { type: "shortAnswer", label: "Short Answer", icon: DocumentIcon },
  { type: "longAnswer", label: "Long Answer", icon: LinkIcon },
  { type: "code", label: "Code", icon: HashTagIcon },
  { type: "boolean", label: "Boolean", icon: HashTagIcon },
];
