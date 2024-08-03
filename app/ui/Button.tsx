import { PlusCircleIcon } from "@heroicons/react/24/outline";

type ButtonText = {
  text: string;
};

export function PrimaryButton({ text }: ButtonText) {
  return <button className="px-10 py-4 bg-green rounded-full">{text}</button>;
}

export function SecondaryButton({ text }: ButtonText) {
  return (
    <button className="px-10 py-4 bg-transparent border-[1px] border-white rounded-full">
      {text}
    </button>
  );
}

export function TextButton({ text }: ButtonText) {
  return <button className="font-bold ">{text}</button>;
}

export function AddBtnPlainBG() {
  return (
    <button className="rounded-[4px] bg-white p-[6px]">
      <PlusCircleIcon height={12.75} width={12.75} color="black" />
    </button>
  );
}

export function AddBtnGradientBg() {
  return (
    <button className="rounded-[4px] bg-gradient-to-b from-pink-moon to-blue-monday p-[6px]">
      <PlusCircleIcon height={12.75} width={12.75} color="black" />
    </button>
  );
}
