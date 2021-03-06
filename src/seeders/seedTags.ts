import Tag from "../models/tags.model";

const tags = [
  { tag_name: "Food and Drink" },
  { tag_name: "Coffee/Tea" },
  { tag_name: "Sport" },
  { tag_name: "Activity" },
  { tag_name: "Art" },
  { tag_name: "Bar" },
  { tag_name: "Hike" },
  { tag_name: "Internet" },
  { tag_name: "Music" },
  { tag_name: "History" },
  { tag_name: "Culture" },
  { tag_name: "Events" },
  { tag_name: "Museum" },
  { tag_name: "Dance" },
  { tag_name: "Beach" },
  { tag_name: "Ocean" },
  { tag_name: "Working" },
  { tag_name: "Nature" },
  { tag_name: "Swim" },
  { tag_name: "Volunteering" },
  { tag_name: "Medical" },
  { tag_name: "Services" },
  { tag_name: "Walk" },
  { tag_name: "Surf" },
  { tag_name: "Shopping" },
  { tag_name: "Parking" },
  { tag_name: "Van Life" },
  { tag_name: "Date Spot" },
  { tag_name: "Accommodation" },
  { tag_name: "Clubbing" },
  { tag_name: "ESports" },
  { tag_name: "Beauty" },
  { tag_name: "Massage" },
  { tag_name: "Hair" },
  { tag_name: "Groceries" },
  { tag_name: "Scenic" },
  { tag_name: "Learning" },
  { tag_name: "Gambling" },
  { tag_name: "Restaurant" },
];

export const populateTags = async () => {
  try {
    for (let tag of tags) {
      await Tag.create({ name: tag.tag_name });
    }
  } catch (error) {}
};
