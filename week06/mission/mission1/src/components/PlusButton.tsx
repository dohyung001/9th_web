import { useNavigate } from "react-router-dom";

const PlustMark = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 50 50"
    enable-background="new 0 0 50 50"
    xmlSpace="preserve"
  >
    <line
      fill="none"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      x1="25"
      y1="10.5"
      x2="25"
      y2="39.5"
    />
    <circle fill="none" stroke="#000000" cx="25" cy="25" r="23.667" />
    <line
      fill="none"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      x1="39.5"
      y1="25"
      x2="10.5"
      y2="25"
    />
  </svg>
);

export default function PlusButton() {
  const naivgate = useNavigate();
  const handleButton = () => {
    naivgate("/");
  };
  return (
    <button
      className="fixed bottom-12 right-12 rounded-full bg-pink-500 w-14 h-14 flex items-center justify-center shadow-lg transition"
      onClick={handleButton}
    >
      <PlustMark />
    </button>
  );
}
