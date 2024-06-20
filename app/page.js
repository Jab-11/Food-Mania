import Link from "next/link";

import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Food-Mania: A Feast for the Senses</h1>
            <p>Indulge in culinary delights from around the globe.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Food-Mania is your ultimate platform to explore and share delicious
            recipes. Discover new flavors and connect with fellow food
            enthusiasts.
          </p>
          <p>
            Whether you’re a home cook or a gourmet chef, Food-Mania offers a
            space to showcase your culinary skills and find inspiration.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Choose Food-Mania?</h2>
          <p>
            At Food-Mania, we celebrate the love for food and community. Our
            platform is designed for those who are passionate about cooking and
            tasting new dishes.
          </p>
          <p>
            Join us to explore a world of flavors, share your favorite recipes,
            and connect with like-minded food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
