"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export function ClientSection() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="w-full  py-20 px-6 md:px-12 text-center min-h-screen flex items-center justify-center h-screen snap-start">
        <div className="w-full mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Trusted by startups and tech giants alike. Here are some of the
            amazing companies we’ve had the privilege to work with.
          </p>
          <div className="max-w-7xl overflow-hidden">
            <InfiniteMovingCards
              items={Clients}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}

export const Clients = [
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Apple",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Stripe",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    name: "Slack",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Shopify",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Shopify_logo_2018.svg",
  },
  {
    name: "Zoom",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zoom_Communications_Logo.svg",
  },
  {
    name: "Spotify",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
  },
  {
    name: "Adobe",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Corporate_Logo.png",
  },
  {
    name: "Dropbox",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dropbox_Icon.svg",
  },
  {
    name: "Uber",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  },
  {
    name: "Airbnb",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Tesla",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "LinkedIn",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
  },
  {
    name: "GitHub",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Figma",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Notion",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    name: "Trello",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg",
  },
  {
    name: "DigitalOcean",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
  },
  {
    name: "Vercel",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Vercel_logo.svg",
  },
  {
    name: "Heroku",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Heroku_logo.svg",
  },
  {
    name: "PayPal",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    name: "Reddit",
    url: "https://upload.wikimedia.org/wikipedia/en/8/82/Reddit_logo_and_wordmark.svg",
  },
  {
    name: "Twitter",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  },
  {
    name: "YouTube",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
  },
  {
    name: "Samsung",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "IBM",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];
