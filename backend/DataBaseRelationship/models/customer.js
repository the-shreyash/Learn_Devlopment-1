const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
    .then(()=>{
        console.log("connection successfull");
    })
    .catch((err)=>{
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item:String,
    Price: Number,

}) ;

const customerSchema = new Schema({
    name: String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order", 
        }
    ]
})


// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("pre middleware");
// }) 

customerSchema.post("findOneAndDelete", async ()=>{
    if(customer.orders.length){
       let result= await Order.deleteMany({_id: {$in:customer.orders}});
       console.log(result);
    }
})

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async ()=>{
    let cust1 = new Customer ({
        name :"shreyahs",
    })

    let order1= await Order.findOne({item:"chips"});
    let order2 = await Order.findOne({item:"chocolate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result =  await cust1.save();
    console.log(result);
}

const addCust = async()=>{
    let newCust = new Customer({
        name: "shreyash"
    });

    let newOrder = new Order({
        item: "pizza",
        Prize: 250
    });
    newCust.orders.push(newOrder);
    await newCust.save();

    console.log("added new customer");
}

const delCust = async()=>{
    let data = await Customer.findByIdAndDelete();
    console.log("deleted item ");
    console.log(data);

}

delCust();

// addCust();




// const addOrder = async ()=>{
//     let res = await Order.insertMany([
//         {item: "somasa",price:12},
//         {item:"chips",price:20},
//         {item:"chocolate",price:40},

//     ])
//     console.log(res);
// };

// addOrder();

addCustomer();
