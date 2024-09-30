import { IProductInput, IUser, IUserInput } from "../@types/@types";

// Example data
const users = [
  {
    isAdmin: true,
    name: {
      first: "Naomi",
      middle: "",
      last: "Laurence",
    },
    phone: "050-8123012",
    email: "NaomiLaurence@gmail.com",
    password: "Abc!123Abc",
    address: {
      state: "IL",
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },

  },
  {
    name: {
      first: "Moshe",
      middle: "",
      last: "Doe",
    },
    phone: "050-8123012",
    email: "moshettt@gmail.com",
    password: "Abc!123Abc",
    address: {
      state: "IL",
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },
    // Optional field
    // isBusiness: true,
  },
  {
    name: {
      first: "Yossi",
      middle: "",
      last: "Cohen",
    },
    phone: "050-9123012",
    email: "yosi@gmail.com",
    password: "Abc!123Abc",
    address: {
      state: "IL",
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },
    // Optional field
    // isBusiness: true,
  },
];

const products: IProductInput[] = [
  {
    title: "Cozy Beige Coat",
    subtitle: "Warm and cozy beige winter coat for kids",
    description: "Perfect for keeping your child warm during cold days.\nSoft material with a comfortable fit for daily wear.",
    image: {
      url: "http://localhost:8080/uploads/1.png",
    },
    alt: "image of a beige kids coat",
    variants: [
      { size: "S", quantity: 10, price: 450 },
      { size: "M", quantity: 15, price: 460 },
      { size: "L", quantity: 20, price: 470 },
    ],
  },
  {
    title: "Charming Brown Coat",
    subtitle: "Stylish brown coat for winter adventures",
    description: "Fashion-forward coat with excellent insulation.\nIdeal for outdoor activities while maintaining a chic look.",
    image: {
      url: "http://localhost:8080/uploads/2.png",
    },
    alt: "image of a brown kids coat",
    variants: [
      { size: "S", quantity: 8, price: 480 },
      { size: "M", quantity: 12, price: 490 },
      { size: "L", quantity: 18, price: 500 },
    ],
  },
  {
    title: "Classic Winter Coat",
    subtitle: "Classic design winter coat for children",
    description: "Traditional design with modern warmth and comfort.\nGreat for everyday winter use.",
    image: {
      url: "http://localhost:8080/uploads/3.png",
    },
    alt: "image of a classic winter kids coat",
    variants: [
      { size: "S", quantity: 5, price: 520 },
      { size: "M", quantity: 10, price: 530 },
      { size: "L", quantity: 15, price: 540 },
    ],
  },
];
export { products, users };
