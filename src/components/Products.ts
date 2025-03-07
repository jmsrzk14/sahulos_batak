export interface Product {
    id: number;
    name: string;
    origin: string;
    price: number;
    image: string;
    isNew: boolean;
    isFavorite: boolean;
    stock: number;
  }
  
  export const productsData: Product[] = [
    {
      id: 1,
      name: "Kebaya Encim Modern",
      origin: "Jawa",
      price: 1250000,
      image: "https://images.unsplash.com/photo-1609097828576-3b620e86039e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: true,
      isFavorite: false,
      stock: 0,
    },
    {
      id: 2,
      name: "Baju Bodo Sulawesi",
      origin: "Sulawesi Selatan",
      price: 950000,
      image: "https://images.unsplash.com/photo-1581804928342-4e3405e39c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: false,
      isFavorite: false,
      stock: 5,
    },
    {
      id: 3,
      name: "Ulos Batak Premium",
      origin: "Sumatera Utara",
      price: 1750000,
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: true,
      isFavorite: false,
      stock: 5,
    },
    {
      id: 4,
      name: "Batik Pekalongan Tulis",
      origin: "Jawa Tengah",
      price: 2250000,
      image: "https://images.unsplash.com/photo-1568252542512-9a39a6a3ee8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: false,
      isFavorite: false,
      stock: 5,
    },
    {
      id: 5,
      name: "Tenun Ikat Sumba",
      origin: "Nusa Tenggara Timur",
      price: 3450000,
      image: "https://images.unsplash.com/photo-1523379882969-04477e5c1e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: true,
      isFavorite: false,
      stock: 5,
    },
    {
      id: 6,
      name: "Songket Palembang",
      origin: "Sumatera Selatan",
      price: 4750000,
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: false,
      isFavorite: false,
      stock: 5,
    },
    {
      id: 7,
      name: "Songket Palembang",
      origin: "Sumatera Selatan",
      price: 4750000,
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isNew: false,
      isFavorite: false,
      stock: 1,
    },
  ];
  