import RawScallops from "../assets/raw-scallops.png";
import SpringRoll from "../assets/spring-roll.png";
import FrenchOnion from "../assets/french-onion.png";
import TomatoBruschetta from "../assets/tomato-bruschetta.png";
import GrilledSalmon from "../assets/grilled-salmon.png";
import RoastBeef from "../assets/roast-beef.png";
import Marrkesh from "../assets/marrkesh.png";
import SpicyVegan from "../assets/spicy-vegan.png";
import ApplePie from "../assets/apple-pie.jpg";
import LemonMeringue from "../assets/lemon-meringue.png";

const foodDishes = [
	{
		type: "Starters",
		dishes: [
			{
				name: "Raw Scallops from Erquy",
				price: 40,
				description: "Candied Jerusalem artichokes, truffle",
				image: RawScallops,
			},
			{
				name: "Spring Roll",
				price: 20,
				description: "Candied Jerusalem artichokes, truffle",
				image: SpringRoll,
			},
			{
				name: "French Onion Soup",
				price: 25,
				description: "Candied Jerusalem artichokes, truffle",
				image: FrenchOnion,
			},
			{
				name: "Tomato Bruschetta",
				price: 30,
				description: "Candied Jerusalem artichokes, truffle",
				image: TomatoBruschetta,
			},
		],
	},
	{
		type: "Main Dish",
		dishes: [
			{
				name: "Grilled Salmon with Dil Sauce",
				price: 40,
				description: "Candied Jerusalem artichokes, truffle",
				image: GrilledSalmon,
			},
			{
				name: "Roast Beef with Vegetable",
				price: 20,
				description: "Candied Jerusalem artichokes, truffle",
				image: RoastBeef,
			},
			{
				name: "Marrkesh Vegetetarian Curruy",
				price: 25,
				description: "Candied Jerusalem artichokes, truffle",
				image: Marrkesh,
			},
			{
				name: "Spicy Vegan Potato Curry",
				price: 30,
				description: "Candied Jerusalem artichokes, truffle",
				image: SpicyVegan,
			},
		],
	},
	{
		type: "Dessert",
		dishes: [
			{
				name: "Apple Pie with Cream",
				price: 40,
				description: "Candied Jerusalem artichokes, truffle",
				image: ApplePie,
			},
			{
				name: "Lemon Meringue Pie",
				price: 20,
				description: "Candied Jerusalem artichokes, truffle",
				image: LemonMeringue,
			},
		],
	},
];

export default foodDishes;
