import { CodeIcon } from "./icons/CodeIcon";
import { DocumentIcon } from "./icons/DocumentIcon";
import { DropDownIcon } from "./icons/DropDownIcon";
import { HashTagIcon } from "./icons/HashTagIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { LongAnswerIcon } from "./icons/LongAnswerIcon";
import { MultipleChoiceIcon } from "./icons/MultipleChoiceIcon";
import { ShortAnswerIcon } from "./icons/ShortAnswerIcon";
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
  { type: "dropdown", label: "Dropdowns", icon: DropDownIcon },
  { type: "multipleChoice", label: "Multiple Choice", icon: MultipleChoiceIcon },
  { type: "shortAnswer", label: "Short Answer", icon: ShortAnswerIcon },
  { type: "longAnswer", label: "Long Answer", icon: LongAnswerIcon },
  { type: "code", label: "Code", icon: CodeIcon },
  { type: "boolean", label: "Boolean", icon: HashTagIcon },
];
