import {
  VscArrowRight,
  AiOutlinePlayCircle,
  FcGoogle,
  FaFacebookSquare,
  FaApple,
  BsArrowBarUp,
  BsArrowBarDown,
  BsPen,
  BsListUl,
  BsHeart,
  BsUpload,
  BsDownload,
  BsArchive,
  BsStopwatch,
  AiOutlineShareAlt,
  AiOutlineMail,
  AiOutlineDelete,
  IoDuplicateOutline,
  IoFlagOutline,
  IoSettingsOutline,
  CgViewCols,
  MdAddToQueue,
  BsCheckCircle,
  BsBoxArrowInRight,
  BsLink45Deg,
  BsPerson,
  CgCalendarDue,
  GiProgression,
  IoIosTrophy,
  BsFillDropletFill,
  ScheduleSection
} from "./modules.jsx";
import { addTaskAbove, addTaskBelow } from "./functions";
export const navbarLinks = [
  "features",
  "templates",
  "for team",
  "resources",
  "pricing",
  "log in",
  "sign up",
];
export const resourcesList = [
  {
    head: "integrations",
    body: "connect Todoist with tools like IFTTT,Alexa, Google Calendar, and more...",
  },
  {
    head: "getting started guide",
    body: "everything you need to know to get your Todoist up and running in minutes.",
  },

  {
    head: "help center ",
    body: "find answers to your questions and tips for getting the most out of your Todoist.",
  },
  {
    head: "productivity methods + quiz",
    body: "learn the most popular productivity methods and discover which one fits you best.",
  },
  {
    head: "blog",
    body: " productivity advice you won‘t find anywhere else, plus Todoist tips and product news.",
  },
];
export const members = [
  {
    wise: "I literally couldn’t do my job or even manage all the business of being a fully functioning parent and spouse without Todoist.",
    memberName: "Khoi Vinh",
    position: "Senior Product Engineer at Buffer",
    avatar:
      "https://todoist.com/_next/static/images/creatives@2x_982573afe55d7d685457e8739cad1564.webp",
    moreInfoIcon: <VscArrowRight size="25" className="mx-2" />,
    moreInfo: "read more",
  },
  {
    wise: "As a software engineer, it’s useful to break down big projects into smaller tasks, and Todoist is perfect for that purpose.",
    memberName: "Tigran Hakobyan",
    position: "Senior Product Engineer at Buffer",
    avatar:
      "https://todoist.com/_next/static/images/developers@2x_afa5cccd3899b95eaeeadf1b1428f04e.webp",
    moreInfoIcon: <VscArrowRight size="25" className="mx-2" />,
    moreInfo: "read more",
  },
  {
    wise: "I kept track of all my school tasks in Todoist and, in 2016, I became the first one in my family to obtain a bachelor’s degree.",
    memberName: "Samantha Houston",
    position: "Software Engineer",
    avatar:
      "https://todoist.com/_next/static/images/students@2x_f3428555b6fdc8fd7b6f2be4accaf4bd.webp",
    moreInfoIcon: <AiOutlinePlayCircle size="25" className="mx-2" />,
    moreInfo: "see the video",
  },
  {
    wise: "Todoist has revolutionized the way we run our small business by helping us simplify projects and coordinate tons of details.",
    memberName: "Trevor Stephens",
    position: "General Manager at Topline Builders",
    avatar:
      "https://todoist.com/_next/static/images/small-businesses@2x_0f94ac4d45a80b3a9799d6b50a118b87.webp",
    moreInfoIcon: <VscArrowRight size="25" className="mx-2" />,
    moreInfo: "read more",
  },
  {
    wise: "Todoist gave us the focus to scale our company from 2 to 75 employees, $12M in VC financing, and 350+ happy enterprise customers.",
    memberName: "Andrew Montalenti",
    position: "CTO at Parse.ly",
    avatar:
      "https://todoist.com/_next/static/images/entrepreneurs@2x_7a88f9f8faf22929603ed3d4cc1d625f.webp",
    moreInfoIcon: <AiOutlinePlayCircle size="25" className="mx-2" />,
    moreInfo: "see the video ",
  },
  {
    wise: "Todoist helps me organize all my writing projects. And that makes it an indispensable tool both in business and in life.",
    memberName: "Jennifer Mattern",
    position: "Freelancer Writer",
    avatar:
      "https://todoist.com/_next/static/images/freelancers@2x_b25168b8c7fa10539ac8c3d747a8cf51.webp",
    moreInfoIcon: <VscArrowRight size="25" className="mx-2" />,
    moreInfo: "read more",
  },
];
export const languages = [
  "Čeština",
  "Dansk",
  "Deutsch",
  "English",
  "Español",
  "Suomi",
  "Français",
  "Italiano",
  "日本語",
  "한국어",
  "Norsk",
  "Nederlands",
  "Polski",
  "Português (Brazil)",
  "Pусский (Russian)",
  "Svenska",
  "Türkçe",
  "中文 (简体)",
  "中文 (繁體)",
];
export const signupOptions = [
  { "option-icon": <FcGoogle size="18px" />, "option-name": "Google" },
  {
    "option-icon": <FaFacebookSquare color="#3c5a99" size="18px" />,
    "option-name": "Facebook",
  },
  {
    "option-icon": <FaApple color="#000" size="18px" />,
    "option-name": "Apple",
  },
];
export const emailValidation = [
  {
    condition: "No white spaces",
    id: "username-whiteSpace",
  },
  {
    condition: "only one @ character",
    id: "@-exist",
  },
  {
    condition: "Domain (eg. gmail)",
    id: "domain-exist",
  },
  {
    condition: "Top-level domain (eg. .com)",
    id: "top-level-domain-exist",
  },
];
export const passwordValidation = [
  {
    condition: "[8:15] chars",
    id: "pass-length",
  },
  {
    condition: "one Uppercase letter",
    id: "uppercase-exist",
  },
  {
    condition: "one Lowercase letter",
    id: "lowercase-exist",
  },
  {
    condition: "one Number",
    id: "Number-exist",
  },
];

