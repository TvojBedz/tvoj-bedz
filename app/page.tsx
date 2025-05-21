import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100 text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Dobrodošli na TvojBedž</h1>
            <p className="max-w-xl mx-auto text-gray-700">
              Kreiraj i poruči svoj personalizovani bedž uz samo par klikova.
            </p>
          </div>
        </section>

        <section
          id="kako-funkcionise"
          className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-6">Kako funkcioniše</h2>
            <p className="max-w-screen-md mx-auto text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              orci nec urna fermentum commodo.
            </p>
          </div>
        </section>

        <section
          id="bedzevi"
          className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50 text-center"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-6">Popularni bedževi</h2>
            <p className="max-w-screen-md mx-auto text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel
              eros sit amet lorem.
            </p>
          </div>
        </section>

        <section
          id="kontakt"
          className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-6">Kontaktiraj nas</h2>
            <p className="max-w-screen-md mx-auto text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin
              eros at velit laoreet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
