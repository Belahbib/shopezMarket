import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
interface prop {
  phone : string | undefined;
  username : string | undefined;
}


const Contact = ( {phone , username} : prop) => {
  const AssetsUrl = import.meta.env.VITE_ASSETS_URL;
  
  return (
    <div>
       
      <div className="flex justify-center items-center  min-h-screen">
        <div className="bg-white shadow-md  rounded-lg p-6 w-full max-w-md">
          
          <img src={`${AssetsUrl}/scam.jpg`} alt="img" className="" />
          <h2 className="text-2xl text-red-500  text-center  font-bold mb-4">
            {" "}
            Alert!
          </h2>
          <p className=" text-center text-gray-700">
            Never send money in advance to the seller by bank transfer or
            through a money transfer agency when purchasing the goods available
            on the site.
          </p>
          <p className='text-center text-xl mt-2 font-semibold'>Allo  {username}</p>
          <div className='flex justify-center'>
          <button className=" border border-gray-400 mt-6 px-4 py-2 text-semibold text-center">
            <LocalPhoneIcon sx={{ color: 'green' }}/>
           <span className=''> {phone} </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
