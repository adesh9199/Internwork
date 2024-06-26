import React, { useState } from 'react';

function UseStateHook() {
  // to increment, decrement, and reset
  const initialVal = 0;
  const [val, setVal] = useState(initialVal);
//    we cannot do like that so we use prev
//   const increaseByFive=()=>{
//     for(let i=0 ; i<5; i++){
//         setVal(val+1);
//     }
//   }


// by prev
const increaseByFive=()=>{
    for(let i=0 ; i<5; i++){
        setVal(prevval=>prevval+1);
    }
  }

//   change in object

  const [name, setName] = useState({ firstName: "", lastName: "" });

//    change in Array
const [items, setItem]=useState([]);

const groceryItems = [
    "Apple", "Banana", "Orange", "Tomato", "Potato", "Onion", "Carrot", "Cucumber", "Lettuce", "Spinach", "Broccoli", "Cauliflower", "Bell Pepper", "Eggplant", "Mushroom", "Garlic", "Ginger", "Lemon", "Lime", "Avocado", 
    "Pineapple", "Watermelon", "Strawberry", "Blueberry", "Raspberry", "Blackberry", "Grape", "Mango", "Kiwi", "Papaya", "Pear", "Peach", "Apricot", "Cherry", "Coconut", "Fig", "Grapefruit", "Guava", "Lychee", "Melon", 
    "Passionfruit", "Plum", "Tangerine", "Pomegranate", "Cranberry", "Raspberry", "Gooseberry", "Kiwifruit", "Clementine", "Nectarine", "Persimmon", "Quince", "Starfruit", "Ugli Fruit", "Ackee", "Bael Fruit", "Chayote", 
    "Durian", "Elderberry", "Feijoa", "Huckleberry", "Jujube", "Kumquat", "Longan", "Mangosteen", "Nance", "Olive", "Plantain", "Rambutan", "Sapodilla", "Sapote", "Soursop", "Tamarillo", "Yuzu", "Zucchini", "Artichoke", 
    "Asparagus", "Beet", "Bok Choy", "Brussels Sprout", "Celery", "Corn", "Green Bean", "Kale", "Leek", "Okra", "Peas", "Pumpkin", "Radish", "Rhubarb", "Squash", "Sweet Potato", "Turnip", "Watercress", "Yams", "Arugula", 
    "Cabbage", "Collard Greens", "Endive", "Fennel", "Mustard Greens", "Parsnip", "Rutabaga", "Swiss Chard", "Turnip Greens", "Anchovy", "Barracuda", "Catfish", "Cod", "Eel", "Flounder", "Haddock", "Halibut", "Herring", 
    "Mackerel", "Mahi Mahi", "Monkfish", "Mullet", "Perch", "Pike", "Pollock", "Salmon", "Sardine", "Skate", "Snapper", "Sole", "Swordfish", "Tilapia", "Trout", "Tuna", "Turbot", "Walleye", "Bass", "Carp", "Catfish", 
    "Sturgeon", "Whitefish", "Bluefish", "Drum", "Grouper", "Lingcod", "Opah", "Orange Roughy", "Pomfret", "Rockfish", "Seabass", "Tilefish", "Wahoo", "Butter", "Cheese", "Cream", "Milk", "Yogurt", "Eggs", "Mayonnaise", 
    "Oil", "Vinegar", "Bread", "Baguette", "Croissant", "Brioche", "Ciabatta", "Focaccia", "Pita", "Sourdough", "Rye Bread", "Whole Wheat Bread", "White Bread", "Rolls", "Bagel", "English Muffin", "Pancakes", "Waffles", 
    "French Toast", "Cereal", "Oatmeal", "Granola", "Muesli", "Rice", "Pasta", "Noodles", "Spaghetti", "Linguine", "Fettuccine", "Penne", "Rigatoni", "Farfalle", "Macaroni", "Lasagna", "Tortellini", "Ravioli", "Gnocchi", 
    "Quinoa", "Couscous", "Bulgur", "Barley", "Lentils", "Chickpeas", "Kidney Beans", "Black Beans", "Pinto Beans", "Cannellini Beans", "Lima Beans", "Navy Beans", "Green Beans", "Snap Peas", "Edamame", "Tofu", "Tempeh", 
    "Seitan", "Falafel", "Hummus", "Tahini", "Pita Chips", "Crackers", "Pretzels", "Chips", "Popcorn", "Tortilla Chips", "Salsa", "Guacamole", "Dips", "Sausage", "Pepperoni", "Salami", "Bacon", "Ham", "Prosciutto", 
    "Jerky", "Turkey", "Chicken", "Duck", "Goose", "Quail", "Cornish Hen", "Pheasant", "Ostrich", "Lamb", "Veal", "Bison", "Venison", "Rabbit", "Kangaroo", "Elk", "Boar", "Bear", "Turtle", "Alligator", "Crocodile", 
    "Frog Legs", "Escargot", "Crickets", "Mealworms", "Grubs", "Crayfish", "Shrimp", "Lobster", "Crab", "Crawfish", "Clams", "Mussels", "Oysters", "Squid"
  ];
  
  const addItem = () => {
    const i = Math.floor(Math.random() * 100);
    setItem([
        ...items,
        {
            id: items.length,
            value: groceryItems[i]
        }
    ]);
}



  return (
    <div className="mt-5 ml-5  left-5 w-[30vw] h-auto bg-slate-300 p-6 rounded-lg flex flex-col items-center justify-center shadow-lg">
      <h1 className="text-center text-xl font-bold mb-4">USESTATE</h1>
      <h3 className="text-center mb-4">Value = {val}</h3>
      <div className="flex justify-between gap-2 mb-4 w-full">
        <button
          onClick={() => setVal(initialVal)}
          className="bg-blue-500 text-white px-4 py-1 rounded flex-1 hover:bg-blue-600 active:bg-blue-700"
        >
          Reset
        </button>
        <button
          onClick={() => setVal(val + 1)}
          className="bg-green-500 text-white px-4 py-1 rounded flex-1 hover:bg-green-600 active:bg-green-700"
        >
          Increase
        </button>
        <button
          onClick={() => val > 0 && setVal(val - 1)}
          className="bg-yellow-500 text-white px-4 py-1 rounded flex-1 hover:bg-yellow-600 active:bg-yellow-700"
        >
          Decrease
        </button>
        <button
          onClick={increaseByFive}
          className="bg-purple-500 text-white px-4 py-1 rounded flex-1 hover:bg-purple-600 active:bg-purple-700"
        >
          Increase by 5
        </button>
      </div>
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="flex justify-between gap-2 mb-2">
          <input
            type="text"
            placeholder="First Name"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            //  Why we use ...name , it is a spread operator(...) it store prev value if we dont use it then if we write firstname then it will update but when we click on another or out of thatinput field it will disapear to know better emove it an try
            className="p-2 border rounded w-1/2 hover:shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            className="p-2 border rounded w-1/2 hover:shadow-md"
          />
        </div>
        <h1 className="text-center mt-4">
          Name is {name.firstName} {name.lastName}
          {/* <h2>{JSON.stringify(name)}</h2> */}
          {/* to see object */}
        </h1>
      </div>
    
      <div className="w-full mt-3 bg-slate-400 p-4 rounded-lg mb-4">
  <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Grocery Item</button>
  <ol type="1" className="mt-4">
    {items.map((item, index) => (
      <li key={item.id}>
        {index + 1}. {item.value}
      </li>
    ))}
  </ol>
</div>

    </div>
  );
}

export default UseStateHook;
