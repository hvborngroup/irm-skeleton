import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import { displayDetails } from '@/lib/productsList'

export default function DisplayVerticalMultiple() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col gap-6 md:flex-row">
        {displayDetails.map(
          ({ title, subtitle, description, callToAction, image, backgroundColor, reverse }, index) => (
            <div
              key={`${title}-${index}`}
              className={classNames(
                `relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
                { 'flex-col-reverse': reverse },
              )}
            >
              <a
                className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
                aria-label={title}
                href="/tshirt"
              />
              <div className="flex flex-col items-center p-4 text-center md:p-10">
                <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{subtitle}</p>
                <p className="mb-4 font-bold typography-display-2">{title}</p>
                <p className="mb-4 typography-text-lg">{description}</p>
                <SfButton className="font-semibold !bg-neutral-900">{callToAction}</SfButton>
              </div>
              <div className="flex items-center w-full">
                <img src={image} alt={title} className="w-full" />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
