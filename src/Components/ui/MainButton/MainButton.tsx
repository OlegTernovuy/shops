

import Image from "next/image";

import Button from "@mui/material/Button";

import buttonIcon from "../../../../public/buttonIcon.svg";

interface IButton {
  action?: () => void;
}

const MainButton = () => {
  return (
    // <button
    //   className="flex justify-center bg-tifany uppercase text-white items-center rounded sm:w-full md:w-96 my-4"
    //   onClick={action}
    // >
    //   <Image
    //     src={buttonIcon}
    //     alt="Button Icon"
    //     width={24}
    //     height={24}
    //     className="mr-2 py-4"
    //   />
    //   Фільтри
    // </button>
    <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: '#04C2C2',
        textTransform: 'uppercase',
        // maxWidth: '440px',
        minWidth: '240px',
        width: '100%',
        padding: '14px 0',
        color: '#262626',
      }}
    >
      <Image src={buttonIcon} alt="buttonIcon" width={24} height={24} style={{marginRight: '8px'}}/>
      каталог товарів
    </Button>
  );
};

export default MainButton;
