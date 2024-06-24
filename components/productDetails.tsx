import {
  SfRating,
  SfButton,
  SfLink,
  SfCounter,
} from '@storefront-ui/react';
import { useCounter } from 'react-use';
import { useId, ChangeEvent } from 'react';
import { clamp } from '@storefront-ui/shared';
import { getProductsDetails } from "@/lib/products"

interface Props {
  prodId: any;
}

export default function ProductDetails({ prodId }: Props) {
  const data = getProductsDetails({ prodId });
  const inputId = useId();
  const min = 1;
  const max = 999;
  const [value, { inc, dec, set }] = useCounter(min);
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }

  function addToCart () {
    localStorage.setItem("prodId", prodId);
    localStorage.setItem("countId", JSON.stringify(value));
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = '/cart';
  }
  return (
    <section className="w-10/12">
      <div className="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
        Sale
      </div>
      <h1 className="mb-1 font-bold typography-headline-4">
        {data.title}
      </h1>
      <strong className="block font-bold typography-headline-3">{data.price}</strong>
      <div className="inline-flex items-center mt-4 mb-2">
        <SfRating size="xs" value={3} max={5} />
        <SfCounter className="ml-1" size="xs">
          123
        </SfCounter>
        <SfLink href="#" variant="secondary" className="ml-2 text-xs text-neutral-500">
          123 reviews
        </SfLink>
      </div>
      <ul className="mb-4 font-normal typography-text-sm">
        <li>{data.description}</li>
      </ul>
      <div className="py-4 mb-4 border-gray-200 border-y">
        <div className="items-start xs:flex">
          <div className="flex flex-col items-stretch xs:items-center xs:inline-flex">
            <div className="flex border border-neutral-300 rounded-md">
              <SfButton
                variant="tertiary"
                square
                className="rounded-r-none p-3"
                disabled={value <= min}
                aria-controls={inputId}
                aria-label="Decrease value"
                onClick={() => dec()}
              >
                Remove
              </SfButton>
              <input
                id={inputId}
                type="number"
                role="spinbutton"
                className="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                min={min}
                max={max}
                value={value}
                onChange={handleOnChange}
              />
              <SfButton
                variant="tertiary"
                square
                className="rounded-l-none p-3"
                disabled={value >= max}
                aria-controls={inputId}
                aria-label="Increase value"
                onClick={() => inc()}
              >
                Add
              </SfButton>
            </div>
            <p className="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
              <strong className="text-neutral-900">{max}</strong> in stock
            </p>
          </div>
          <SfButton onClick={addToCart} as="a" className="ml-2 max-w-[200px]">Add to cart</SfButton>
        </div>
        <div className="flex justify-center mt-4 gap-x-4">
          <SfButton size="sm" variant="tertiary">
            Compare
          </SfButton>
          <SfButton size="sm" variant="tertiary">
            Add to list
          </SfButton>
        </div>
      </div>
      <div className="flex first:mt-4">
        <p className="text-sm">
          Free shipping, arrives by Thu, Apr 7. Want it faster?
          <SfLink href="#" variant="secondary" className="mx-1">
            Add an address
          </SfLink>
          to see options
        </p>
      </div>
      <div className="flex mt-4">
        <p className="text-sm">
          Pickup not available at your shop.
          <SfLink href="#" variant="secondary" className="ml-1">
            Check availability nearby
          </SfLink>
        </p>
      </div>
      <div className="flex mt-4">
        <p className="text-sm">
          Free 30-days returns.
          <SfLink href="#" variant="secondary" className="ml-1">
            Details
          </SfLink>
        </p>
      </div>
    </section>
  );
}