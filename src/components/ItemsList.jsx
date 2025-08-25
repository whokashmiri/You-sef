import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Hublot Classic Fusion",
    description: "581.NX.7071.RX.",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2023-01/542.NX_.1270.RX_.MDM-classic-fusion-original-titanium-42-mm.png?itok=xm_X1fnE",
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2023-01/542.NX_.1270.RX_.MDM-classic-fusion-original-titanium-42-mm-pr.jpg?itok=TWEoP1uO",
      // "https://img.chrono24.com/images/uhren/35887150-gush17p8cjt7ptrv8tle4j7u-Square480.jpg"
      // "https://img.chrono24.com/images/uhren/29025955-t3207d1wuw01s6nwfrzixh48-Square480.jpg"
    ]
  },
  {
    id: 2,
    title: "Classic Fusion Racing Grey Titanium 33mm",
    description: "581.NX.7071.LR.1104.",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2023-01/542.VX_.1270.RX_.MDM-classic-fusion-original-yellow-gold-42-mm.png?itok=KxY_8DYT",
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2023-01/542.VX_.1270.RX_.MDM-classic-fusion-original-yellow-gold-42-mm-pr.jpg?itok=xZCb_ByA",
      
      // "https://i.ebayimg.com/images/g/t-AAAeSwmd5oY210/s-l1600.webp",
      // "https://i.ebayimg.com/images/g/sMgAAeSwkVFoY210/s-l1600.webp"
    ]
  },
   {
    id: 3,
    title: "Classic Fusion Racing Grey Titanium",
    description: "542.NX.7071.RX. Size. 42 mm",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2021-04/CLASSIC-FUSION-TITANIUM-RACING-GREY-ON-RUBBER-42-MM.png?itok=n5XN8W9G",
      "https://i.ebayimg.com/images/g/0OoAAeSwPzJoc2mD/s-l1600.webp",
      "https://i.ebayimg.com/images/g/CsgAAeSwbmBoc2mD/s-l1600.webp",
      "https://i.ebayimg.com/images/g/4C0AAeSwQppoc2mD/s-l1600.webp"
    ]
  }
  ,
   {
    id: 4,
    title: "Classic Fusion Titanium Green Diamonds",
    description: " 581.NX.8970.RX.1104. Size. 33 mm..",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2025-03/Classic-Fusion-Titanium-Green-Diamonds-33-mm-Soldier.png?itok=OMR9K5D9",
      "https://imagedelivery.net/lyg2LuGO05OELPt1DKJTnw/ca8f1fdc-1e07-4cb1-95ff-9a3a665df100/public",
      // "https://cdn.clothbase.com/uploads/4b59625e-0879-47d8-bbb7-1a7e2ef8c96d/lavjnlmu2kacrfnct9jd.jpg?class=card",
      "https://cdn.clothbase.com/uploads/dd6e33d0-a727-4a9b-ae5a-4ceeb3876fea/mtq7j5i9rfiswgbiheel.jpg"
    ]
  }
  ,
   {
    id: 5,
    title: "Hublot Classic Fusion",
    description: "581.NX.7170.RX.1104",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2025-03/Classic-Fusion-Titanium-Blue-Diamonds-33-mm-Soldier.png?itok=vsq9P5IT",
      "https://i.ebayimg.com/images/g/meUAAOSw5lFnJFzJ/s-l1600.webp",
      "https://i.ebayimg.com/images/g/DaYAAOSw-mpnJFzJ/s-l1600.webp",
      "https://i.ebayimg.com/images/g/5iQAAeSwfMxoADli/s-l1600.webp"
    ]
  }
  ,
   {
    id: 6,
    title: "Classic Fusion Racing Grey Titanium",
    description: "Titanium Racing Gray 581.NX.7071.LR.1104 .",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2021-04/CLASSIC-FUSION-TITANIUM-RACING-GREY-33-MM.png?itok=40AP4tgY",
      "https://www.prestigetime.com/images/watches/581.nx.7071.lr.1104_main.jpg?ver=1",
      "https://www.prestigetime.com/images/watches/Classic-Fusion-Quartz-WG-33mm-buckle.jpg",
      "https://img.chrono24.com/images/uhren/42133786-8kholkblp3kkzerpbm0cbh9h-Zoom.jpg"
    ]
  }
  ,
   {
    id: 7,
    title: "Hublot Classic Fusion Quartz",
    description: "Diamond Watch 581.NX.1470.RX.1104.",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2023-02/Classic-Fusion-Titanium-diamonds-33-mm-soldier-shot.png?itok=1Htm1-E_",
      "https://img.chrono24.com/images/uhren/41764320-vtto5i363sjm7mixepcdzyzw-Square480.jpg",
      // "https://img.chrono24.com/images/uhren/29378289-ejrpo29os4g1rhrsikibkswr-Square480.jpg",
      "https://img.chrono24.com/images/uhren/38735431-g94b8l0497008wy9qs0ks0s5-Square480.jpg"
    ]
  }
  ,
   {
    id: 8,
    title: "Hublot Classic Fusion Racing Grey",
    description: "Quartz 33mm 581.nx.7071.lr.1104.",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2025-03/classic-fusion-33-581.NX_.7071.RX_.1104.png?itok=E0e-P065",
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2025-03/classic-fusion-33-581.NX_.7071.RX_.1104.png?itok=Lm4L8_br",
      // "https://img.chrono24.com/images/uhren/34306727-41phfc1xt64r3zwc07xzpuvv-ExtraLarge.jpg"
    ]
  }
  ,
   {
    id: 9,
    title: "Hublot Classic Fusion 581.NX.1470.RX.1104",
    description: "Titanium Diamonds Black Dial 33mm Ladies Watch.",
    images: [
      "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2023-02/Classic-Fusion-Titanium-diamonds-33-mm-soldier-shot.png?itok=1VuMiUAy",
      // "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2023-07/Classic-Fusion-Titanium-Diamonds-33-mm-close-up-shot.jpeg?itok=WE0okgtV",
      // "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2023-07/Classic-Fusion-Titanium-Diamonds-33-mm-PR-shot.jpg?itok=6y6Tr6d2",
      // "https://cdn-jnbkl.nitrocdn.com/DSyXimFVbLZsDRQHgxpswYJEIlNbdghE/assets/images/optimized/rev-5c34786/luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/Hublot-Classic-Fusion-581.NX_.1470.RX_.1104.jpg.webp"
    ]
  }
];

