import { popularsales, toprateslaes } from "../data/data";
import InfiniteMenu from './utils/InfiniteMenu';

const Sales = () => {
  // Combine items from both popularsales and toprateslaes
  const allItems = [
    ...(popularsales.items || []),
    ...(toprateslaes.items || [])
  ];

  // Format items to match InfiniteMenu's expected structure
  const formattedItems = allItems.map(item => ({
    ...item, // Spread all original item properties first
    id: item.id,
    title: item.title,
    text: item.text, // Make sure text is included as it might be used for description
    description: item.text || item.description, // Use text as description if description is not available
    price: item.price, // Keep the original price format (without $)
    rating: item.rating,
    img: item.img, // Make sure img is included as it's used in the cart
    image: item.img, // Also include as image for backward compatibility
    color: item.color,
    shadow: item.shadow,
    btn: item.btn || 'Buy Now',
    // Use the first image as the main image, or fallback to a default
    mainImage: item.img || 'https://via.placeholder.com/300',
    // Use the item's ID as the link or a default link
    link: `#${item.id}`,
  }));

  return (
    <div className='h-screen max-w-screen' style={{ position: 'relative' }}>
      <h1 className="text-white">Top Rated Sales</h1>
      <InfiniteMenu items={formattedItems} />
    </div>
  );
}

export default Sales;
