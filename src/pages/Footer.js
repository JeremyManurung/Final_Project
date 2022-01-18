import React from 'react'

function Footer() {
    return (
        <div style={{width:"100%"}}>
        <footer class=" py-20 text-white text-lg">
        <div class="container mx-auto">
          <div class="sm:flex mb-4">
            <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
              <h1 style={{fontSize:"25px",color:"black"}}>POL<span style={{color:"#C17C14"}}>GENT</span></h1>
              <p style={{color:"black"}}>
                Reedem your point you can <br />happy with more gift from us
              </p>
            </div>
            <div class="sm:w-1/4 h-auto">
              <div style={{color:"black",fontWeight:"bold"}} class="mb-8">Jelajahi</div>
              <ul style={{color:"black",paddingLeft:"0"}}>
                <li class="mb-3">Layanan Kami</li>
                <li class="mb-3">Reedem</li>
                <li class="mb-3">Pengembalian Point</li>
                <li class="mb-3">History</li>
              </ul>
            </div>
            <div class="sm:w-1/4 h-auto">
              <div style={{color:"black",fontWeight:"bold"}} class="mb-8">User</div>
              <ul style={{color:"black"}}>
                <li class="mb-3">Akun Saya</li>
                <li class="mb-3">Hadiah Terbaik</li>
                <li class="mb-3">Tutorial</li>
                <li class="mb-3">Withdrawl</li>
              </ul>
            </div>
            <div class="sm:w-1/4 h-auto">
              <div style={{color:"black",fontWeight:"bold"}} class="mb-8">Office</div>
              <ul style={{color:"black"}}>
                <li class="mb-3">+06267890162</li>
                <li class="mb-3">Medan Petisah</li>
                <li class="mb-3">No.14 (Polgent)</li>
                <li class="mb-3">support@polgent.gmail</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Footer
