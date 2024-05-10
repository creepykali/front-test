import Link from 'next/link'
import Image from 'next/image'
import logo from '../_assets/logo.png'


export default function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <Image
                            src={logo}
                            sizes="100vw"
                            alt=""
                            style={{
                                width: '130px',
                                height: 'auto',
                            }}
                        />
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link href="#" className="nav-link px-2">Home</Link></li>
                    <li><Link href="#" className="nav-link px-2">Sobre</Link></li>
                    <li><Link href="#" className="nav-link px-2">Destino</Link></li>
                    <li><Link href="#" className="nav-link px-2">Tour</Link></li>
                    <li><Link href="#" className="nav-link px-2">Blog</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>
        </div>
    );
}