export const ContextMenu_ProjectPane = [
  {
    icon: <BsArrowBarUp color="#8a8a8a" size="18" />,
    label: "Add project above",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsArrowBarDown color="#8a8a8a" size="18" />,
    label: "Add project below",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsPen color="#8a8a8a" size="18" />,
    label: "Edit project",
    newFeature: null,
    action: "",
  },
  {
    icon: <AiOutlineShareAlt color="#8a8a8a" size="18" />,
    label: "Share project",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsHeart color="#8a8a8a" size="18" />,
    label: "Add to favourite",
    newFeature: null,
    action: "",
  },
  {
    icon: <IoDuplicateOutline color="#8a8a8a" size="18" />,
    label: "Duplicate project",
    newFeature: null,
    action: "",
  },
  {
    icon: <AiOutlineMail color="#8a8a8a" size="18" />,
    label: "Email tasks to this project",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsListUl color="#8a8a8a" size="18" />,
    label: "Project calender feed",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsArchive color="#8a8a8a" size="18" />,
    label: "Archive project",
    newFeature: null,
    action: "",
  },
  {
    icon: <AiOutlineDelete color="#8a8a8a" size="18" />,
    label: "Delete project",
    newFeature: null,
    action: "",
  },
];
export const ContextMenu_FilterPane = [
  {
    icon: <BsArrowBarUp color="#8a8a8a" size="18" />,
    label: "Add filter above",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsArrowBarDown color="#8a8a8a" size="18" />,
    label: "Add filter below",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsPen color="#8a8a8a" size="18" />,
    label: "Edit filter",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsHeart color="#8a8a8a" size="18" />,
    label: "Add to favourite",
    newFeature: null,
    action: "",
  },
  {
    icon: <AiOutlineDelete color="#8a8a8a" size="18" />,
    label: "Delete filter",
    newFeature: null,
    action: "",
  },
];
export const ContextMenu_MainInbox = [
  {
    icon: <CgViewCols color="#8a8a8a" size="18" />,
    label: "View as board",
    newFeature: 'new',
    action: "",
  },
  {
    icon: <MdAddToQueue color="#8a8a8a" size="18" />,
    label: "Add section",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsDownload color="#8a8a8a" size="18" />,
    label: "Import from template",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsUpload color="#8a8a8a" size="18" />,
    label: "Export as a template",
    newFeature: null,
    action: "",
  },
  {
    icon: <AiOutlineMail color="#8a8a8a" size="18" />,
    label: "Email tasks to this project",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsListUl color="#8a8a8a" size="18" />,
    label: "Project calender feed",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsCheckCircle color="#8a8a8a" size="18" />,
    label: "Show complete tasks",
    newFeature: null,
    action: "",
  },
];

