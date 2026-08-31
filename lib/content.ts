/*
  All copy below is pulled verbatim from the current site (rawhewranch-kenya.com).
  Do not rewrite, shorten, or paraphrase. Original spelling/punctuation kept as-is
  (e.g. "Horse Ridding", "Boat Ridding", "Longont", "an own tent").

  Image paths point at the real photos supplied in /public.
*/

export const hero = {
  title: "Rawhew Ranch",
  subtitle: "Introducing Naivasha's Cozy Camp",
  tagline: "The place to be",
  image: "/campingsite.jpg",
};

export const naivasha = {
  eyebrow: "Welcome to Naivasha",
  heading: "Introducing Naivasha's Cozy Camp",
  body: `Naivasha is one of the most popular travel destinations in Kenya. It is beloved by visitors from all parts of Kenya and beyond due to its moderate climate and gorgeous scenery on the floor of the Great Rift Valley. At the core of it all is Lake Naivasha. This is one of the largest freshwater lakes in Africa which hosts a rich birdlife and supports large-scale horticulture that makes Kenya a leading flower exporter in the world. Surrounding the lake are unique geographical features such as Mt Longonot, Hell's Gate National Park, and private game sanctuaries, all attracting hundreds of outdoor enthusiasts every weekend. One cannot forget the numerous modern hotels, shopping malls, and restaurants catering to every taste, style, and budget. Naivasha is indeed “the place to be.”`,
  images: [
    { src: "/cycling.jpg", alt: "Cycling", position: "center" },
    { src: "/Boat Ridding.png", alt: "Boat Riding", position: "center" },
  ],
};

export const welcome = {
  eyebrow: "Welcome to Rawhew Ranch",
  heading: "Welcome to Rawhew Ranch",
  body: `In the midst of these attractions and offerings, there is Rawhew Ranch. A small intimate campsite bordering KWS Game Farm, a few meters from off the Naivasha – Kinangop Road. We offer high-quality pitches with a wide variety of facilities to enrich your camping experience. Our location away from the urban jungle and the busy highway gives our camp an adventurous sense of solitude and freedom.`,
  pullQuote: `Cosily hidden from the crowds, yet so close to everything that is important`,
  image: { src: "/HellsGate.png", alt: "Rawhew Ranch grounds", position: "center" },
};

export const amenities = {
  eyebrow: "Our Amenities",
  heading: "Our Amenities",
  image: { src: "/Bonfire.png", alt: "Evening bonfire at the camp" },
  items: [
    { label: "Free, secure, and ample parking", icon: "parking" },
    { label: "Clean and modern washrooms and showers", icon: "shower" },
    { label: "Double & Single tents + mattresses for hire", icon: "tent" },
    { label: "Bicycles for hire", icon: "bike" },
    { label: "Safe and clean grounds for camping with your own tent", icon: "leaf" },
    { label: "Cooking space and firewood at a small fee", icon: "fire" },
    { label: "Grill for hire", icon: "grill" },
    { label: "Fire pit for evening bonfires", icon: "flame" },
    { label: "Reliable borehole water", icon: "droplet" },
    { label: "Cottage for hire", icon: "home" },
    { label: "Cafeteria for coffee and snacks", icon: "coffee" },
  ] as const,
};

export type Activity = {
  key: string;
  eyebrow: string;
  heading: string;
  body: string;
  icon: string;
  imageLabel: string;
  image: string;
  position?: string;
  size: "feature" | "compact";
};

