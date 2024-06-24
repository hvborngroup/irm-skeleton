import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { Key } from 'react';

function ButtonPrev({ disabled, ...attributes }: { disabled?: boolean }) {
  return (
    <SfButton
      className={classNames('absolute !rounded-full z-10 left-4 bg-white hidden md:block', {
        '!hidden': disabled,
      })}
      variant="secondary"
      size="lg"
      square
      {...attributes}
    >
      <SfIconChevronLeft />
    </SfButton>
  );
}

ButtonPrev.defaultProps = { disabled: false };

function ButtonNext({ disabled, ...attributes }: { disabled?: boolean }) {
  return (
    <SfButton
      className={classNames('absolute !rounded-full z-10 right-4 bg-white hidden md:block', {
        '!hidden': disabled,
      })}
      variant="secondary"
      size="lg"
      square
      {...attributes}
    >
      <SfIconChevronRight />
    </SfButton>
  );
}

ButtonNext.defaultProps = { disabled: false };

export default function GalleryVertical({ products }: { products: any }) {

  return (
    <SfScrollable
      className="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      buttons-placement="floating"
      drag
      slotPreviousButton={<ButtonPrev />}
      slotNextButton={<ButtonNext />}
    >
      {products && products?.products?.length > 0 && products.products.map((val: { id: Key | null | undefined; images: []; title: string; price: string;  }) => (
        <div
          key={val.id}
          className="first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
        >
          <div className="relative">
            <SfLink href={`${"product/" + val.id}`} className="block">
              <img
                src={val.images[0]}
                alt={val.images[0]}
                className="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
                width="146"
                height="146"
              />
            </SfLink>
            <SfButton
              variant="tertiary"
              size="sm"
              square
              className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
              aria-label="Add to wishlist"
            >
              <SfIconFavorite size="sm" />
            </SfButton>
          </div>
          <div className="p-2 border-t border-neutral-200 typography-text-sm">
            <SfLink href={`${"product/" + val.id}`} variant="secondary" className="no-underline">
              {val.title}
            </SfLink>
            <span className="block mt-2 font-bold">{val.price}</span>
          </div>
        </div>
      ))}
    </SfScrollable>
  );
}