export default function ItemsList() {
  const [currentIndexes, setCurrentIndexes] = useState(items.map(() => 0));
  const [fadeStates, setFadeStates] = useState(items.map(() => true)); // true = visible

  const changeImage = (index, direction) => {
    setFadeStates((prev) =>
      prev.map((v, i) => (i === index ? false : v))
    );

    setTimeout(() => {
      setCurrentIndexes((prev) =>
        prev.map((imgIndex, i) =>
          i === index
            ? (imgIndex + direction + items[i].images.length) %
              items[i].images.length
            : imgIndex
        )
      );
      setFadeStates((prev) =>
        prev.map((v, i) => (i === index ? true : v))
      );
    }, 300); // match fade-out duration
  };

  return (
    <div className="p-6 grid md:grid-cols-4 gap-6 bg-black/90">
      {items.map((item, idx) => (
        <div
          key={item.id + "-" + idx}
          className="relative  overflow-hidden hover:scale-105 transition duration-300 shadow-lg h-96"
        >
          {/* Smooth fading background image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              fadeStates[idx] ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${item.images[currentIndexes[idx]]})`
            }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Arrows */}
          <button
            onClick={() => changeImage(idx, -1)}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => changeImage(idx, 1)}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronRight />
          </button>

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-200 mb-3">{item.description}</p>
            <Link
              to={`/item/${item.id}`}
              state={{ item }}
              className="inline-block bg-gray-600 text-white px-4 py-2  hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
