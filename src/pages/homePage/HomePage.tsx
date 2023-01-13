import { Link } from "react-router-dom"
export const HomePage = () => {
    return (
        <div className='p-5 bg-dark header'>
            <div className='container-fluid py-5 
            text-white d-flex 
            justify-content-center 
            align-items-center'>
                <div>
                    <h1 className='display-3 fw-bold'>COMMIT YOURSELF</h1>
                    <p className='col-md-8 fs-4'>CHALLENGE YOUR FRIENDS</p>
                    <Link className='btn main-color btn-lg
                        text-white' to='/login'>
                        Start your jorney
                    </Link>
                </div>
            </div>
        </div>
    )
}