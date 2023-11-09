import React from 'react';

function UserProfilePage() {
  const user = {
    userName: 'exampleUser',
    email: 'user@example.com',
    profilePicture: 'data:image/jpeg;base64,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', // Replace with the actual URL
    additionalInfo: 'This is some additional user information.',
  };

  const handleEditProfile = () => {
    // Handle edit profile logic
    console.log('Editing profile...');
  };

  const handleEditPassword = () => {
    // Handle edit password logic
    console.log('Editing password...');
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logging out...');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '500px',margin: '2px 0' }}>
        <h2 className="mb-4 text-center">User Profile</h2>

        <div className="text-center mb-3">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="rounded-circle"
            style={{ width: '100px', height: '100px' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={user.userName}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={user.email}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
          <textarea
            className="form-control"
            id="additionalInfo"
            value={user.additionalInfo}
            readOnly
          />
        </div>

        <button className="btn btn-primary btn-block" onClick={handleEditProfile}>Edit Profile</button>
        <button className="btn btn-info btn-block mt-2" onClick={handleEditPassword}>Edit Password</button>
        <button className="btn btn-danger btn-block mt-2" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default UserProfilePage;
