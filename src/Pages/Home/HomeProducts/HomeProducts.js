import React from 'react';
import './HomeProducts.css';
const productsData = [
    {
        "name": "HP AMD Athlon Laptop",
        "category": "laptop",
        "price": 35000,
        "brand": "HP",
        "display": "15.6\" diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 220 nits, 45% NTSC",
        "memory": "4 GB DDR4 RAM",
        "storage": "1 TB 5400 rpm SATA HDD",
        "os": "Windows 10",
        "battery": "3-cell, 41 Wh Li-ion",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/hp-15s/hp-15s-4-500x500.jpg",
        "desc": "The HP 15s-gr514AU Laptop features AMD Athlon Silver 3050U (2.3 GHz up to 3.2GHz) Processor and 4GB DDR4 RAM. The AMD Athlon Silver 3050U is a mobile processor for thin and light entry-level laptops. This laptop comes with a 1TB 5400rpm SATA Hard Disk. It comes with integrated AMD Radeon Graphics and has a 15.6\" diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 220 nits, 45% NTSC. It runs on Windows 10 Operating System. It features an HP True Vision 720p HD camera with integrated dual array digital microphones. It has dual speakers. It has been designed with 1 SuperSpeed USB Type-C 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling rate; 1 HDMI 1.4b; 1 RJ-45; 1 AC smart pin; 1 headphone/microphone combo. It also has a multi-format SD media card reader. It is equipped with Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo for Wireless connectivity. The whole system is run by a 3-cell, 41 Wh Li-ion battery and it comes with a 45 W Smart AC power adapter. It has 2 years International Limited Warranty (Terms & Conditions Apply As Per HP)"
    },
    {
        "name": "ASUS Vivobook 15",
        "category": "laptop",
        "price": 65000,
        "brand": "ASUS",
        "display": "15.6-inch,FHD (1920 x 1080) 16:9,Anti-glare display,LED Backlit,200nits,NTSC: 45%,Screen-to-body ratio: 84 ％",
        "memory": "4 GB DDR4 RAM",
        "storage": "500GB 5400 rpm SATA HDD",
        "os": "Windows 10",
        "battery": "3-cell, 41 Wh Li-ion",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-e510ma/vivobook-15-e510ma-01-500x500.jpg",
        "desc": "The HP 15s-gr514AU Laptop features AMD Athlon Silver 3050U (2.3 GHz up to 3.2GHz) Processor and 4GB DDR4 RAM. The AMD Athlon Silver 3050U is a mobile processor for thin and light entry-level laptops. This laptop comes with a 1TB 5400rpm SATA Hard Disk. It comes with integrated AMD Radeon Graphics and has a 15.6\" diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 220 nits, 45% NTSC. It runs on Windows 10 Operating System. It features an HP True Vision 720p HD camera with integrated dual array digital microphones. It has dual speakers. It has been designed with 1 SuperSpeed USB Type-C 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling rate; 1 HDMI 1.4b; 1 RJ-45; 1 AC smart pin; 1 headphone/microphone combo. It also has a multi-format SD media card reader. It is equipped with Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo for Wireless connectivity. The whole system is run by a 3-cell, 41 Wh Li-ion battery and it comes with a 45 W Smart AC power adapter. It has 2 years International Limited Warranty (Terms & Conditions Apply As Per HP)"
    },
    {
        "name": "HP Core i3 11th generation",
        "category": "laptop",
        "price": 55000,
        "brand": "HP",
        "display": "15.6-inch,FHD (1920 x 1080) 16:9,Anti-glare display,LED Backlit,200nits,NTSC: 45%,Screen-to-body ratio: 84 ％",
        "memory": "8 GB DDR4 RAM",
        "storage": "500GB 5400 rpm SATA HDD",
        "os": "Windows 10",
        "battery": "3-cell, 41 Wh Li-ion",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/14s-dq2095tu/14s-dq2095tu-500x500.jpg",
        "desc": "The HP 15s-gr514AU Laptop features AMD Athlon Silver 3050U (2.3 GHz up to 3.2GHz) Processor and 4GB DDR4 RAM. The AMD Athlon Silver 3050U is a mobile processor for thin and light entry-level laptops. This laptop comes with a 1TB 5400rpm SATA Hard Disk. It comes with integrated AMD Radeon Graphics and has a 15.6\" diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 220 nits, 45% NTSC. It runs on Windows 10 Operating System. It features an HP True Vision 720p HD camera with integrated dual array digital microphones. It has dual speakers. It has been designed with 1 SuperSpeed USB Type-C 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling rate; 1 HDMI 1.4b; 1 RJ-45; 1 AC smart pin; 1 headphone/microphone combo. It also has a multi-format SD media card reader. It is equipped with Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo for Wireless connectivity. The whole system is run by a 3-cell, 41 Wh Li-ion battery and it comes with a 45 W Smart AC power adapter. It has 2 years International Limited Warranty (Terms & Conditions Apply As Per HP)"
    },
    {
        "name": "Apple macbook air",
        "category": "laptop",
        "price": 85000,
        "brand": "APPLE",
        "display": "15.6-inch,FHD (1920 x 1080) 16:9,Anti-glare display,LED Backlit,200nits,NTSC: 45%,Screen-to-body ratio: 84 ％",
        "memory": "16 GB DDR4 RAM",
        "storage": "500GB 5400 rpm SATA HDD",
        "os": "MACOS",
        "battery": "3-cell, 41 Wh Li-ion",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/MGN73/macbook-mgn73Zp-a-500x500.jpg",
        "desc": "The HP 15s-gr514AU Laptop features AMD Athlon Silver 3050U (2.3 GHz up to 3.2GHz) Processor and 4GB DDR4 RAM. The AMD Athlon Silver 3050U is a mobile processor for thin and light entry-level laptops. This laptop comes with a 1TB 5400rpm SATA Hard Disk. It comes with integrated AMD Radeon Graphics and has a 15.6\" diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 220 nits, 45% NTSC. It runs on Windows 10 Operating System. It features an HP True Vision 720p HD camera with integrated dual array digital microphones. It has dual speakers. It has been designed with 1 SuperSpeed USB Type-C 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling rate; 1 HDMI 1.4b; 1 RJ-45; 1 AC smart pin; 1 headphone/microphone combo. It also has a multi-format SD media card reader. It is equipped with Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo for Wireless connectivity. The whole system is run by a 3-cell, 41 Wh Li-ion battery and it comes with a 45 W Smart AC power adapter. It has 2 years International Limited Warranty (Terms & Conditions Apply As Per HP)"
    },
    {
        "name": "Samsung galaxy tab",
        "category": "tab",
        "price": 25000,
        "brand": "SAMSUNG",
        "display": "10.4\" TFT Capacitive Touchscreen",
        "memory": "4GB RAM",
        "storage": "64GB",
        "os": "ANDROID",
        "battery": "6000mah",
        "img": "https://www.startech.com.bd/image/cache/catalog/tablet/samsung/galaxy-tab-s6-lite/galaxy-tab-s6-lite-1-500x500.jpg",
        "desc": "The Samsung Galaxy Tab S6 Lite provides a lot of premium features. It is powered by a 4×2.3 GHz Cortex-A73 Octa-core processor with Exynos 9611 (10nm) chipset. It runs on Android 10.0; One UI 2 operating system. The tab has a 10.4 inch TFT display having a screen resolution of 1200 x 2000 pixels, with a 5:3 aspect ratio, and a density of 224 PPI. The tablet comes with an 8 MP Single primary camera with an LED flash and a 5 MP single selfie camera. You can record videos at 1080p resolution and @30fps. The Samsung Galaxy Tab S6 Lite has 4GB RAM and 64GB of storage options. You can expand your storage space anytime up to 1TB with a microSD card. Connectivity options include 4G LTE, Wi-Fi 802.11 a/b/g/n/ac, dual-band, Bluetooth 5.0, USB Type-C, Wi-Fi Direct, Mobile hotspot, etc. The Samsung Galaxy Tab S6 Lite comes with a Non-removable Li-Po 7040 mAh battery. The long-lasting battery lets you stream for up to 13 hours on a single charge. The fast-charging USB-C port allows you to quickly get back to where you left off when you need to recharge. Full PC-like productivity in a slim tablet with Samsung DeX. Simply tapping the DeX button on the Quick panel for features that let you use your tablet just like a PC. Open several windows at once, drag and drop a photo into an email, press and hold for a few seconds for more functions. it has no warranty."
    },
    {
        "name": "Lenovo Tab M8",
        "category": "tab",
        "price": 15000,
        "brand": "LENOVO",
        "display": `"8.4" TFT Capacitive Touchscreen"`,
        "memory": "2GB RAM",
        "storage": "32GB",
        "os": "ANDROID",
        "battery": "5000mah Li-ion",
        "img": "https://www.startech.com.bd/image/cache/catalog/tablet-pc/lenovo/tab-m8-01-500x500.jpg",
        "desc": "The Samsung Galaxy Tab S6 Lite provides a lot of premium features. It is powered by a 4*2.3 GHz Cortex-A73 Octa-core processor with Exynos 9611 (10nm) chipset. It runs on Android 10.0; One UI 2 operating system. The tab has a 10.4 inch TFT display having a screen resolution of 1200 x 2000 pixels, with a 5:3 aspect ratio, and a density of 224 PPI. The tablet comes with an 8 MP Single primary camera with an LED flash and a 5 MP single selfie camera. You can record videos at 1080p resolution and @30fps. The Samsung Galaxy Tab S6 Lite has 4GB RAM and 64GB of storage options. You can expand your storage space anytime up to 1TB with a microSD card. Connectivity options include 4G LTE, Wi-Fi 802.11 a/b/g/n/ac, dual-band, Bluetooth 5.0, USB Type-C, Wi-Fi Direct, Mobile hotspot, etc. The Samsung Galaxy Tab S6 Lite comes with a Non-removable Li-Po 7040 mAh battery. The long-lasting battery lets you stream for up to 13 hours on a single charge. The fast-charging USB-C port allows you to quickly get back to where you left off when you need to recharge. Full PC-like productivity in a slim tablet with Samsung DeX. Simply tapping the DeX button on the Quick panel for features that let you use your tablet just like a PC. Open several windows at once, drag and drop a photo into an email, press and hold for a few seconds for more functions. it has no warranty."
    }
]

const HomeProducts = () => {


    return (
        <div className='bg-light'>
            <h1 className='py-4'>OUR PRODUCTS</h1>
            <div className="container">

                <div className="row">
                    {
                        productsData.map(product => <div className='col-12 col-md-6 col-lg-4'>
                            <div class="container page-wrapper ">
                                <div class="page-inner">
                                    <div class="row mb-5">
                                        <div class="el-wrapper shadow-sm" style={{ borderRadius: '15px 15px 0px 0px' }}>
                                            <div class="box-up">
                                                <img class="img" src={product.img} width="60%" style={{ maxHeight: '300px' }} alt="Product img" />
                                                <div class="img-info">
                                                    <div class="info-inner">
                                                        <span class="p-name">{product.name}</span>
                                                        <span class="p-company"></span>
                                                    </div>
                                                    <div class="a-size">Available Products : <span class="size">All Products Available</span></div>
                                                </div>
                                            </div>

                                            <div class="box-down">
                                                <div class="h-bg">
                                                    <div class="h-bg-inner"></div>
                                                </div>

                                                <a class="cart" href="home">
                                                    <span class="price">$ {product.price}</span>
                                                    <span class="add-to-cart">
                                                        <span class="txt btn btn-danger">Add in cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;