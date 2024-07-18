interface Props {
  asset: any;
}
export const NameItem = ({ asset }: Props) => {
  return (
    <div className="w-full h-full text-xs tracking-widest antialiased md:text-base uppercase flex items-center justify-center">
      <p className="font-medium pt-2 text-2xl md:text-3xl md:pt-3 text-wrap break-all">
        {asset.assets_name}
      </p>
    </div>
  );
};
