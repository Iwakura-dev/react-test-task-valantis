export const SelectFilter = () => {
  // useEffect(() => {
  //   fetchProductsWithFilter("price").then((data) => console.log(data));
  // }, []);
  return (
    <div>
      <div className="flex flex-col mx-auto items-center p-12 gap-5">
        <h1 className="font-bold text-3xl">Select Filter Option</h1>
        <div>
          <select className="px-8 font-bold text-md py-2 rounded-full shadow-xl outline-none dark:bg-zinc-800">
            <option className="font-bold text-md">Название</option>
            <option className="font-bold text-md">Цене</option>
            <option className="font-bold text-md">Бренд</option>
          </select>
        </div>
      </div>
    </div>
  );
};
