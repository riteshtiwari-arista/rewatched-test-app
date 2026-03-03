import { useState } from 'react'

function Settings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    title: 'Administrator',
    phone: '555-0199',
    timezone: 'America/New_York',
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    productUpdates: false,
  })

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactor: false,
  })

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handleNotificationChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked })
  }

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target
    setSecurity({ ...security, [name]: type === 'checkbox' ? checked : value })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    console.log('Profile updated:', profileData)
    alert('Profile updated successfully!')
  }

  const handleNotificationsSubmit = (e) => {
    e.preventDefault()
    console.log('Notifications updated:', notifications)
    alert('Notification preferences saved!')
  }

  const handleSecuritySubmit = (e) => {
    e.preventDefault()
    if (security.newPassword !== security.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Security updated')
    alert('Security settings updated!')
    setSecurity({ currentPassword: '', newPassword: '', confirmPassword: '', twoFactor: security.twoFactor })
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-description">Manage your account settings and preferences</p>
      </div>

      <div className="page-content">
        <div className="tabs">
          <ul className="tabs-list">
            <li>
              <button
                className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
            </li>
          </ul>
        </div>

        <div className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Profile Information</h2>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={handleProfileSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="title">
                    Job Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-input"
                    value={profileData.title}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="timezone">
                    Timezone
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    className="form-select"
                    value={profileData.timezone}
                    onChange={handleProfileChange}
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Europe/Paris">Paris (CET)</option>
                    <option value="Asia/Tokyo">Tokyo (JST)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'notifications' ? 'active' : ''}`}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Notification Preferences</h2>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={handleNotificationsSubmit}>
                <div className="form-group">
                  <label className="form-label">Email Notifications</label>
                  <div className="checkbox-group">
                    <div className="checkbox-item">
                      <input
                        id="emailNotifications"
                        name="emailNotifications"
                        type="checkbox"
                        className="checkbox-input"
                        checked={notifications.emailNotifications}
                        onChange={handleNotificationChange}
                      />
                      <label className="checkbox-label" htmlFor="emailNotifications">
                        Receive email notifications for important updates
                      </label>
                    </div>

                    <div className="checkbox-item">
                      <input
                        id="pushNotifications"
                        name="pushNotifications"
                        type="checkbox"
                        className="checkbox-input"
                        checked={notifications.pushNotifications}
                        onChange={handleNotificationChange}
                      />
                      <label className="checkbox-label" htmlFor="pushNotifications">
                        Enable push notifications
                      </label>
                    </div>

                    <div className="checkbox-item">
                      <input
                        id="weeklyReport"
                        name="weeklyReport"
                        type="checkbox"
                        className="checkbox-input"
                        checked={notifications.weeklyReport}
                        onChange={handleNotificationChange}
                      />
                      <label className="checkbox-label" htmlFor="weeklyReport">
                        Weekly summary report
                      </label>
                    </div>

                    <div className="checkbox-item">
                      <input
                        id="productUpdates"
                        name="productUpdates"
                        type="checkbox"
                        className="checkbox-input"
                        checked={notifications.productUpdates}
                        onChange={handleNotificationChange}
                      />
                      <label className="checkbox-label" htmlFor="productUpdates">
                        Product updates and announcements
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Save Preferences
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'security' ? 'active' : ''}`}>
          <div className="card mb-20">
            <div className="card-header">
              <h2 className="card-title">Change Password</h2>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={handleSecuritySubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="currentPassword">
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    className="form-input"
                    value={security.currentPassword}
                    onChange={handleSecurityChange}
                    placeholder="Enter current password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="newPassword">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="form-input"
                    value={security.newPassword}
                    onChange={handleSecurityChange}
                    placeholder="Enter new password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-input"
                    value={security.confirmPassword}
                    onChange={handleSecurityChange}
                    placeholder="Confirm new password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Update Password
                </button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Two-Factor Authentication</h2>
            </div>
            <div className="card-body">
              <div className="checkbox-item">
                <input
                  id="twoFactor"
                  name="twoFactor"
                  type="checkbox"
                  className="checkbox-input"
                  checked={security.twoFactor}
                  onChange={handleSecurityChange}
                />
                <label className="checkbox-label" htmlFor="twoFactor">
                  Enable two-factor authentication for additional security
                </label>
              </div>
              <div className="form-hint" style={{ marginTop: '12px' }}>
                Two-factor authentication adds an extra layer of security to your account
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
