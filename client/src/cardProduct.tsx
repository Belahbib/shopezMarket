import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  Name: string;
  productId: string;
  imageUrl: string[];
  price: number;
  category: string;
  isIncart: boolean;
}

const Card: React.FC<CardProps> = ({
  Name,
  imageUrl,
  price,
  productId,
  category,
  isIncart,
}) => {
  const [Incart, setIncart] = useState(isIncart);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const toggleLike = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/api/product/${productId}/cart`,
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        if (!Incart) {
          setIncart(true);
        } else {
          setIncart(false);
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };
  return (
    <div className="w-full">
      <div className=" w-full max-w-sm mx-auto bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl transition duration-500">
        <Link to={`/product/${productId}`}>
          <img
            src={imageUrl[0]}
            alt="Product"
            className=" h-80 w-96 object-cover rounded-xl"
          />
        </Link>
        <div className="px-4 py-3">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {category}
          </span>
          <p className="text-lg font-bold text-black truncate capitalize">
            {Name}
          </p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-lg font-semibold text-black">
              {price} <span className="text-slate-500">$</span>
            </p>
            <button onClick={toggleLike}>
              {!Incart ? (
                <img src="cart-add.png" alt="" className="w-6 h-6" />
              ) : (
                <img src="cart-check.png" alt="" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
