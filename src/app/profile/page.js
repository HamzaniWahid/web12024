export default function Profile() {
  const userData = {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    description: "John's profile description. It's a bit more personalized.",
    link: "https:/instagram.com/udin.u"
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={userData.imageUrl} className="card-img-top" alt="Profile" />
            <div className="card-body">
              <h5 className="card-title">{userData.name}</h5>
              <p className="card-text">{userData.description}</p>
              <a href={userData.link} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