export const activities = {
  eyebrow: "Activities",
  heading: "Activities",
  feature: [
    {
      key: "camping",
      eyebrow: "Activities",
      heading: "Camping",
      icon: "tent",
      imageLabel: "Camping",
      image: "/Camping.jpeg",
      position: "center 70%",
      size: "feature",
      body: `Camping is our main activity. We have secure, private, and spacious grounds for camping. You bring your own tent and accessories such as a sleeping tent and mattress. You can also hire from the camp. The camp offers a kitchen, so you bring your own food and prepare it your way and at your convenience. We provide food and a cook with prior arrangements and at an extra cost. There is enough water and clean washrooms and showers`,
    },
    {
      key: "cycling",
      eyebrow: "Activities",
      heading: "Cycling",
      icon: "bike",
      imageLabel: "Cycling",
      image: "/cycling.jpg",
      position: "center 65%",
      size: "feature",
      body: `You can hire a bicycle from the camp and indulge in a cycling adventure. Our camp directly neighbours the KWS Game Farm which is dotted with rocky outcrops and natural vegetation such as Leleshwa and Euphorbia trees. There are also a variety of range animals such as impala, Eland, Zebras, and a variety of grassland birds. From our camp, you can cycle along the game farm at your pace and back to the camp. You can also take a bike to the highway and to Naivasha town.`,
    },
    {
      key: "horse-riding",
      eyebrow: "Activities",
      heading: "Horse Riding",
      icon: "horse",
      imageLabel: "Horse Ridding",
      image: "/horse ridding.jpg",
      position: "center 40%",
      size: "feature",
      body: `Saddle Up for Pure Joy: The Art of Riding! There's a unique joy that comes from the rhythmic dance between rider and horse, a harmony that only equestrians truly understand. At Rawhew Ranch, we invite you to experience this exhilarating joy firsthand. Whether you're a seasoned rider or a first-timer, our expert instructors are here to guide you through the art of riding with skill and grace. Join us for a journey of pure joy on horseback, surrounded by the breathtaking beauty of Rawhew Ranch. Your equestrian adventure awaits!`,
    },
    {
      key: "goat-roasting",
      eyebrow: "Activities",
      heading: "Goat Roasting (Nyama Choma)",
      icon: "flame",
      imageLabel: "Nyama Choma",
      image: "/nyama choma.jpg",
      position: "center",
      size: "feature",
      body: `You want to lay that special goat for your Chama, friends, or family? We all do once in a while. At Rawhew Ranch, we arrange for you to buy a goat at the farm price – from our goat farm nearby. You have all the facilities that you need in our camp to charm your group with the goat offering - from a spacious kitchen and jikos to water and charcoal. At a reasonable fee, we can do all the preparations including roasting, cooking, and serving. This takes away all the headaches of arranging for logistics and leaves you to concentrate on your event.`,
    },
    {
      key: "boat-riding",
      eyebrow: "Activities",
      heading: "Boat Riding",
      icon: "canoe",
      imageLabel: "Boat Ridding",
      image: "/Lake Naivasha.jpg",
      position: "center",
      size: "feature",
      body: `Lake Naivasha is a wonderful recreation site for nature lovers and adventure seekers. It is a boating paradise for groups and families who love water sports. The lake hosts schools of hippos and numerous water birds such as cormorants and pelicans. Fish eagles and kingfishers are commonly sighted on the shoreline darting for fish in the waters. We arrange boating rides in Lake Naivasha from our camp. This can be combined with other excursions to give you full day programme`,
    },
  ] as Activity[],
  compact: [
    {
      key: "wedding",
      eyebrow: "Wedding",
      heading: "Weddings In Style",
      icon: "heart",
      imageLabel: "Wedding",
      image: "/wedding.jpg",
      position: "center",
      size: "compact",
      body: `If you are planning for a wedding reception or party, we have the best grounds for you and your team at Rawhew Ranch. What awaits you here is a secure, clean, and green setup that is manicured to the highest standards of presentation. Furthermore, the whole ground can be reserved exclusively for your group and function, whether catered or self-catering`,
    },
    {
      key: "team-building",
      eyebrow: "Team Building",
      heading: "Team Building and General Events",
      icon: "users",
      imageLabel: "Team Building",
      image: "/team building.jpg",
      position: "center",
      size: "compact",
      body: `Rawhew Ranch suits all your group activities and events, such as corporate team building and end-of-year functions. We meet all your needs in outdoor functions as we are amply equipped to cater to your individual needs while our grounds are well-maintained to offer the perfect atmosphere for any function. Contact us when seeking a venue for that special birthday event, graduation party or related events. We shall be happy to meet`,
    },
    {
      key: "farm-visits",
      eyebrow: "Activities",
      heading: "Nyandarua Farm Visits",
      icon: "sprout",
      imageLabel: "Farm",
      image: "/farm.jpg",
      position: "center",
      size: "compact",
      body: `Nyandarua County is renowned for food production. It is the hub of potatoes, carrots, minjis, and a variety of vegetables From our camp, you can visit nearby farms and meet the farmers in their “office.” Urban children enjoy the visits – many don't even know where their favourite chips and yoghurt come from. It’s a whole new experience when they visit a shamba. You have a chance to purchase farm produce directly from the farm which you carry in your bike or have it dropped at the camp. You can also buy other organic foods such as kienyeji chicken and eggs which you can also cook from the camp`,
    },
  ] as Activity[],
  outdoorIntro: {
    key: "outdoor-excursions",
    eyebrow: "Activities",
    heading: "Outdoor Excursions",
    icon: "compass",
    imageLabel: "Outdoor Excursions",
    image: "",
    size: "compact",
    body: `While staying with us at Rawhew Ranch, there is a whole variety of exciting adventures at your disposal. Some are self-service – you can do it yourself However, we also provide transport and guides to any of these locations and activities that can make your stay memorable Naivasha and Rift Valley geographical features offer great sceneries for hiking expeditions by individuals and groups. Sample these:`,
  } as Activity,
  excursions: [
    {
      key: "longonot",
      eyebrow: "Outdoor Excursions",
      heading: "Longonot Hiking",
      icon: "mountain",
      imageLabel: "Longonot",
      image: "/longonot.jpg",
      position: "center",
      size: "feature",
      body: `Longont is a dormant crater with a beautiful caldera at the top. Very ideal for an adventurous hike reaching to the top and enjoying a picnic as you savour the natural beauty of the caldera and distant vistas.`,
    },
    {
      key: "eburu",
      eyebrow: "Outdoor Excursions",
      heading: "Eburu Forest",
      icon: "trees",
      imageLabel: "Eburu",
      image: "/eburu.jpg",
      position: "center",
      size: "feature",
      body: `Eburu Hills are the highest mountains on the floor of the Rift Valley. Situated to the West of Lake Naivasha, they host an indigenous forest that offers perfect atmosphere for nature walks and bird watch offering a panoramic view of Lake Naivasha and its surroundings`,
    },
    {
      key: "hells-gate",
      eyebrow: "Outdoor Excursions",
      heading: "Hells Gate National Park",
      icon: "mountain",
      imageLabel: "Hells Gate",
      image: "/hellsgate trail.jpg",
      position: "center",
      size: "feature",
      body: `Hells Gate has a host of rocky outcrops such as Fisher’s Tower that is popular with rock climbers. It also has a big gorge that attracts many hikers. Other attractions include wildlife and geothermal power wells and a natural spa. Hells Gate is one of the few parks in Kenya where visitors can walk or cycle through. Experience all this from our camp.`,
    },
  ] as Activity[],
};

