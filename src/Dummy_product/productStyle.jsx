const productStyle = [
    {
        id: 1,
        name: "Bournvita",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://afroeurohub.com/wp-content/uploads/2024/11/7622210492081_3.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTZ5C55UoOnSQBW3sxrOKZE1kC4g5RtYYFg&s",
            "https://sugermint.com/wp-content/uploads/2021/04/Cadbury-Bournvita-Health-Drink.jpg"
        ]
    },
    {
        id: 2,
        name: "Milo",
        price: 600,
        description: "Milo is a nutritional, cocoa-malt flavored drink mix made by Nestlé, consisting primarily of malt, milk, and cocoa. It is fortified with vitamins and minerals like iron and calcium, designed to provide energy for children and support their growth and development. It is available globally in various forms, such as a powder to be mixed with water or milk, and as a ready-to-drink beverage",
        imageUrl: [
            "https://m.media-amazon.com/images/I/71I-VXb5nJL._SL1500_.jpg",
            "https://manilaplus.com/cdn/shop/files/NestleMilo300g.jpg?v=1735025404&width=1946",
            "https://images.aws.nestle.recipes/resized/0dcf7431304afde63ed32b61245215c5_milo_frio_caliente_1200_628.png"
        ]
    },
    {
        id: 3,
        name: "Cow meat",
        instock:"false",
        price: 500,
        description: "Cow meat, or beef, is a red meat from cattle, with characteristics that vary based on the cut, aging, and the animal's age and diet.",
        imageUrl: [
            "https://img.freepik.com/free-photo/fresh-rib-eye-steak-food-photography-recipe-idea_53876-146572.jpg?semt=ais_hybrid&w=740&q=80",
            "https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TUrh_9QAs_2l7riarSHaOOdnh4k6XSpO6GpclnAHEMXjtpY5kivPulqt8umk9-z8mtk&usqp=CAU"
        ]
    },
    {
        id: 4,
        name: "laptop",
        price: 500,
        description: "A laptop is a portable, all-in-one personal computer with a built-in screen, keyboard, touchpad, and rechargeable battery, designed to be used in various locations. It combines the functionality of a desktop computer with the mobility to be used on the go, making it a versatile tool for work, entertainment, and communication. Laptops typically have a clamshell design, are powered by a battery, and can connect to the internet via Wi-Fi or other options. ",
        imageUrl: [
            "https://www.livemint.com/lm-img/img/2023/07/24/1600x900/2-0-322669020-Apple-MacBook-Air-13-copy-0_1680436414973_1690175424305.jpg",
            "https://cdn.mos.cms.futurecdn.net/jF57bYgM926UdTeVbCJVvS.png",
            "https://image.made-in-china.com/2f0j00sBKVOlSqNJgA/14-Inch-15-6-Inch-Portable-Ultra-Slim-Laptop-Computerwin10-Win11-Notebook-Computer-128GB-256GB-512GB-1024GB-ODM-Gaming-Laptop-Student-Laptop.webp"
        ]
    },
    {
        id: 5,
        name: "Phone",
        price: 500,
        description: "A cell phone is a portable electronic device used for communication through voice calls, text messages, and internet access.",
        imageUrl: [
            "https://creative-it.ie/wp-content/uploads/2025/04/How-to-Choose-the-Right-Smartphone.jpg",
            "https://hips.hearstapps.com/hmg-prod/images/2-67cef69cd806e.jpg?crop=0.498xw:1.00xh;0.226xw,0&resize=640:*",
            "https://image.made-in-china.com/202f0j00cqWMhjZJPLby/W-O-X56-6-75-Inch-Global-Version-Android-12-Mobile-Phone-13MP-Camera-Big-Battery-Cellphone.webp"
        ]
    },
    {
        id: 6,
        name: "pen",
        price: 500,
        description: "A pen is a writing instrument that applies ink to a surface, typically paper, for writing or drawing. It consists of a barrel holding an ink reservoir and a writing tip, such as a ballpoint, nib, or felt tip. Pens can be used for practical tasks like signing documents or for more creative purposes, and different types like fountain pens, ballpoint pens, and gel pens offer different writing experiences.",
        imageUrl: [
            "https://rukminim2.flixcart.com/image/480/640/xif0q/pen/o/o/y/ink-line-ball-pen-flair-original-imagqz3whzpdzmhf.jpeg?q=90",
            "https://cdn11.bigcommerce.com/s-caae1tt33v/images/stencil/1280x1280/products/5084/11085/PilotMetropolitan-Fine-lineup-web__73331.1733523514.jpg?c=1",
            "https://statmo.in/wp-content/uploads/2016/12/Flair-Glitter-Gel-Pens-Pack-Of-1.jpg"
        ]
    },
    {
        id: 7,
        name: "book",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://enchantedbookpromotions.com/wp-content/uploads/2025/04/book-metadata.jpg",
            "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
            "https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg",
        ]
    },
    {
        id: 8,
        name: "school bag",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://africanthings.org/wp-content/uploads/2024/10/custom-branded-corporate-gift-school-bag-backpack-2-1.png",
            "https://ae01.alicdn.com/kf/S36bcaa61e5ef4d9b91536c6d8431081f9.jpg",
            "https://i.ebayimg.com/images/g/72cAAOSwWSBioSzR/s-l1600.jpg"
        ]
    },
    {
        id: 9,
        name: " Man handbag",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://assets.hermes.com/is/image/hermesproduct/085671CK1C_side_wm_4?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=400&hei=400",
            "https://img.kwcdn.com/product/fancy/c87383c7-889f-44e1-9dc8-d6ad182c99b6.jpg",
            "https://assets.hermes.com/is/image/hermesproduct/085671CK1C_side_wm_4?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=400&hei=400"
        ]
    },
    {
        id: 10,
        name: "woman handbag",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://image.made-in-china.com/202f0j00qCWYgnMkZioG/Wholesale-Handbag-Small-Shoulder-Bag-Purses-Ladies-Luxury-Bags-Women-Handbags-for-Lady-Wholesales-Distributor.webp",
            "https://sc04.alicdn.com/kf/H98ffcf576687448c93b00a54b11200c7R.jpg",
            "https://d21d281c1yd2en.cloudfront.net/media/product_images/6085a837-778d-4e08-9862-12f68a32ba09.jpeg"
        ]
    },
    {
        id: 11,
        name: "Mouse",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://m.media-amazon.com/images/I/61M9TBM9HaL._AC_SL1500_.jpg",
            "https://us.v-cdn.net/6036147/uploads/67SAKXLFNL4I/l-10-8-1-1200x675.jpg",
            "https://img.drz.lazcdn.com/static/lk/p/012f1c7aba3f8fe6fa55fd8e12bc5a38.jpg_720x720q80.jpg"
        ]
    },
    {
        id: 12,
        name: "Freezer",
        price: 500,
        description: "Bournvita is a chocolate malt-based health drink mix, manufactured by Cadbury, that contains essential vitamins, minerals like iron and zinc, and is promoted to support physical and mental growth and development in both children and adults. It is typically mixed with milk to create a nutritious beverage that is often enjoyed for its chocolate flavor",
        imageUrl: [
            "https://myscanfrost.com/product/SFL111%20%20Ecofresh2.png",
            "https://pricesnow.com.ng/wp-content/uploads/2018/12/1-2284.jpg.webp",
            "https://www.supermart.ng/cdn/shop/files/dbk1747.jpg?v=1688837215"
        ]
    }
]
export default productStyle;