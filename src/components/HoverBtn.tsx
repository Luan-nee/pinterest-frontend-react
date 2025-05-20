interface HoverBtnProps {
  children: React.ReactNode;
}

const HoverBtn: React.FC<HoverBtnProps> = ({ children }) => {
  return (
    <button className="cursor-pointer flex flex-row items-center justify-center p-6 bg-white rounded-full shadow-lg hover:bg-gray-200 transition duraon-300 ease-in-out">
      {children}
    </button>
  );
};

export default HoverBtn;