export type TariffCategory = {
  label: string;
  lines: { text: string; note?: string }[];
};

export const pricing: {
  eyebrow: string;
  heading: string;
  categories: TariffCategory[];
  terms: { heading: string; items: string[] };
} = {
  eyebrow: "Rates",
  heading: "Prices",
  categories: [
    {
      label: "Camping",
      lines: [
        { text: "Camping with own food an own tent:" },
        { text: "Ksh. 1000 for adults" },
        { text: "Ksh. 400 for children sharing with parents" },
        { text: "Ksh. 700 for children with own tent" },
      ],
    },
    {
      label: "Tent Hire",
      lines: [
        { text: "Ksh 4,500 for 4 pax sharing 2 double mattresses" },
        { text: "Ksh 8,000 for 8 pax sharing 4 double mattresses" },
        { text: "Ksh 3,500 for 2 pax sharing 1 double mattress" },
      ],
    },
    {
      label: "Team Building",
      lines: [
        {
          text: "Full board:",
          note: "Ksh 6,500 per person inclusive of tents and grounds, breakfast, dinner, and lunch,10 am & 4.00 pm tea served with snacks.",
        },
        {
          text: "Day team building:",
          note: "Ksh 1,500 per person inclusive of use of grounds, lunch, 10 am & 4 pm tea served with snacks and Lunch",
        },
      ],
    },
    {
      label: "Beddings Hire",
      lines: [
        {
          text: "Ksh. 1000 for 1 set of 1 double mattress, 2 bedsheets & 1 blanket, 2 towels",
        },
      ],
    },
    {
      label: "Exclusive Use of Camp",
      lines: [{ text: "Ksh. 60,000 for 24 hours" }],
    },
    {
      label: "Cottage",
      lines: [{ text: "Stays 5 people in 2 bedrooms,", note: "Ksh. 40,000 per night" }],
    },
    {
      label: "Children's Playground",
      lines: [{ text: "Ksh 300 per child. Free for resident campers" }],
    },
    {
      label: "Guided Cycling",
      lines: [{ text: "Ksh 300 per person" }],
    },
    {
      label: "Cycling",
      lines: [{ text: "Ksh 400 per hour" }],
    },
    {
      label: "Horse Riding",
      lines: [{ text: "Ksh 3,000 per hour" }],
    },
    {
      label: "Guided Farm Visit",
      lines: [{ text: "Ksh 300 per person" }],
    },
  ],
  terms: {
    heading: "Terms and Conditions",
    items: [
      "All services such as tents, catering, goats etc must be reserved in advance",
      "Reservation is confirmed upon payment of a 30% deposit",
      "Discard litter in the provided bins",
      "Pets are not allowed in the camp, except when it is exclusively reserved",
      "No picnics after 6 pm for day picnics",
      "Vehicles must be parked only in the designated area.",
      "While the management provides ample security, vehicles are parked at owners’ risk",
      "Check-out time is 1200 hrs",
    ],
  },
};

