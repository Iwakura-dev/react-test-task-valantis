// This components performs the loading function
export const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-full  shadow-xl rounded-3xl p-4 animate-pulse dark:bg-zinc-800"
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[250px] mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px] mb-2.5"></div>
    </div>
  );
};
