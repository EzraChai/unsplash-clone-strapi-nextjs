import Link from "next/link"

export const SiteHeader = () => {
  return <div className="fixed inset-0 z-40 h-14 w-full bg-zinc-900 py-3 ">
      <div className="flex items-baseline justify-between max-w-7xl px-2 mx-auto">
          <Link href="/" passHref><div className="text-white text-lg lg:text-xl font-extrabold uppercase">Resplash.</div></Link>
            <div className="">
                <Link passHref href={"/login"}>
                    <div className="text-white opacity-80 text-xs uppercase font-xs underline-offset-4 tracking-widest cursor-pointer hover:underline">Login / Sign Up</div></Link>
            </div>
      </div>
  </div>;
};
