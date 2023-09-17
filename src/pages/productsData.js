// import images 
import bags from '../images/Bags/bags.jpg'
import bagsSecond from '../images/Bags/bags-2.jpg'
import bagsThird from '../images/Bags/bags-3.jpg'
import shades from '../images/shades/shades.jpg'
import hp from '../images/hp envy/hp-envy.jpg'
import hpSecond from '../images/hp envy/hp-2.webp'
import hpThird from '../images/hp envy/hp-3.jpg'
import ps5 from '../images/ps5/ps5-1.jpg'
import ps4 from '../images/ps4/ps4-1.jpg'
import ps4Two from '../images/ps4/ps4-2.jpg'
import ps4Three from '../images/ps4/ps4-3.jpg'
import generator from '../images/generator/generator.jpg'
import generatorSecond from '../images/generator/generator-2.jpg'
import generatorThird from '../images/generator/generator-3.jpg'
import nike from '../images/Nike/nike-sneakers-1.jpg'
import nikeTwo from '../images/Nike/nike-sneakers.jpg'
import nikeThree from '../images/Nike/nike-sneakers-3.jpg'
import lg from '../images/lg tv set/1 (1).jpg'
import lgTwo from '../images/lg tv set/4.jpg'
import lgThree from '../images/lg tv set/5.jpg'
import iphone13 from '../images/iphone 13 pro max/1.jpg'
import cap from '../images/caps/caps.jpg'
import capTwo from '../images/caps/caps - Copy.jpg'
import capThree from '../images/caps/caps - Copy (2).jpg'


    const salesProducts = [
        {
            name: 'Portable Plaid Handbag - Black',
            image: [bags, bagsSecond, bagsThird],
            brand: 'bags',
            description: "This portable plaid PU leather handbag signifies comfort in every word. Its portable and easy to carry around.It complements one's outfit and could be used to grace any occasion.Rock it and you will be glad you did",
            price: `₦${5000}`
        },
        {
            name: 'TechBro Portable Cap - Unisex',
            image: [cap, capTwo, capThree],
            brand: 'cap',
            description: `Experience the Techbro Cap: Where sleek design meets
             cutting-edge technology. Stay connected and stylish with integrated
             features, a must-have accessory for modern tech enthusiasts.`,
            price: `₦${3000}`
        },
        {
            name: "Men's Ultral Clear Rimless Sunglasses",
            image: [shades],
            brand: 'shades',
            description: `This Sunglasses is a form of protective 
            eyewear designed primarily to prevent bright light and high-energy
            visible light from damaging and discomforting the eyes. It is a well-fitting
             pair of Sunglasses with a trendy look and made of high-grade Wool & acrylic materials.
              It is a great fashion accessory and can be used by both sexes, male or female.`,
            price:`₦${10000}`
        },
        {
            name: 'Haier Thermocool 2.5kVA/2.0kW Generator',
            image: [generator, generatorSecond, generatorThird],
            brand: 'Haier Thermocool',
            description: `This powerful Haier Thermocool 2.5KVA 2KW Single phase
             petrol generator Bobo 2800ES is the generator for you. It is portable,
             fuel efficient and built with 100% copper coil so you know you are getting
              the best of the best. The automatic voltage regulator changes voltage automatically
               to maintain the engine’s optimal performance with low noise.`,
            price: `₦${300000}`
        },
        {
            name: 'Hp Envy 13 11th Gen Intel Core I5(8GB,256GB SSD)',
            image: [hp, hpSecond, hpThird],
            brand: 'hp',
            description: `Featuring cutting-edge technology, the HP Envy Series is a blend of top-notch design and amazing functionality.
             With Intel Core Processors and amazing Screen resolutions, the HP Envy Series is the perfect entertainment device.
            View searing graphics in high definition.Movies. Music. Games.`,
            price: `₦${700000}`
        },
        {
            name: 'Sony PlayStation 5 (PS5) Console',
            image: [ps5],
            brand: 'Sony',
            description: `Explore uncharted virtual territories and slay dragons
             with this sleek Sony PlayStation 5 gaming console. The 825GB SSD allows
              ultra-fast load times, while 3-D audio output produces crisp acoustics.
              This Sony PlayStation 5 gaming console supports haptic feedback for
              effortless communication in multiplayer setups, and adaptive triggers
              allow immersive gameplay.`,
            price: `₦${750000}`
        },
        {
            name: 'Sony Computer Entertainment Playstation 4',
            image: [ps4, ps4Two, ps4Three],
            brand: 'Sony Computer Entertainment',
            description: `The PlayStation 4 system is smart enough to learn about your preferences,
            it is smart to detect your likes and dislikes, allowing you to discover pre-loaded content
            and ready to go on your console in your favourite game genres.`,
            price:`₦${250000}`
        },
        {
            name: 'LG 32 Inches LED TV (LP500) - Black + 2 Years Warranty',
            image: [lg, lgTwo, lgThree],
            brand: 'LG',
            description: `Experience the next level of entertainment with LG's 
            cutting-edge flat-screen TV. Dive into breathtaking 4K visuals, cinematic
            sound, and intuitive smart features that transform your living room into a
            multimedia hub. Elevate your viewing with LG and embrace the future of home
            entertainment.`,
            price: `₦${220000}`
        },
        {
            name: 'Apple IPhone 13 Pro Max 6.7(6GB RAM + 128GB ROM)',
            image: [iphone13],
            brand: 'Apple',
            description: `Experience the iPhone 13 Pro, a pinnacle of mobile innovation. 
            Redefine excellence with ProMotion display, A15 Bionic chip, Pro camera, and 5G.
            Elevate creativity and productivity through ProRAW, cinematic video, and ProRes.
            Enjoy Super Retina XDR colors, all-day battery, durability, water resistance, and fast 5G connectivity.`,
            price: 520000
        },
        {
            name: 'Nike Air Max 270 NSW Men',
            image: [nike, nikeTwo, nikeThree],
            brand: 'Nike',
            description: `Revolutionary Air technology first made its way 
            into Nike footwear in 1978.In 1987, the Air Max 1 debuted with visible
            Air technology in its heel, allowing fans more than just the feel of Air
            cushioning—suddenly they could see it.Since then, next-generation Air Max shoes
            have become a hit with athletes and collectors by offering striking colour
            combinations and reliable, lightweight cushioning.`,
            price: 50000
        }
    ]
    
    export default salesProducts