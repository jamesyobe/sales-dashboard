
import * as Leaflet from 'leaflet';
import { Product } from './products.interface';
export class ProductHelpers {
	static  products: Product[] = [
        { id: 1, name: "Apple iPhone 13 Pro", description: "5G smartphone with Pro camera system", unitPrice: 999.00, unitsSold: 500, category: "Electronics" },
        { id: 2, name: "Samsung Galaxy S21 Ultra", description: "5G smartphone with 108MP camera", unitPrice: 1199.99, unitsSold: 300, category: "Electronics" },
        { id: 3, name: "Sony WH-1000XM4 Wireless Headphones", description: "Noise-canceling Bluetooth headphones", unitPrice: 349.99, unitsSold: 700, category: "Electronics" },
        { id: 4, name: "Dell XPS 13 Laptop", description: "13-inch laptop with 11th Gen Intel Core processor", unitPrice: 1299.99, unitsSold: 250, category: "Electronics" },
        { id: 5, name: "Apple AirPods Pro", description: "Active Noise Cancellation for immersive sound", unitPrice: 249.00, unitsSold: 600, category: "Electronics" },
        { id: 6, name: "Nintendo Switch", description: "Hybrid gaming console for home and on-the-go", unitPrice: 299.99, unitsSold: 450, category: "Electronics" },
        { id: 7, name: "Sony PlayStation 5", description: "Next-gen gaming console with 4K graphics", unitPrice: 499.99, unitsSold: 200, category: "Electronics" },
        { id: 8, name: "Microsoft Surface Pro 7", description: "Versatile 2-in-1 laptop and tablet", unitPrice: 899.00, unitsSold: 550, category: "Electronics" },
        { id: 9, name: "GoPro HERO10 Black", description: "Action camera with 5.3K video and 23MP photos", unitPrice: 499.99, unitsSold: 400, category: "Electronics" },
        { id: 10, name: "Amazon Echo Dot (4th Gen)", description: "Smart speaker with Alexa voice control", unitPrice: 49.99, unitsSold: 650, category: "Electronics" },
        { id: 11, name: "Bose QuietComfort 45 Headphones", description: "Noise-canceling headphones with Aware mode", unitPrice: 329.00, unitsSold: 350, category: "Electronics" },
        { id: 12, name: "LG OLED C1 4K TV", description: "55-inch OLED TV with Dolby Vision IQ and AI ThinQ", unitPrice: 1599.99, unitsSold: 150, category: "Electronics" },
        { id: 13, name: "Fitbit Charge 5 Fitness Tracker", description: "Advanced health and fitness tracker with GPS", unitPrice: 179.95, unitsSold: 750, category: "Electronics" },
        { id: 14, name: "Canon EOS R5 Mirrorless Camera", description: "8K video recording and 45MP full-frame sensor", unitPrice: 3899.00, unitsSold: 500, category: "Electronics" },
        { id: 15, name: "DJI Mavic Air 2 Drone", description: "Foldable drone with 4K camera and 34-minute flight time", unitPrice: 799.00, unitsSold: 300, category: "Electronics" },
        { id: 16, name: "Lenovo ThinkPad X1 Carbon", description: "14-inch business laptop with Intel Core i7 processor", unitPrice: 1499.00, unitsSold: 650, category: "Electronics" },
        { id: 17, name: "Sonos One (Gen 2) Smart Speaker", description: "Voice-controlled speaker with rich sound", unitPrice: 199.00, unitsSold: 450, category: "Electronics" },
        { id: 18, name: "NVIDIA GeForce RTX 3080 Graphics Card", description: "Powerful GPU for high-end gaming and rendering", unitPrice: 699.99, unitsSold: 550, category: "Electronics" },
        { id: 19, name: "Samsung Odyssey G7 Gaming Monitor", description: "27-inch QLED monitor with 240Hz refresh rate", unitPrice: 699.99, unitsSold: 250, category: "Electronics" },
        { id: 20, name: "Apple MacBook Pro 16-inch", description: "16-inch laptop with M1 Pro chip and ProMotion display", unitPrice: 2399.00, unitsSold: 400, category: "Electronics" }
        ];


  
}
export default ProductHelpers;