var initialState = [
    {
        id : 1,
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        name : 'Iphone 7 Plus',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10, 
        rating: 4,
    },
    {
        id : 2,
        image: 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-16-300x300.jpg',
        name : 'Samsum galaxy S7',
        description : 'Sản phẩm do Samsum sản xuất',
        price : 400,
        inventory : 15, 
        rating: 3,
    },
    {
        id : 3,
        image: 'https://didongthongminh.vn/upload_images/2018/08/oppo-a3s-red-400x460.png',
        name : 'Oppo F1s',
        description : 'Sản phẩm do China sản xuất',
        price : 450,
        inventory : 5, 
        rating: 5,
    }
];
const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state]
    }
}

export default products;