import Image from "next/image";
import { Metadata } from "next";
import SmartImage from "@/app/components/SmartImage";

export const metadata: Metadata = {
  title: "Gear | Brendan Lambrecht",
  description: "My toolbox. This is gear I actually own and recommend.",
  openGraph: {
    title: "Gear | Brendan Lambrecht",
    description: "My toolbox. This is gear I actually own and recommend.",
    type: "website",
    url: "https://blambrechtcodes.github.io/blog/gear",
    images: [{ url: "https://blambrechtcodes.github.io/api/og?title=Gear", alt: "gear" }],
  },
};

interface ItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => {
  return (
    <li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity">
      <a
        className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border border-primary bg-tertiary"
        href={link}
        target="_blank"
      >
        <SmartImage
          src={image}
          width={64}
          height={64}
          alt={title}
          className="h-full w-full overflow-hidden rounded-xl object-cover object-center"
          themeSwitch={title === "Notion" || title === "Ollama"}
        />
      </a>
      <div className="flex grow items-center justify-between gap-2">
        <div className="space-y-1">
          <h3 className="line-clamp-2 font-medium leading-tight text-primary">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-tight text-secondary">
            {description}
          </p>
        </div>
        <div>
          <a
            className="ml-auto h-fit rounded-full bg-tertiary px-4 py-2 text-sm"
            href={link}
            target="_blank"
          >
            Get
          </a>
          {sponsored && (
            <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-lg animate-in text-pretty text-secondary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            List of tools I actually own and enjoy using. Use the links below to check these out! 
            Last updated on March 2026.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="animated-list -mx-6 grid snap-x snap-mandatory scroll-pl-6 auto-cols-[100%] grid-flow-col grid-rows-3 flex-nowrap gap-x-3 gap-y-8 overflow-x-scroll px-6 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-none md:gap-x-6 md:overflow-auto">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const gear = [
  {
    name: "DurayLoly 40\" Desk",
    category: "My Desk Setup",
    image: "https://m.media-amazon.com/images/I/91pPw4nJvML._AC_SL1500_.jpg",
    description: "High quality and made to last.",
    link: "https://www.amazon.com/DurayLoly-Computer-Drawers-Storage-Outlets/dp/B0F245QKVD/ref=sr_1_3_sspa?crid=1FLS9DIFTVIO7&dib=eyJ2IjoiMSJ9.sWMKSgDm3arOBS4EO26x6e_FctKeYtv8RoMtoxvPP2lCNX1akQxceNdMoe5pCMBeKKaITlb8xsgWOzYN68DWQY8lsMy5n9d445FeyCJ9vEYhFB4eS5r5EOceJillgIgrrnFoyqIJhTp8MjbmcJCRGquRvQrmRGcSbi9aujfFoh639Y7OPZgnxANbm1oDbzRDHEq__epCzcy-Hyi1AdnvNownIzPrqvy348MLWlHLQU44G3oKN7FPQSXQ5DHgXLj3iF54Q9jh1ktnON63Reyeg3-I7tZ3QDsLnt2NV4_N_og.hottvc9E9WytgRo5E_n5hn_0h9u0aLK2Mi0PQJUFf_A&dib_tag=se&keywords=wooden%2Bdesk%2Bwith%2Bside%2Bshelves&qid=1772904665&sprefix=wooden%2Bdesk%2Bwith%2Bside%2Bshelve%2Caps%2C314&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
  },
  {
    name: "Notion",
    category: "Apps",
    image: "/gear/notion_light.png",
    description: "The all-in-one workspace.",
    link: "https://www.notion.so/",
  },
  {
    name: "Logitech MX Master Mouse 3S",
    category: "Home Desk Setup",
    description:
      "Ergonomic and comfortable to be used for all day use, love the scrolling!",
    image: "https://m.media-amazon.com/images/I/61xKiCADfpL._AC_SL1500_.jpg",
    link: "https://amzn.to/3PFWCKu",
  },
  {
    name: "Orbitkey Desk Mat",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/51QZruZqs1L._AC_SL1500_.jpg",
    description:
      "Leather and Recycled PET Felt | Document Hideaway | Magnetic Cable Holder",
    link: "https://amzn.to/3PETeiZ",
    sponsored: false,
  },
  {
    name: "Custom Coiled USB C Cable",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/61KMQ+px8bL._AC_SL1500_.jpg",
    description: "USB-C Artisan Braided, for Mechanical Keyboards",
    link: "https://amzn.to/3J0cXFP",
  },
  {
    name: "BenQ ScreenBar Monitor Light",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/71FpP6myfPL._AC_SL1500_.jpg",
    description:
      "Enhances immersion and focus, creates a comfortable environment",
    link: "https://amzn.to/3fUAfCi",
  },
  {
    name: "Anker USB-C Hub",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/61thMtrP5rL._AC_SL1500_.jpg",
    description: "The one cable solution for my MacBook Pro.",
    link: "https://amzn.to/3Dk9vCV",
  },
  {
    name: "LG 27GP950-B 27\" Monitor",
    category: "Home Desk Setup",
    description:
      "Super crisp resolution, bright, and awesome build -but at a pretty penny!",
    image:
      "https://m.media-amazon.com/images/I/71pT6MAfXmS._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B094RWMN8K?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
  },
  {
    name: "Alfred",
    category: "Apps",
    description: "A powerful Mac productivity launcher (with workflows).",
    image: "/gear/alfred.webp",  // ← Fixed
    link: "https://www.alfredapp.com/",
  },
  {
    name: "WireShark",
    category: "Apps",
    description: "The world's best network protocol analyzer.",
    image: "/gear/wireshark.png",  // ← Fixed
    link: "https://www.wireshark.org/",
  },
  {
    name: "Visual Studio Code",
    category: "Apps",
    description: "The best IDE out there.",
    image: "/gear/VScode.png",  // ← Fixed
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Windows App Client",
    category: "Apps",
    description: "I run RDP clients here.",
    image: "/gear/windows.png",  // ← Fixed
    link: "https://apps.microsoft.com/detail/9n1f85v9t8bn?hl=en-US&gl=US",
  },
  {
    name: "Raycast",
    category: "Apps",
    description:
      "The quickest way to get things done on your Mac. Using Raycast daily.",
    image: "/gear/raycast.png",  // ← Fixed
    link: "https://raycast.com/",
  },
  {
    name: "App Cleaner",
    category: "Apps",
    image: "/gear/appcleaner.png",  // ← Fixed
    description:
      "The best way to uninstall apps on Mac. It finds all the related files and deletes them.",
    link: "https://freemacsoft.net/appcleaner/",
  },
  {
    name: "Ollama",
    category: "Apps",
    image: "/gear/ollama_light.png",
    description:
      "The local LLM platform. I use it to run local language models.",
    link: "https://ollama.com/",
  },
  {
    name: "Apple Fitness+",
    category: "Apps",
    description:
      "I use this to get shredded.",
    image: "/gear/fitness.png",  // ← Fixed
    link: "https://www.apple.com/fitness-plus/",
  },
  {
    name: "iPhone 12 Pro",
    category: "Camera Setup (Video)",
    description:
      "Compact lightweight full-frame camera, flip screen, 4k, 33MP, b-roll camera.",
    image: "/gear/iphone.png",  // ← Fixed
    link: "https://www.amazon.com/Apple-iPhone-Pro-128GB-Graphite/dp/B08PNP5YGV/ref=sr_1_1?crid=7OBT5ISEAZHF&dib=eyJ2IjoiMSJ9.cWEu17QKSf7aUD13uaTTGaiqIeDfsk-5v_-p9j-RLpnh9PzPr9fgmQ_MBEYIMAwTdfXRiULWtSwR9IAZawdlFUM7ykQzTtYhJVUD9lL05Dv9DdsAg0ID6YkfyFFEdW2V9YZjFJpDHIJob37Teu8gVYaZqkZBGJN582hFM6ySwvp8bdYoY_hmYWho-w3AkdDoKklYAYVtqfX8HWMOu682jcqk8F_OVoT2adFqzR36Euw.F4_9iWmSk8lkNgucl0j28EJoDSDjwgoEZFTNtWiUxzc&dib_tag=se&keywords=iphone%2B12%2Bpro&qid=1772903845&sprefix=iphone%2B12%2Bpro%2Caps%2C206&sr=8-1&th=1",
  },
  {
    name: "iPhone 12 Pro",
    category: "Camera Setup (Photo)",
    description:
      "Compact lightweight full-frame camera, flip screen, 4k, 33MP, b-roll camera.",
    image: "/gear/iphone.png",  // ← Fixed
    link: "https://www.amazon.com/Apple-iPhone-Pro-128GB-Graphite/dp/B08PNP5YGV/ref=sr_1_1?crid=7OBT5ISEAZHF&dib=eyJ2IjoiMSJ9.cWEu17QKSf7aUD13uaTTGaiqIeDfsk-5v_-p9j-RLpnh9PzPr9fgmQ_MBEYIMAwTdfXRiULWtSwR9IAZawdlFUM7ykQzTtYhJVUD9lL05Dv9DdsAg0ID6YkfyFFEdW2V9YZjFJpDHIJob37Teu8gVYaZqkZBGJN582hFM6ySwvp8bdYoY_hmYWho-w3AkdDoKklYAYVtqfX8HWMOu682jcqk8F_OVoT2adFqzR36Euw.F4_9iWmSk8lkNgucl0j28EJoDSDjwgoEZFTNtWiUxzc&dib_tag=se&keywords=iphone%2B12%2Bpro&qid=1772903845&sprefix=iphone%2B12%2Bpro%2Caps%2C206&sr=8-1&th=1",
  },
  {
    name: "MATEIN Business Laptop Backpack",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/81Tz2hmwlYL._AC_SL1500_.jpg",
    description: "Compact Camera Backpack - A Minimalist & Travel-friendly",
    link: "https://www.amazon.com/Backpack-Business-Charging-Resistant-Computer/dp/B074KV9TT4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nPsCWiRcgGp1WLGmsZZ588rYDf9-lxZEGFd-RjTVUD7vDhdQe05wZ1dMLdLEjY2F0v2M9NwwQjF3PuiiAGiOTvrAoob67GdkHOez5IHs15mKTGpuAKc0K5-C2hINu0IadZU0k5SqvjgbkEOXyJauk2kyvA5RwOeddYGMUp4NjzPOEV-pYh3o4rbO2Mya77sMs_-QAfL-k1tGE1JqPMZlFz66d3OCzrbmsMEhjalJuqCiDLfTZif3kP6RTII8F4s706tv7Otb17U8dUE8sE3KAk21F-GxxIM86QYShq_knxg.2oG_igA2_IJu4G8-yfcu7K40ekusxscXfuY6VfmZyZA&dib_tag=se&qid=1772903963&refinements=p_89%3AMATEIN&s=apparel&sr=1-1&th=1",
  },
  {
    name: "MacBook Pro M1 Pro 14-inch",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/61bwiPRcv2L._AC_SL1500_.jpg",
    description: "Daily driver. Sleek, great display, and performant.",
    link: "https://amzn.to/41fkhEH",
  },
  {
    name: "Apple AirPods Pro 2nd Gen",
    category: "Everyday Carry",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803961739",
    description: "Active Noise Cancelling, Transparency Mode, Spatial Audio",
    link: "https://amzn.to/3UmMQhq",
  },
  {
    name: "iPad Pro 12.5-inch M1",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/81ijo86sDcS._AC_SL1500_.jpg",
    description: "The best tablet on the market.",
    link: "https://amzn.to/3v2n7s8",
  },
  {
    name: "Sandisk 1TB SSD",
    category: "Storage",
    description:
      "Fast, reliable, and secure storage. To edit videos and store data on the go.",
    image: "https://m.media-amazon.com/images/I/61zuR3UMnWL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/SanDisk-1TB-Extreme-Portable-SDSSDE61-1T00-G25/dp/B08GTYFC37/ref=sr_1_1_mod_primary_new?crid=E15WMEI6A23U&dib=eyJ2IjoiMSJ9.v8AA1WB-RYbepObjfpSnPmHKQdvDbT1G7ldjVc8ar5626S6JeHMfbbGkYRAS520VxG5TKVDpCXVTfa85FREBV0auNn_M1PD8YCrV4DmtoYetJOzadQuoV7crql2kCbb_OOQWQezTVXDux-w2swAM-52_0JPrCmKwnEI8xIZuV8tWd4zAmCjjuxbs8eZBQcFxCrMTPXGndKwb2hI1i0JiKRi4qC3QuD3BP4sjT1-hGLg.eCCVzrTPVb2U8bYEN3Frp-GVnMTrsuC1MfIPU7kblY4&dib_tag=se&keywords=sandisk%2B1tb%2Bssd&qid=1772904862&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=sandisk%2B1tb%2Bss%2Caps%2C278&sr=8-1&th=1",
  },
];
