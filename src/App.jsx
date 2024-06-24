import React from 'react'
import { About, Audits, Echosystem, Hero, Institutional, Investers, Navbar, Statistics,Blog, Advertise, Footer } from './components'
import { aboutpage, advertise, audits, blogpage, echosystempage, hero, institutional, investers, statistics,navlinks,footer } from './Data/paraswap'


const App = () => {
  return (
 <>
  <Navbar navlinks={navlinks} />
 <Hero hero={hero} />
 <About aboutpage={aboutpage} />
 <Statistics statistics ={statistics} />
 <Echosystem echosystempage={echosystempage} />
 <Institutional institutional={institutional} />
 <Investers investers={investers} />
 <Audits audits={audits} />
 <Blog blogpage={blogpage} />
<Advertise advertise={advertise} />
<Footer footer={footer}/>
 </>
  )
}

export default App
