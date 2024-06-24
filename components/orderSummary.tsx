import { SfButton } from '@storefront-ui/react';
import Link from 'next/link';

export default function OrderSummary() {
  const paramId = localStorage.getItem("prodId");
   // @ts-ignore
   const data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="relative min-h-[576px]">
      <picture>
        <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png" media="(min-width: 768px)" />
        <img
          src={data.images[0]}
          className="absolute w-full h-full z-[-1] object-cover"
        />
      </picture>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[576px] max-w-[1536px] mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img
            src={data.images[0]}
            alt="Headphones"
            className="h-full object-cover object-left"
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            ORDER PLACED SUCCESSFULLY
          </p>
          <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          {data.title}
          </h1>
          <p className="typography-text-base md:typography-text-lg">
            {data.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link href="/" passHref legacyBehavior>
              <SfButton as="a" size="lg" className="bg-white p-4" variant="secondary">
                Explore More
              </SfButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}