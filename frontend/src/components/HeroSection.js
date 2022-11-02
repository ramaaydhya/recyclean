import React from 'react';
import './HeroSection.css';
import '../App.css'
import {Link} from 'react-router-dom'
import Footer from './Footer.js'

function HeroSection() {
  return (
    <div className='container-full'>
      <div className='hero-container'>
        <img src={require("../assets/images/home-pic3.jpg")} />
      </div>
      <div className='bot-text'>
        <div className='why'>
            <h1> Kenapa Recyclean?</h1><br/>        
            <h5>Recyclean merupakan suatu aplikasi berbasis web yang didalamnya memuat berbagai macam informasi tentang daur 
                ulang sampah. Dengan aplikasi ini, anda dapat melihat informasi tentang sampah yang dapat di daur ulang, tempat 
                pengumpulan sampah daur ulang, manfaat mendaur ulang , dan informasi tentang jumlah sampah di Indonesia. 
                Jika anda mengumpulkan sampah tersebut ke tempat pengumpulan sampah milik kami, pihak kami akan memberikan 
                suatu reward berupa poin yang dapat ditukar voucher belanja dan lain lain. Untuk saat ini jenis sampah yang 
                dikelola oleh kami adalah plastik, kertas dan botol kaca, dan kedepannya akan lebih banyak lagi jenis sampah 
                terpilah yang akan siap kami daur ulang. </h5> <br/>
        </div>
        <div className="kinds">
            <h1>Jenis Sampah Daur Ulang</h1><br/>
            <p>Berikut merupakan jenis sampah yang kami daur ulang</p><br/>
            <div className="kinds-icon">
                <Link>
                    <img src={require("../assets/images/glass.png")} alt="glass"  />
                </Link>
                <Link>
                    <img src={require("../assets/images/paper.png")} alt="paper" />
                </Link>
                <Link>
                    <img src={require("../assets/images/plastic.png")} alt="plastic" />
                </Link>
                <h2>Gelas Kertas Plastik </h2>
            </div> <br/>
        </div>
        <div className="location">
            <h1>Tempat Pengumpulan Sampah</h1><br/>
                <div className="locs-img">
                    <Link>
                        <img src={require("../assets/images/yogya.png")} alt="yogya" />
                    </Link>
                </div>
            <h2>Yogyakarta</h2><br/>
        </div>
        <div className="benefit">
            <h1>Manfaat Daur Ulang</h1><br/>
            <p>Manfaat dari mendaur ulang sampah adalah sebagai berikut</p>
            <p>1. Mengurangi pencemaran akibat sampah, menghemat energi, dan menjaga sumber daya alam</p>
            <p>2. Mencegah timbulnya penyakit di sekitar kita akibat sampah.</p>
            <p>3. Menambah pengetahuan dan mengasah kreativitas.</p>   
            <p>4. Menghemat pengeluaran.</p>
            <p>5. Mengurangi emisi gas rumah kaca.</p>
            <p>6. Dan masih banyak lagi manfaat lainnya.</p>
        </div>
        <div className="amount">
            <h1>Jumlah Sampah di Indonesia</h1><br/>
            <h2>Timbulan Sampah Indonesia Mencapai 29,565,740.01 (Ton/Tahun)</h2><br/>
            <p>Data diambil dari website https://sipsn.menlhk.go.id/sipsn</p> <br/>
        </div>
        <Footer /> 
      </div>
    </div>
  );
}

export default HeroSection;