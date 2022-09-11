// react basic
import reactDom from "react-dom";
import { Component } from "react";
// icons
import {
  VscChevronDown,
  VscChevronLeft,
  VscArrowRight,
  VscClose,
  VscChevronRight,
  VscChevronUp,
  VscCircleFilled,
  VscBellDot,
} from "react-icons/vsc";
import {
  AiOutlinePlayCircle,
  AiOutlineShareAlt,
  AiOutlineDelete,
  AiOutlineMail,
  AiFillNotification,
} from "react-icons/ai";
import {RiFlag2Fill} from 'react-icons/ri'
import {
  FaQuoteLeft,
  FaFacebookSquare,
  FaApple,
  FaLightbulb,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {GiLaurelsTrophy,GiProgression} from 'react-icons/gi'
import {
  CgSpinner,
  CgMore,
  CgCheck,
  CgSun,
  CgViewCols,
  CgCalendarNext,
  CgCalendarDue,
} from "react-icons/cg";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { GrDrag } from "react-icons/gr";
import {
  IoEllipsisHorizontalSharp,
  IoCheckmarkCircle,
  IoFlagOutline,
  IoDuplicateOutline,
  IoFlagSharp,
  IoSettingsOutline,
  IoCheckmarkDone,
} from "react-icons/io5";
import {
  IoIosLink,
  IoIosFlag,
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoIosTrophy,
} from "react-icons/io";
import {GoPrimitiveDot} from 'react-icons/go';
import {
  BsGift,
  BsFillDropletFill,
  BsUpload,
  BsDownload,
  BsArrowBarUp,
  BsArrowBarDown,
  BsHeart,
  BsPen,
  BsListUl,
  BsArchive,
  BsCheckCircle,
  BsStopwatch,
  BsBoxArrowInRight,
  BsLink45Deg,
  BsBrightnessHigh,
  BsCalendar,
  BsPerson,
} from "react-icons/bs";
import { MdWeekend, MdAddToQueue } from "react-icons/md";
import {SiGooglecalendar} from 'react-icons/si'
// components
import Lang from "../components/select boxes/lang select box/C-lang";
import Brand from "../components/brand/C-brand";
import PlayIcon from "../app/icons/play_icon";
import EmailValidationBox from "../components/form validation/C-emailValidationBox";
import PrivacyHint from "../components/form validation/C-privacyHint";
import ForgetPasswrod from "../components/form validation/C-ForgestPassword";
import PasswordValidationBox from "../components/form validation/C-passwordValidationBox";
import Loader from "../components/loader/page loader/C-loader";
import Select from '../components/select boxes/color select box/C-select';
import CheckboxAnimated from "../components/animated checkbox/C-CheckboxAnimated";
import SynLoader from '../components/loader/syn loader/C-synLoader';
import FutureTasks from '../components/Future tasks/C-future-tasks';
import AddTaskButton from '../components/add new task/C-addTaskBtn'
// layouts
import Navbar from "../layout/navbar/L-navbar";
import Face from "../layout/face/L-face";
import MentalSpace from "../layout/mental space/L-mentalSpace";
import Rates from "../layout/rates/L-rates";
import Celebrates from "../layout/celebrates/L-celebrates";
import Members from "../layout/members/L-members";
import TaskManger from "../layout/taks manger/L-taskmanger";
import Peace from "../layout/peace/L-peace";
import Footer from "../layout/footer/L-footer";

// pages
import Home from "../pages/home/P-home";
import Features from "../pages/features/P-features";
import Regester from "../pages/regester/P-Regester";
import App from "../pages/app/P-App";
// data
import {
  navbarLinks,
  languages,
  members,
  resourcesList,
  signupOptions,
  emailValidation,
  passwordValidation,
} from "../utils/data";

// App

//  #--App layout--#
import AppNavbar from "../app/app navbar/App-navbar";
import AppBody from "../app/app body/App-body";
import AppAside from "../app/app aside/App-aside";
import AppMain from "../app/app main/App-main";
import ProjectsPaneContent from "../app/app aside/aside panes/project pane/App-projects pane content";
import LabelsPaneContent from "../app/app aside/aside panes/label pane/App-labels pane content";
import FiltersPaneContent from "../app/app aside/aside panes/filter pane/App-filters pane content";
import ProjectsPanePopUp from "../app/app aside/aside panes/project pane/App-projects pane popup";
import LabelsPanePopUp from "../app/app aside/aside panes/label pane/App-labels pane popup";
import FiltersPanePopUp from '../app/app aside/aside panes/filter pane/App-filters pane popup';
import MainInboxState from "../app/app main/main states/App-main-inbox-state";
import MainTodayState from "../app/app main/main states/App-main-today-state";
import MainUpcomingState from '../app/app main/main states/App-main-upcoming-state';
import AddNewTask from '../components/add new task/App-addNewTask'
import TaskList from '../components/add new task/App-taskList';
import ContextMenu from '../components/context menu/C-context_menu'
import ScheduleSection from '../components/context menu/C-contextMenu__scheduleSection'
import Notify from '../components/notifications/C-notify'
import Tooltip from '../components/tooltip/C-tooltip'
import FlatCalender from '../components/flat calender/C-flat calender'
import TaskProgression from '../components/task progression/C-task progression'
import ProgressionGraph from '../components/task progression/progression graph'
//  #--App icons--#
import MenuIcon from "../app/icons/menu_icon";
import SearchIcon from "../app/icons/search-icon";
import HomeIcon from "../app/icons/home_icon";
import PlusIcon from '../app/icons/plus_icon'
import GraphIcon from "../app/icons/graph_icon";
import QuestionIcon from '../app/icons/question_icon';
import BellIcon from '../app/icons/bell_icon';
import AvatarIcon from '../app/icons/avatar_icon';
import InboxIcon from "../app/icons/inbox_icon";
import TodayIcon from "../app/icons/today_icon";
import UpcomingIcon from "../app/icons/upcoming_icon";
import WaterDropIcon from "../app/icons/waterdrop_icon";
import AddAboveIcon from '../app/icons/addAbove_icon';
import AddBelowIcon from "../app/icons/addAbove_icon";
import EditIcon from "../app/icons/edit_icon";
import ShareIcon from "../app/icons/share_icon";
import FavIcon from "../app/icons/fav_icon";
import DuplicateIcon from '../app/icons/duplicate_icon'
import EmailIcon from "../app/icons/email_icon";
import ListIcon from "../app/icons/list_icon";
import ArchiveIcon from "../app/icons/archive_icon";
import DeleteIcon from "../app/icons/delete_icon";
import WomanIcon from '../app/icons/woman_icon';
import CommentIcon from '../app/icons/comment_icon';
import SortIcon from "../app/icons/sort_icon";
import FriendsIcon from '../app/icons/friends_icon';
import ScheduleIcon from '../app/icons/schedule_icon';
import ReminderIcon from '../app/icons/reminder_icon';
import LabelIcon from '../app/icons/label_icon';
import CheckedCircle from '../app/icons/checkedCircle_icon'
export {
  // react basic
  reactDom,
  Component,
  // icons
  VscChevronDown,
  VscChevronRight,
  VscChevronUp,
  VscChevronLeft,
  VscArrowRight,
  VscCircleFilled,
  VscBellDot,
  AiOutlinePlayCircle,
  AiOutlineShareAlt,
  AiOutlineDelete,
  AiOutlineMail,
  AiFillNotification,
  FaQuoteLeft,
  PlayIcon,
  FcGoogle,
  FaFacebookSquare,
  FaLightbulb,
  FaApple,
  CgSpinner,
  CgCheck,
  CgViewCols,
  HiOutlineShieldCheck,
  VscClose,
  GrDrag,
  CgMore,
  IoEllipsisHorizontalSharp,
  IoCheckmarkCircle,
  IoFlagOutline,
  IoDuplicateOutline,
  IoFlagSharp,
  IoCheckmarkDone,
  GoPrimitiveDot,
  BsGift,
  BsFillDropletFill,
  BsHeart,
  BsArrowBarUp,
  BsArrowBarDown,
  BsPen,
  BsListUl,
  BsArchive,
  BsBrightnessHigh,
  BsCalendar,
  BsPerson,
  AddAboveIcon,
  AddBelowIcon,
  EditIcon,
  ShareIcon,
  FavIcon,
  DuplicateIcon,
  EmailIcon,
  ListIcon,
  ArchiveIcon,
  DeleteIcon,
  IoIosLink,
  IoIosFlag,
  IoIosTrophy,
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoSettingsOutline,
  MdWeekend,
  MdAddToQueue,
  BsUpload,
  BsDownload,
  BsCheckCircle,
  BsLink45Deg,
  BsStopwatch,
  BsBoxArrowInRight,
  CgSun,
  CgCalendarNext,
  CgCalendarDue,
  SiGooglecalendar,
  RiFlag2Fill,
  // components
  Lang,
  Brand,
  EmailValidationBox,
  PasswordValidationBox,
  PrivacyHint,
  ForgetPasswrod,
  Select,
  CheckboxAnimated,
  SynLoader,
  FutureTasks,
  AddTaskButton,
  // layouts
  Navbar,
  Face,
  MentalSpace,
  Rates,
  Celebrates,
  Members,
  TaskManger,
  Peace,
  Footer,
  // pages
  Home,
  Regester,
  Loader,
  Features,
  App,
  // data
  navbarLinks,
  languages,
  members,
  resourcesList,
  signupOptions,
  emailValidation,
  passwordValidation,
  // App
  //  #--App layout--#
  AppNavbar,
  AppAside,
  AppMain,
  MainInboxState,
  MainTodayState,
  MainUpcomingState,
  AppBody,
  ProjectsPaneContent,
  LabelsPaneContent,
  FiltersPaneContent,
  ProjectsPanePopUp,
  LabelsPanePopUp,
  FiltersPanePopUp,
  AddNewTask,
  TaskList,
  ContextMenu,
  ScheduleSection,
  Notify,
  Tooltip,
  FlatCalender,
  TaskProgression,
  ProgressionGraph,
  //  #--App icons--#
  MenuIcon,
  SearchIcon,
  HomeIcon,
  PlusIcon,
  GraphIcon,
  QuestionIcon,
  BellIcon,
  AvatarIcon,
  InboxIcon,
  TodayIcon,
  UpcomingIcon,
  WaterDropIcon,
  WomanIcon,
  FriendsIcon,
  SortIcon,
  CommentIcon,
  ScheduleIcon,
  ReminderIcon,
  LabelIcon,
  CheckedCircle,
  GiLaurelsTrophy,
  GiProgression,
};
