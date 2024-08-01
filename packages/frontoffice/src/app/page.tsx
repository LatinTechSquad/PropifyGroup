// page.tsx
'use client';

import CardProduct from '@/components/ui/card/CardProduct';
import img1 from '@/assets/IMAGEN1.png';
import img2 from '@/assets/IMAGEN2.png';
import galpon from '@/assets/SETLOCAL1.png';

import CardContainer from '@/components/ui/card/CardContainer';

export default function Home() {
  return (
    <>
      <main className="w-full p-4">
        <section>
          <div className="grid grid-cols-12 items-center justify-around gap-2 col-span-12">
            <div className="flex gap-6 px-4 py-4 col-span-6">
              <article>
                <CardProduct
                  img={img1}
                  price="$$$"
                  description="lorem ipsum dolor sit amet, consectetur adip incid id"
                />
              </article>
              <article>
                <CardProduct
                  img={img1}
                  price="$$$"
                  description="lorem ipsum dolor sit amet, consectetur adip incid id"
                />
              </article>
            </div>

            <div className="col-span-6 gap-6 px-4 py-4">
              <article>
                <CardProduct
                  img={img2}
                  price="$$$"
                  description="lorem ipsum dolor sit amet, consectetur adip incid id"
                />
              </article>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center justify-around gap-2 col-span-12">
            <div className="col-span-6 gap-6 px-4 py-4">
              <article>
                <CardProduct
                  img={img2}
                  price="$$$"
                  description="lorem ipsum dolor sit amet, consectetur adip incid id"
                />
              </article>
            </div>

            <div className="flex gap-6 px-4 py-4 col-span-6">
              <article>
                <CardProduct
                  img={img1}
                  price="$$$"
                  description="lorem ipsum dolor sit amet, consectetur adip incid id"
                />
              </article>
              <article>
                <CardProduct
                  img={img1}
                  price="$$$"
                  description="lorem ipsum dolor sit amet, consectetur adip incid id"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="py-16">
          <span className="flex items-center justify-center bg-[#D9D9D9] rounded-xl px-6 py-1">
            <h2 className="text-5xl font-bold text-center text-primary-color">DESTACADOS DEL MES</h2>
          </span>

          <h3 className="font-semibold text-light-color text-3xl my-10 px-6">LOCALES Y GALPONES</h3>

          <div className="flex flex-col items-center gap-28 p-4">
            <article>
              <CardContainer
                title="Venta de local comercial"
                price="U$S489"
                location="En Montserrat"
                info={'215 m2'}
                bat={'1 baño'}
                description={
                  'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lacinia ornare pharetra, curabitur morbi mus quisque feugiat aenean leo consequat eros.'
                }
                image={galpon}
              />
            </article>

            <article>
              <CardContainer
                title="Venta de local comercial"
                price="U$S489"
                location="En Montserrat"
                info={'215 m2'}
                bat={'1 baño'}
                description={
                  'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lacinia ornare pharetra, curabitur morbi mus quisque feugiat aenean leo consequat eros.'
                }
                image={galpon}
              />
            </article>

            <article>
              <CardContainer
                title="Venta de local comercial"
                price="U$S489"
                location="En Montserrat"
                info={'215 m2'}
                bat={'1 baño'}
                description={
                  'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lacinia ornare pharetra, curabitur morbi mus quisque feugiat aenean leo consequat eros.'
                }
                image={galpon}
              />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
