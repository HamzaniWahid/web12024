export default function About() {
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-4"> {/* Adjust the column size to span 4 of 12 columns for medium screens */}
                    <div className="card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Profile Picture" />
                        <div className="card-body">
                            <h5 className="card-title">Your Name</h5>
                            <p className="card-text">
                                Here you can write a brief paragraph about yourself. Include your background, what you do, and any interests or hobbies you might have. This is your opportunity to introduce yourself to your visitors.
                            </p>
                            <a href="https://yourwebsite.com" className="btn btn-primary">Visit My Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}