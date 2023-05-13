import SocialNetworkContainer from "./SocialNetworkContainer"

import InformationContainer from "./InformationContainer"

import Avatar from "../img/eu5.jpg"

import "../style/components/sidebar.sass"

const Sidebar = () => {
  return ( 
<aside id="sidebar">
<img src={Avatar} alt="Felipe Andrade" />
<p className="title">Desenvolvedor</p>
<SocialNetworkContainer/>
<InformationContainer/>
<a href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQI59MANcPXsJwAAAYgRNTRCVCP7UfMXthPoVDfdbC4jeaIT0BOieQph2d95M2sHrFNRxmQklDdp0fNx1Ii-c75vWwFg-EZSxnRxjtCav4N55mMVLGBuN1YBhcXswzIGxn5JqikCSTUwxL1YONCs8IVIsEEVq5-_g_3rTBv8SZUas8lYZIIQxfT8zBuVgGCiNmDkbYoksz7tKPVGp16DiHgPxF4ny30_qQZgnYTs1rlR4miLLlf5RbG8fm0_maPgb7mvLwKw8uJhURf1a8wfxFbEZaU9OBUrYmAoOtrrdvvtMX8va4z_ONJCzVsLukoENZYHfWv38BpdzgMhbcVmAa0czUp_yjbcLPP7u0L6sCfnIYgLV4GqjHCF_cnA1QSfWJovkNqJHyD6Jr1vPfs6f41ldnTO9ilvrbI0nrc_Ogf8Lamz9l0b-ae8W1JevLSJNUxzCTci5tOu35IAINNALxU15RGuTWaxIlTuENAhvcdLbHWCvNCfagonNG2pjJStZ9JW4i4CSB-xWHgZNjppyc-k68AFwIUYuQyLa9Oz9wjzE8AY_zpMaIBrzZ5d5OvhAPqh4w&x-ambry-um-filename=Profile.pdf" className="btn">Dowload curriculo</a>
  </aside>
  )
}

export default Sidebar