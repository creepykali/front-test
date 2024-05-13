'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../_assets/logo.svg'
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter()
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg py-3 mb-4 mt-3">
                <div className="container-fluid">

                    <Link href="/" className="navbar-brand">
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

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li><Link href="#" className="nav-link px-2">Home</Link></li>
                            <li><Link href="#" className="nav-link px-2">Sobre</Link></li>
                            <li><Link href="#" className="nav-link px-2">Destino</Link></li>
                            <li><Link href="#" className="nav-link px-2">Tour</Link></li>
                            <li><Link href="#" className="nav-link px-2">Blog</Link></li>
                        </ul>

                        <div className="text-lg-end d-flex flex-column flex-lg-row">
                            <button type="button" className="btn me-4"  onClick={() => router.push('/login')}>Entrar</button>
                            <button type="button" className="btn btn-primary btn-shadow">Cadastro</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}