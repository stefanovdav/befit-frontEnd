export const Footer = () => {
    return (
        <div className='main-color bg-dark'>
            <footer className='container d-flex flex-wrap 
                justify-content-between align-items-center py-4'>
                <p className='col-md-4 text-white'>© BeFit App, Inc</p>
                <ul className='nav navbar-dark col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <ul className='nav-link px-2 text-white'>
                            Trading212 Bootcamp
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <ul className='nav-link px-2 text-white'>
                            David Stefanov
                        </ul>
                    </li>
                </ul>
            </footer>
        </div>
    );
}