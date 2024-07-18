import { Image } from '@nextui-org/react';
interface Props {
  asset: any;
}
export const RareSatsItem = ({ asset }: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="left-0 top-0 flex z-10 absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100">
        {asset?.assets_name}
      </div>
      <Image
        radius="full"
        classNames={{
          wrapper: 'w-32 h-32 md:w-36 md:h-36',
        }}
        src={`/raresats/${asset?.assets_name}.png`}
        alt="logo"
      />
    </div>
  );
};