export const restaurant = {
  eyebrow: "Our Restaurant",
  heading: "Our Restaurant",
  imageLabel: "Restaurant Image",
  image: "/Restaurant.png",
  menuImages: [
    { src: "/nyama choma.jpg", alt: "Charcoal grilled meat" },
    { src: "/Mashed.png", alt: "Fresh fish with mashed potatoes" },
  ],
  body: `At Rawhew Ranch , you can enjoy delicious cuisine at our Restaurant situated next to the campsite. Our main offering includes succulent pork from our farm, goat meat, Kienyeji chicken, and fresh fish from the lake. Our meats are charcoal grilled to your liking. Vegetables are all sourced from our farm, guaranteeing you quality and freshness to treasure.`,
  menuHeading: "Our Menu",
  groups: [
    {
      label: "Meat Selection",
      items: [
        { name: "Whole Goat", price: "Ksh 20,000" },
        { name: "Goat Leg", price: "Ksh 4,000" },
        { name: "Goat Ribs", price: "Ksh 3,500" },
        { name: "Pork Per KG", price: "Ksh 1,200" },
        { name: "Kienyeji Chicken", price: "Ksh 2,800" },
        { name: "Whole Tilapia Fish", price: "Ksh 1,200" },
      ],
    },
    {
      label: "Side Dishes",
      items: [
        { name: "Ugali", price: "Ksh 200" },
        { name: "Mukimo", price: "Ksh 200" },
        { name: "Mashed Potatoes", price: "Ksh 200" },
        { name: "Saute Potatoes", price: "Ksh 300" },
        { name: "Rice", price: "Ksh 200" },
      ],
    },
  ],
};

export const contact = {
  email: "rawhewranch@gmail.com",
  phone: "+254742293741",
  address: "7FH8+82X Kinamba, Naivasha",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=7FH8%2B82X%20Kinamba%2C%20Naivasha",
  facebook: "#",
  instagram: "#",
  copyright: "© 2024 Rawhew Ranch Kenya. All Rights Reserved.",
};
