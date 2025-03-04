import Link from "next/link";

export const metadata = {
    title: 'About',
    description: 'About page'
};

export default function About() {
    return (
      <section className="text-center font-extrabold mt-8 text-green-500">
        <h2>This is about page</h2>
        <Link href='/'>
          <button>Back </button>
        </Link>
      </section>
    );
}