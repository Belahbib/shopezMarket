import Skeleton from "@mui/material/Skeleton";

function CardSkeleton() {
  // Create an array of 6 undefined elements and map over it
  const skeletons = Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="rounded-2xl mt-10   m-auto relative right-10  border-gray-200 border-2 shadow-lg">
      <Skeleton variant="rectangular" height={300} width={300} className="mx-auto mb-4 rounded-2xl " />

      <Skeleton variant="text" height={25} width={80} className="ml-4"/>
      <Skeleton variant="text" height={40} width={150} className=" ml-4"/>
      <div className="flex justify-between mt-2  p-2">
        <Skeleton variant="text" height={40} width={80} />
        <Skeleton variant="rectangular" height={30} width={30} className=" rounded-full" />
      </div>
    </div>
  ));

  return (
    <div className="w-full m-auto grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 lg:gap-x-10 gap-x-6 mt-16 mb-5">
      {skeletons}
    </div>
  );
}

export default CardSkeleton;
