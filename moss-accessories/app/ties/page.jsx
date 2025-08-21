import Link from "next/link";
import Accessories from "../../components/accessories/accessories";
// This is a dummy data array for demonstration purposes

const dummyTies = [
  { id: 1, title: "Spotty Ties", price: 19.99, href: "/ties/spotty-ties" },
  { id: 2, title: "Plain Ties", price: 15.99, href: "/ties/plain-ties" },
  { id: 3, title: "Paisley Ties", price: 22.99, href: "/ties/paisley-ties" },
  { id: 4, title: "Black Ties", price: 18.99, href: "/ties/black-ties" },
  { id: 5, title: "Floral Ties", price: 20.99, href: "/ties/floral-ties" },
  { id: 6, title: "Red Ties", price: 17.99, href: "/ties/red-ties" },
  { id: 7, title: "Yellow Ties", price: 16.99, href: "/ties/yellow-ties" },
  { id: 8, title: "Gift Ties", price: 24.99, href: "/ties/gift-ties" },
  { id: 9, title: "Tie Clips", price: 12.99, href: "/ties/tie-clips" },
];

export default function TiesPage() {
  return (
    <section className="flex flex-col px-4">
      <section className="flex flex-col px-4">
        <header>
          <nav>
            <ul className="flex justify-start items-center gap-2 text-sm font-thin tracking-wider text-[#333733] bg-[#f6f6f6] p-4">
              <li className="">Home</li>
              <li>|</li>
              <li>Mens Accessories</li>
              <li>|</li>
              <li>Men's Ties</li>
            </ul>
          </nav>
        </header>
        <h2 className="font-bold text-3xl text-[#000000] p-4">Men's Ties</h2>
        <p className="text-sm w-1/2 p-4 tracking-wider leading-6 font-[600] text-black">
          Never underestimate the importance of a good neck tie. Well selected,
          it'll pull your look together and make a statement about your own
          individual style. If your current rotation is looking a little
          lacklustre, take your pick from our edit of colours, fabrics, prints
          and patterns to liven things up. From crunchy knits in straight cuts
          to refined patterns on silk jacquard, paisley motifs, club stripes,
          dot prints and more, there's a tie with your name on it. Available in
          sets with matching tie bars and pocket squares, our ties are perfect
          for gifting too. Browse our full collection of men's ties below.
        </p>
      </section>
      <section className="flex p-4">
        <Accessories dummyTies={dummyTies} />
      </section>
    </section>
  );
}