export const ContextMenu_ForTask = [
  {
    icon: <BsArrowBarUp color="#8a8a8a" size="18" />,
    label: "Add task above",
    newFeature: null,
    action: addTaskAbove,
  },
  {
    icon: <BsArrowBarDown color="#8a8a8a" size="18" />,
    label: "Add task below",
    newFeature: null,
    action: addTaskBelow,
  },
  {
    icon: <BsPen color="#8a8a8a" size="18" />,
    label: "Edit task",
    newFeature: ScheduleSection, // Issue
    action: "",
  },
  {
    icon: <BsStopwatch color="#8a8a8a" size="18" />,
    label: "Reminders",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsBoxArrowInRight color="#8a8a8a" size="18" />,
    label: "Move to project",
    newFeature: null,
    action: "",
  },
  {
    icon: <IoDuplicateOutline color="#8a8a8a" size="18" />,
    label: "Duplicate task",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsLink45Deg color="#8a8a8a" size="18" />,
    label: "Copy link to task",
    newFeature: null,
    action: "",
  },

  {
    icon: <AiOutlineDelete color="#8a8a8a" size="18" />,
    label: "Delete task",
    newFeature: null,
    action: "",
  },
];

export const contextMenu_ForSorting = [
  {
    icon: <CgCalendarDue color="#8a8a8a" size="18" />,
    label: "Sort by due date",
    newFeature: null,
    action: "",
  },
  {
    icon: <IoFlagOutline color="#8a8a8a" size="18" />,
    label: "Sort by priority",
    newFeature: null,
    action: "",
  },
  {
    icon: "Aa",
    label: "Sort alphabetically",
    newFeature: null,
    action: "",
  },
  {
    icon: <BsPerson color="#8a8a8a" size="18" />,
    label: "Sort assignee",
    newFeature: null,
    action: "",
  },
  {
    icon: <IoSettingsOutline color="#8a8a8a" size="18" />,
    label: "Custom sort",
    newFeature: null,
    action: "",
  },
];

// Progression data
export const progression_data = [
  {
    "goals-target__icon": <GiProgression size="40" />,
    "goals-target__achieved": "Daily goal: 0/5 tasks",
    "goals-target__hint": "Just take it one task at a time.",
    "goals-target__streak_top": "You are not on a streak.",
    "goals-target__streak_bottom":
      "Your longest streak: 2 days(Mar 26 2020 - Mar 29 2020)",
    "progress-graph__head": "Completed in the last 7 days :",
  },
   {
    "goals-target__icon": <IoIosTrophy size="40" />,
    "goals-target__achieved": "Weekly goal: 0/30 tasks",
    "goals-target__hint": "Nice start! Keep it up.",
    "goals-target__streak_top": "You've completed your goal 0 weeks in a row.",
    "goals-target__streak_bottom":
      "Your longest streak: 1 week (Sep 27 2021 - Oct 3 2021)",
    "progress-graph__head": "Completed in the last 4 weeks :",
  },
  {
    "goals-target__icon": <BsFillDropletFill size="40" />,
    "goals-target__achieved": "You are a Novice (1243)",
    "goals-target__hint": "1257 points required for next level",
    "goals-target__streak_top": "You've completed your goal 0 weeks in a row.",
    // "goals-target__streak_bottom":
    //   "Your longest streak: 1 week (Sep 27 2021 - Oct 3 2021)",
    "progress-graph__head": "Karma trend :",
  },

];
