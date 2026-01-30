export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    description: string;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Luminous630 Oil Control Serum",
        category: "Face Care",
        price: 949,
        rating: 4.8,
        reviews: 1240,
        image: "https://images.unsplash.com/photo-1601049413574-214d105b26e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvc21ldGljfGVufDB8fDB8fHww",
        description: "Advanced serum for even and luminous skin. Reduces dark spots in 4 weeks.",
        isNew: true,
    },
    {
        id: "3",
        name: "NIVEA Lip Balm",
        category: "Face Care",
        price: 599,
        rating: 4.6,
        reviews: 620,
        image: "https://images.unsplash.com/photo-1752327091269-56857d148787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pdmVhfGVufDB8fDB8fHww",
        description: "Anti-blemish scrub with Salicylic Acid and Niacinamide to refine skin texture.",
        isNew: true,
    },
    {
        id: "4",
        name: "NIVEA Soft Moisturizer",
        category: "Face Care",
        price: 349,
        rating: 4.5,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80&w=800",
        description: "Non-greasy, fast-absorbing moisturizing cream for face, body and hands.",
    },
    {
        id: "9",
        name: "Hyaluron Cellular Filler",
        category: "Face Care",
        price: 1299,
        rating: 4.9,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1556227702-5ec9eb8df3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZSUyMHdhc2h8ZW58MHx8MHx8fDA%3D",
        description: "Advanced anti-age day cream with Hyaluronic Acid and Creatine.",
        isBestSeller: true,
    },
    {
        id: "2",
        name: "Natural Glow Body Lotion",
        category: "Body Care",
        price: 499,
        rating: 4.7,
        reviews: 850,
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
        description: "Enriched with 40x Vitamin C to give you naturally glowing, even-toned skin.",
        isBestSeller: true,
    },
    {
        id: "6",
        name: "Sun Triple Protect Lotion",
        category: "Sun",
        price: 899,
        rating: 4.8,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3Vuc2NyZWVufGVufDB8fDB8fHww",
        description: "Triple protection against UV, Blue Light, and Pollution. SPF 50PA+++.",
        isNew: true,
    },
    {
        id: "11",
        name: "Protect & Moisture Spf 50",
        category: "Sun",
        price: 749,
        rating: 4.7,
        reviews: 940,
        image: "https://images.unsplash.com/photo-1654973552952-d0c98a3e3388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1bnNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Immediate UVA/UVB protection and 48h moisture for your skin.",
        isBestSeller: true,
    },
    {
        id: "12",
        name: "Kids Protect & Care",
        category: "Sun",
        price: 699,
        rating: 4.9,
        reviews: 580,
        image: "https://images.unsplash.com/photo-1575410229391-19b4da01cc94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN1bnNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Extra water-resistant formula specially designed for children's delicate skin.",
    },
    {
        id: "5",
        name: "Men Active Energy Gel",
        category: "Men",
        price: 649,
        rating: 4.9,
        reviews: 450,
        image: "https://images.unsplash.com/photo-1663403957210-6cbae7ddf0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwbG90aW9ufGVufDB8fDB8fHww",
        description: "Instant skin revitalization with Vitamin+ complex for a fresh morning look.",
        isBestSeller: true,
    },
    {
        id: "14",
        name: "NIVEA Body Lotion",
        category: "Body Care",
        price: 329,
        rating: 4.7,
        reviews: 1100,
        image: "https://images.unsplash.com/photo-1632221522690-6a0c04bf6f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bml2ZWF8ZW58MHx8MHx8fDA%3D",
        description: "Ocean minerals for a refreshed skin feeling all day long.",
    }
];
