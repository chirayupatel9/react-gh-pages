import * as React from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);

const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "r",
    category: "Black and White",
    title: "A contrast of monochrome.",
    pointOfInterest: 200,
    backgroundColor: "#814A0E"
  },
  {
    id: "q",
    category: "Green",
    title: "A hut in a quiter place.",
    pointOfInterest: 200,
    backgroundColor: "#814A0E"
  },
  {
    id: "p",
    category: "milkyway",
    title: "Stars travel by a distance that we cannot afford to do.",
    pointOfInterest: 200,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "o",
    category: "CHange this to",
    title: "Arrange Your Apple Devices for the Gram.",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "n",
    category: "Sunset",
    title: "Watch the sun goes by the ocean.",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "m",
    category: "Sky with a gradient",
    title: "Everyday there's a new gradient in the atmosphere.",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "l",
    category: "Moving clouds",
    title: "Clouds are literally made of dust.",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "k",
    category: "They're all the same",
    title: "Rope was used as a written language for the Inca's.",
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "j",
    category: "sky full of Stars ",
    title: "There are no green stars.",
    pointOfInterest: 200,
    backgroundColor: "#AC7441"
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "i",
    category: "Trails",
    title: "Seriously the Only hard work is to render.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "h",
    category: "crescent Moon",
    title: "You can't unsee the moon.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "g",
    category: "Trail rain",
    title: "Made with merging 156 images together. ",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "f",
    category: "Boat",
    title: "Need to clean our rivers.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "e",
    category: "Long Expo of Steel",
    title: "Well, Steel Is More Elastic Than Rubber.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "d",
    category: "Stoned",
    title: "Swallow a single drop of ocean water and you'll swallow thousands of microscopic algae.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "c",
    category: "Light run",
    title: "Unscramble running with lights. ",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "b",
    category: "Polar point",
    title: "We see these star rotate around the polaris.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  },
  {
    id: "a",
    category: "Blue Mountains",
    title: "Layers of calmness.",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  }
];
