import Head from 'next/head'
import { ImageComponent } from '../components/ImageComponent';
import {SiteHeader} from "../components/SiteHeader";
import { SiteFooter } from '../components/SiteFooter';


export default function Home({photos}) {
  console.log(photos);
  return (
    <div>
      <Head>
        <title>Unsplah Clone</title>
        <meta name="description" content="Unsplash clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <SiteHeader/>
      </header>

      <main className='bg-zinc-100 mt-10'>
        <div className="max-w-7xl p-2 py-10 lg:py-20 mx-auto">
          <div className="gap-2 lg:gap-5 columns-2 lg:columns-3">
            {photos.data.map(photo => (
              <ImageComponent key={photo.id} photo={photo}/>
            ))}
          </div>
          
        </div>
        
      </main>
      <footer>
        <SiteFooter/>
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch("http://localhost:1337/api/photos?populate=file");
  const photos = await res.json();
  return {props: {photos}}
}