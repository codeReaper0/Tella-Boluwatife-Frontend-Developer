export const CardLoaders = () => {
  const rows = Array.from({length: 6}, (_, rowIndex) => (
    <div
      key={rowIndex}
      className="bg-white/10 rounded-lg p-4 space-y-4 animate-pulse w-[366px]"
    >
      <div className="h-8 w-full bg-black/30 rounded-md"></div>
      <div className="h-8 w-full bg-black/30 rounded-md mt-1"></div>
      <div className="h-20 w-full bg-black/30 rounded-md mt-4"></div>
    </div>
  ));
  return <div className="grid grid-cols-3 gap-6">{rows}</div>;
};
