// import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <>
         <header className={classes.header}>
            <div className={classes.slideshow}></div>
            <div>
               <div className={classes.hero}>
                  <h1>NextBite - The best way to eat together</h1>
                  <p>Taste the best meals from all over the world</p>
               </div>
               <div className={classes.cta}>
                  <Link href="/meals">Explore Meals</Link>
                  <Link href="/community">Join Community</Link>
               </div>
            </div>
         </header>
         <main>
            <section className={classes.section}>
               <h2>How it works</h2>
               <p>
                  NextBite is a platform for foodies to share their favorite
                  recipes with the world. It&apos;s a place to discover new
                  dishes, and to connect with other food lovers.
               </p>
               <p>
                  NextBite is a place to discover new dishes, and to connect
                  with other food lovers.
               </p>
            </section>

            <section className={classes.section}>
               <h2>Why NextBite?</h2>
               <p>
                  NextBite is a platform for foodies to share their favorite
                  recipes with the world. It&apos;s a place to discover new
                  dishes, and to connect with other food lovers.
               </p>
               <p>
                  NextBite is a place to discover new dishes, and to connect
                  with other food lovers.
               </p>
            </section>
         </main>
      </>
   );
}
