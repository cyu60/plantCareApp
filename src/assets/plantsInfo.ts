import { PlantTypesEnum } from "../types/plant";

const plantsRaw = [
  {
    "Plant Name": "Pothos",
    Description: "Large eye shaped leaves",
    Sunlight: "Low light",
    Water: "1x every 1-2 weeks",
    "Water Int": 10,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Snake Plant",
    Description: "Tall plant with sword-like fronds",
    Sunlight: "Bright indirect",
    Water: "1x every 2 weeks",
    "Water Int": 14,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Zebra Plant",
    Description: "Spiky green upward growing leaves with white bands",
    Sunlight: "Bright indirect",
    Water: "1x every 2-3 weeks",
    "Water Int": 17,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Air Plants",
    Description: "Class of plants that require no soil",
    Sunlight: "Moderate to bright shade",
    Water: "None",
    "Water Int": -1,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Heartleaf Philodendron",
    Description: "Trailing limbs with heart shaped leaves",
    Sunlight: "Indirect light",
    Water: "1x a week",
    "Water Int": 7,
    Category: "Moderate Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Aloe Vera",
    Description: "Spiky plant that can be used topically",
    Sunlight: "Indirect light",
    Water: "Infrequently",
    "Water Int": 14,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Rubber Plant",
    Description: "Large deep green leaves that can appear rubbery",
    Sunlight: "Bright indirect",
    Water: "1x every 2-3 weeks",
    "Water Int": 17,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Hedgehog Cactus",
    Description: "Short cactus topped with a flower",
    Sunlight: "Bright indirect",
    Water: "Infrequently",
    "Water Int": 14,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Basil Plant",
    Description: "Petit plant best known for its aroma",
    Sunlight: "Bright direct ",
    Water: "1x a week",
    "Water Int": 7,
    Category: "Moderate Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Swiss Cheese Plant",
    Description: "Large leaves with holes like swiss cheese",
    Sunlight: "Bright indirect ",
    Water: "1x every 1-2 weeks",
    "Water Int": 10,
    Category: "Low Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Mini Monstera",
    Description: "Rapid growing plant that can reach over 2 feet tall",
    Sunlight: "Bright indirect",
    Water: "1-2x a week",
    "Water Int": 4,
    Category: "Moderate Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Dragon Scale Plant",
    Description: "Rich colored emerald leaves",
    Sunlight: "Bright indirect",
    Water: "2-3x a week",
    "Water Int": 3,
    Category: "High Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Fiddle Leaf Fig",
    Description: "Elegant, violin-shaped leaves create little trees",
    Sunlight: "Bright indirect",
    Water: "1x every 7-10 days",
    "Water Int": 9,
    Category: "Moderate Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
  {
    "Plant Name": "Peace Lily",
    Description: "Large dark green leaves featuring trumpet-like flowers",
    Sunlight: "Bright indirect",
    Water: "1x a week or when leaves droop",
    "Water Int": 7,
    Category: "Moderate Maintenance",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyYszKySst-qKVpolPJHgMVSzr80I80dU_zy-e4c&s",
  },
];
const categoryMap =
  {
    "Low Maintenance": PlantTypesEnum.Enum.LOW_MAINTENANCE,
    "Moderate Maintenance": PlantTypesEnum.Enum.MID_MAINTENANCE,
    "High Maintenance": PlantTypesEnum.Enum.HIGH_MAINTENANCE,
  } || null;

export const findCategory = (category: string) => {
  switch (category) {
    case "Low Maintenance":
      return PlantTypesEnum.Enum.LOW_MAINTENANCE;
    case "Moderate Maintenance":
      return PlantTypesEnum.Enum.MID_MAINTENANCE;
    case "High Maintenance":
      return PlantTypesEnum.Enum.HIGH_MAINTENANCE;

    default:
      return PlantTypesEnum.Enum.LOW_MAINTENANCE;
  }
};
const plantsInfo = plantsRaw.map(
  (e) => ({
    //  : {
    name: e["Plant Name"],
    image: e.Image,
    waterFrequencyDescription: e.Water,
    waterIntervalDays: e["Water Int"],
    sunlight: e.Sunlight,
    description: e.Description,
    category: e.Category,
    // category: findCategory(e.Category),
    // category: e.Category.toUpperCase().replace(" ", "_"),
    //   category: categoryMap[e.Category]
    //    e.Category,
    // }
    // e["Plant Name"]
    //      : {
    //         name: e["Plant Name"],
    //         image: e.Image,
    //         waterFrequencyDescription: e.Water,
    //         waterIntervalDays: e["Water Int"],
    //         sunlight: e.Sunlight,
    //         description: e.Description,
    //         category: e.Category.toUpperCase().replace(" ", "_")
    //         //   category: categoryMap[e.Category]
    //         //    e.Category,
    //     }
  })
  // lastWaterDate,
);

const plantNames = plantsRaw.map((e) => e["Plant Name"]);

export { plantNames, plantsInfo };
// export processedPlants;
// .forEach(e => plantNames.push(e.name))
