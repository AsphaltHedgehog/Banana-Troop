import { Dispatch, SetStateAction } from "react";
interface SideBarProps {
  setFormatQuiz: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ setFormatQuiz }: SideBarProps) => {
  console.log(setFormatQuiz);
  return <div>Sidebar</div>;
};

export default Sidebar;
