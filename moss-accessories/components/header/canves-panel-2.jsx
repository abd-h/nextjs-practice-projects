//NavItems along with panel content

const { default: Link } = require("next/link");

const style = [
  "2 peice suit",
  "3 peice suit",
  "Tuxedos",
  "Luxury suits",
  "Double-breasted suits",
  "Tweed suits",
  "Linen suits",
  "View all suits",
  "Waistcoats",
];
const occassions = [
  "Wedding party",
  "Wedding guest",
  "All wedding suits",
  "Race day suits",
  "Black tie",
  "Prom",
  "Graduation",
  "Interview attire",
];

export const navItems = [
  {
    id: "New-in",
    label: "New in",
    panelContent: <Link href="/">New in</Link>,
  },
  {
    id: "suits",
    label: "Suits",
    panelContent: (
      <div className="p-6 flex">
        <ul className="space-y-3 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Style</h3>
          {style.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-2xl font-semibold mb-4">Occoassins</h3>
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="#">{item}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    ),
  },

  {
    id: "weddings",
    label: "Weddings",
    panelContent: (
      <div>
        <h3>Weddings</h3>
        <ul className="flex flex-col">
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "coats",
    label: "Coats",
    panelContent: (
      <div>
        <h3>Coats</h3>
        <ul className="flex flex-col">
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "shirts",
    label: "Shirts",
    panelContent: (
      <div>
        <h3>Shirts</h3>
        <ul className="flex flex-col">
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "trousers",
    label: "Trousers",
    panelContent: (
      <div>
        <h3>Trousers</h3>
        <ul className="flex flex-col">
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "casual",
    label: "Casual",
    panelContent: (
      <div>
        <h3>Weddings</h3>
        <ul className="flex flex-col">
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "custom-made",
    label: "Custom made",
    panelContent: (
      <div>
        <h3>Custom Made</h3>
        <ul className="flex flex-col">
          {occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];
