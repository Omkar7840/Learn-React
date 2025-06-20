import React from "react";

function Card({ username = "Kolla", post = "In your heart" }) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        alt=""
        width="384"
        height="512"
      ></img>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            nihil odit dicta quisquam voluptas quam quod corporis! Rerum est
            accusantium sed. Neque, hic.
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">{post}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
