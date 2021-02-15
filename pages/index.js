import Head from 'next/head'
import ShippingLabelMaker  from '../features/shipping-label-maker'
import ShippingLabel from '../features/shipping-label-maker/shipping-label'

const data = {
  from: {
    name: "Will Hitchcock",
    street: "101 w Hudson Ave",
    city: "Madison Heights",
    state: "MI",
    zip: "48071",
  },
  to: {
    name: "D'Shawne Butler",
    street: "101 w Hudson Ave",
    city: "Madison Heights",
    state: "MI",
    zip: "48071",
  },
  weight: 10,
  shippingOption: 1,
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shipping Label Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ShippingLabelMaker />
        {/* <ShippingLabel data={data} /> */}
      </main>

    </div>
  )
}
